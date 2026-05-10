(function () {
  "use strict";

  const state = {
    musicReady: false,
    musicPlaying: false,
    heartTimer: null,
    typingTimer: null,
    visibleReasons: 6
  };

  document.addEventListener("DOMContentLoaded", initApp);

  function initApp() {
    applyOpeningContent();
    initOpening();
    initMusic();
    renderHero();
    renderLoveCounter();
    renderTimeline();
    renderGallery();
    renderReasons();
    renderLetter();
    renderFinalSection();
    initScrollReveal();
    initModals();
  }

  function applyOpeningContent() {
    setText("#openingTitle", LOVE_CONFIG.opening.title);
    setText("#openGiftButton", LOVE_CONFIG.opening.buttonText);
  }

  function initOpening() {
    const opening = document.querySelector("#opening");
    const main = document.querySelector("#mainContent");
    const openButton = document.querySelector("#openGiftButton");

    openButton.addEventListener("click", async () => {
      opening.classList.add("is-hidden");
      main.classList.add("is-active");
      document.body.classList.add("gift-opened");
      startFloatingHearts();
      startTypingEffect();
      await playMusic();
      setTimeout(() => {
        document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
      }, 450);
    });
  }

  function initMusic() {
    const audio = document.querySelector("#bgMusic");
    const toggle = document.querySelector("#musicToggle");

    if (!LOVE_CONFIG.music.enabled) {
      toggle.hidden = true;
      return;
    }

    audio.src = LOVE_CONFIG.music.src;
    toggle.addEventListener("click", async () => {
      if (state.musicPlaying) {
        audio.pause();
        updateMusicButton(false);
        return;
      }
      await playMusic();
    });

    audio.addEventListener("play", () => updateMusicButton(true));
    audio.addEventListener("pause", () => updateMusicButton(false));
    audio.addEventListener("error", () => {
      updateMusicButton(false);
      renderYoutubeFallback();
    });
  }

  async function playMusic() {
    const audio = document.querySelector("#bgMusic");
    if (!LOVE_CONFIG.music.enabled || !audio.src) return;

    try {
      await audio.play();
      state.musicReady = true;
      updateMusicButton(true);
    } catch (error) {
      state.musicReady = false;
      updateMusicButton(false);
      renderYoutubeFallback();
      console.warn("Audio blocked or missing:", error);
    }
  }

  function updateMusicButton(isPlaying) {
    state.musicPlaying = isPlaying;
    setText("#musicIcon", isPlaying ? "♫" : "♪");
    document.querySelector("#musicToggle").classList.toggle("is-playing", isPlaying);
  }

  function renderYoutubeFallback() {
    const host = document.querySelector("#youtubeMusic");
    if (!LOVE_CONFIG.music.youtubeUrl || host.dataset.loaded === "true") return;

    const videoId = getYoutubeId(LOVE_CONFIG.music.youtubeUrl);
    if (!videoId) return;

    host.dataset.loaded = "true";
    host.innerHTML = `
      <iframe
        title="Bản nhạc nền gợi ý"
        src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
    `;
  }

  function renderHero() {
    setText("#heroEyebrow", LOVE_CONFIG.hero.eyebrow || "Gửi em");
    setText("#heroTitle", LOVE_CONFIG.hero.title);
    setText("#heroSubtitle", LOVE_CONFIG.hero.subtitle);
  }

  function startTypingEffect() {
    const target = document.querySelector("#typingText");
    const messages = LOVE_CONFIG.hero.typingMessages || [];
    let messageIndex = 0;
    let charIndex = 0;
    let deleting = false;

    clearTimeout(state.typingTimer);

    function tick() {
      const current = messages[messageIndex] || "";
      target.textContent = deleting
        ? current.slice(0, charIndex--)
        : current.slice(0, charIndex++);

      if (!deleting && charIndex > current.length + 18) deleting = true;
      if (deleting && charIndex < 0) {
        deleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        charIndex = 0;
      }

      state.typingTimer = setTimeout(tick, deleting ? 35 : 70);
    }

    if (messages.length) tick();
  }

  function renderLoveCounter() {
    const grid = document.querySelector("#counterGrid");
    const fallback = document.querySelector("#counterFallback");
    const date = new Date(`${LOVE_CONFIG.couple.startDate}T00:00:00`);

    grid.innerHTML = ["ngày", "giờ", "phút", "giây"]
      .map((label) => `<div class="counter-card"><strong>0</strong><span>${label}</span></div>`)
      .join("");

    if (Number.isNaN(date.getTime())) {
      fallback.textContent = "Ngày bắt đầu yêu chưa được thiết lập trong config.";
      return;
    }

    const values = grid.querySelectorAll("strong");

    function updateCounter() {
      const diff = Math.max(0, Date.now() - date.getTime());
      const seconds = Math.floor(diff / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      [days, hours, minutes, remainingSeconds].forEach((value, index) => {
        values[index].textContent = String(value).padStart(index === 0 ? 1 : 2, "0");
      });
    }

    updateCounter();
    setInterval(updateCounter, 1000);
  }

  function renderTimeline() {
    const list = document.querySelector("#timelineList");
    list.innerHTML = LOVE_CONFIG.timeline
      .map(
        (item) => `
          <article class="timeline-item reveal">
            <div class="timeline-dot" aria-hidden="true"></div>
            <div class="love-card timeline-card">
              <p class="timeline-date">${escapeHtml(item.date)}</p>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              ${renderOptionalImage(item.image, item.title, "timeline-image")}
            </div>
          </article>
        `
      )
      .join("");

    bindImageFallbacks(list);
  }

  function renderGallery() {
    const grid = document.querySelector("#galleryGrid");
    grid.innerHTML = LOVE_CONFIG.gallery
      .map(
        (item, index) => `
          <button class="polaroid-card reveal" type="button" data-gallery-index="${index}">
            ${renderOptionalImage(item.src, item.caption, "gallery-image")}
            <span>${escapeHtml(item.caption)}</span>
          </button>
        `
      )
      .join("");

    bindImageFallbacks(grid);
    grid.querySelectorAll("[data-gallery-index]").forEach((button) => {
      button.addEventListener("click", () => {
        openGalleryModal(LOVE_CONFIG.gallery[Number(button.dataset.galleryIndex)]);
      });
    });
  }

  function renderReasons() {
    const list = document.querySelector("#reasonsList");
    const button = document.querySelector("#showMoreReasons");
    const reasons = LOVE_CONFIG.reasons || [];

    list.innerHTML = reasons
      .slice(0, state.visibleReasons)
      .map(
        (reason, index) => `
          <article class="reason-card reveal">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <p>${escapeHtml(reason)}</p>
          </article>
        `
      )
      .join("");

    button.hidden = state.visibleReasons >= reasons.length;
    button.onclick = () => {
      state.visibleReasons = reasons.length;
      renderReasons();
      initScrollReveal();
    };
  }

  function renderLetter() {
    setText("#letterTitle", LOVE_CONFIG.letter.title);
    document.querySelector("#letterBody").innerHTML = LOVE_CONFIG.letter.paragraphs
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  function renderFinalSection() {
    setText("#finalQuestion", LOVE_CONFIG.final.question);
    setText("#hugButton", LOVE_CONFIG.final.primaryButton);
    setText("#shyButton", LOVE_CONFIG.final.secondaryButton);
    setText("#hugTitle", LOVE_CONFIG.final.popupTitle);
    setText("#hugMessage", LOVE_CONFIG.final.popupMessage);

    document.querySelector("#hugButton").addEventListener("click", openHugModal);
    initFacebookMessageButton();
    initShyButton();
  }

  function initFacebookMessageButton() {
    const button = document.querySelector("#sendFacebookMessage");
    const facebookUrl = LOVE_CONFIG.final.facebookMessageUrl;

    if (!button || !facebookUrl) return;

    button.addEventListener("click", () => {
      window.open(facebookUrl, "_blank", "noopener,noreferrer");
      closeHugModal();
    });
  }

  function initShyButton() {
    const button = document.querySelector("#shyButton");
    const move = () => {
      if (window.innerWidth <= 768) return;
      button.style.transform = `translate(${randomBetween(-80, 80)}px, ${randomBetween(-48, 48)}px)`;
    };

    button.addEventListener("mouseenter", move);
    button.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        openHugModal();
      } else {
        move();
      }
    });
  }

  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal:not(.is-observed)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => {
      element.classList.add("is-observed");
      observer.observe(element);
    });
  }

  function startFloatingHearts() {
    if (state.heartTimer) return;
    state.heartTimer = setInterval(createFloatingHeart, 650);
    for (let index = 0; index < 8; index += 1) {
      setTimeout(createFloatingHeart, index * 140);
    }
  }

  function createFloatingHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.35 ? "❤" : "✦";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${randomBetween(4200, 6800)}ms`;
    heart.style.fontSize = `${randomBetween(14, 28)}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  function initModals() {
    document.querySelectorAll("[data-close-gallery]").forEach((button) => {
      button.addEventListener("click", closeGalleryModal);
    });
    document.querySelectorAll("[data-close-hug]").forEach((button) => {
      button.addEventListener("click", closeHugModal);
    });
    document.querySelector("#galleryModal").addEventListener("click", (event) => {
      if (event.target.id === "galleryModal") closeGalleryModal();
    });
    document.querySelector("#hugModal").addEventListener("click", (event) => {
      if (event.target.id === "hugModal") closeHugModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeGalleryModal();
        closeHugModal();
      }
    });
  }

  function openGalleryModal(item) {
    const modal = document.querySelector("#galleryModal");
    const image = document.querySelector("#galleryModalImage");
    image.src = item.src;
    image.alt = item.caption;
    setText("#galleryModalCaption", item.caption);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeGalleryModal() {
    const modal = document.querySelector("#galleryModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  function openHugModal() {
    const modal = document.querySelector("#hugModal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    for (let index = 0; index < 18; index += 1) {
      setTimeout(createFloatingHeart, index * 70);
    }
  }

  function closeHugModal() {
    const modal = document.querySelector("#hugModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  function renderOptionalImage(src, alt, className) {
    if (!src) return `<div class="${className} image-placeholder">Một kỷ niệm đang chờ được thêm ảnh...</div>`;
    return `
      <div class="${className}">
        <img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt || "Kỷ niệm của chúng ta")}" loading="lazy" />
        <div class="image-placeholder">Một kỷ niệm đang chờ được thêm ảnh...</div>
      </div>
    `;
  }

  function bindImageFallbacks(root) {
    root.querySelectorAll("img").forEach((image) => {
      image.addEventListener("error", () => {
        image.parentElement.classList.add("has-error");
      });
      image.addEventListener("load", () => {
        image.parentElement.classList.add("is-loaded");
      });
    });
  }

  function getYoutubeId(url) {
    const match = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
    return match ? match[1] : "";
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value || "";
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replaceAll("`", "&#096;");
  }
})();
