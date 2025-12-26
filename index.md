---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}

<div class="home home-v6">

  <!-- HERO -->
  <section class="home-hero-v5" aria-label="M.R. TechForge hero">

    <div class="hero-grid">

      <!-- LEFT -->
      <div class="hero-left">
        <div class="hero-stamp-glow">M.R. TechForge</div>

        <h1 class="hero-headline">
          Crafting Clarity.<br>
          Building Solutions.<br>
          <span class="hero-headline-accent">Forged with Integrity.</span>
        </h1>

        <p class="hero-subtitle forge-text-gradient-soft">
          Practical, relationship-focused technology help for homes, churches, libraries,
          and small businesses — built with modern tools and honest guidance.
        </p>

        <div class="hero-actions">
          <a href="{{ links.pages.services }}" class="btn btn-forge home-btn">
            Explore Services
          </a>
          <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
            Get in Touch
          </a>
        </div>

        <div class="hero-badges" aria-label="Key strengths">
          <span class="hero-badge"><span class="mini-ico" aria-hidden="true">🧭</span>Clarity</span>
          <span class="hero-badge"><span class="mini-ico" aria-hidden="true">🛡️</span>Security</span>
          <span class="hero-badge"><span class="mini-ico" aria-hidden="true">🧱</span>Reliability</span>
          <span class="hero-badge"><span class="mini-ico" aria-hidden="true">🛠️</span>Craftsmanship</span>
        </div>
      </div>

      <!-- RIGHT: Video preview -->
      <div class="hero-right">
        <button type="button" class="hero-video-card hero-open-video" aria-haspopup="dialog" aria-label="Play MR TechForge video">
          <div class="hero-video-poster" aria-hidden="true"></div>

          <div class="hero-video-overlay" aria-hidden="true">
            <div class="play-ring">
              <div class="play-triangle"></div>
            </div>

            <div class="video-overlay-frame">
              <div class="video-frame-title">MR TechForge • Intro</div>
              <div class="video-frame-sub forge-text-gradient-soft">
                A quick look at how I approach clarity, security, and reliability.
              </div>

              <ul class="video-frame-bullets">
                <li><span class="mini-ico" aria-hidden="true">✅</span>Plain-English options</li>
                <li><span class="mini-ico" aria-hidden="true">✅</span>Clean, stable builds</li>
              </ul>

              <div class="video-frame-cta">
                <span class="mini-ico" aria-hidden="true">▶</span>
                Play (with audio)
              </div>
            </div>
          </div>
        </button>

        <div class="hero-video-note forge-text-gradient-soft">
          ~40 seconds • Optional • Click to play
        </div>
      </div>

    </div>
  </section>


  <!-- QUICK OVERVIEW -->
  <section class="home-quick-grid" aria-label="Quick overview">

    <div class="quick-card">
      <div class="quick-title-row">
        <span class="mini-ico" aria-hidden="true">🧰</span>
        <h2>What I Do</h2>
      </div>

      <p class="forge-text-gradient-soft">
        I design and build dependable systems that reduce noise and create calm —
        from communications to modern infrastructure.
      </p>

      <ul class="quick-list">
        <li class="forge-text-gradient-soft">
          {% include service_link.html id="forge-managed-phone-text" text="Managed phone &amp; text services" class="home-inline-link" %}
        </li>
        <li class="forge-text-gradient-soft">
          {% include service_link.html id="secure-network-services" text="Secure networking &amp; Wi-Fi" class="home-inline-link" %}
        </li>
        <li class="forge-text-gradient-soft">
          <a class="home-inline-link" href="{{ links.guides.digital_security }}">Digital security guidance</a>
        </li>
        <li class="forge-text-gradient-soft">Web tools &amp; lightweight automation</li>
      </ul>
    </div>

    <div class="quick-card">
      <div class="quick-title-row">
        <span class="mini-ico" aria-hidden="true">🤝</span>
        <h2>What to Expect</h2>
      </div>

      <ul class="quick-list">
        <li class="forge-text-gradient-soft"><span class="mini-ico" aria-hidden="true">✅</span>Clear explanations (no jargon)</li>
        <li class="forge-text-gradient-soft"><span class="mini-ico" aria-hidden="true">✅</span>Practical options you can choose from</li>
        <li class="forge-text-gradient-soft"><span class="mini-ico" aria-hidden="true">✅</span>Stable results you can rely on</li>
      </ul>

      <p class="quick-foot forge-text-gradient-soft">
        Calm, clean, and built to last.
      </p>
    </div>

    <div class="quick-card">
      <div class="quick-title-row">
        <span class="mini-ico" aria-hidden="true">🏡</span>
        <h2>Who I Help</h2>
      </div>

      <ul class="quick-list">
        <li class="forge-text-gradient-soft">Homes &amp; families</li>
        <li class="forge-text-gradient-soft">Churches &amp; ministries</li>
        <li class="forge-text-gradient-soft">Libraries &amp; community orgs</li>
        <li class="forge-text-gradient-soft">Small businesses</li>
      </ul>
    </div>

  </section>


  <!-- VALUES -->
  <section class="home-section-card home-pillars">
    <h2>What We Stand For</h2>

    <div class="pillar-grid">
      <div class="pillar-card">
        <h3>Clarity</h3>
        <p class="forge-text-gradient-soft">
          Plain English, transparent choices, and guidance you can trust.
        </p>
      </div>

      <div class="pillar-card">
        <h3>Reliability</h3>
        <p class="forge-text-gradient-soft">
          Stable systems built to last — no shortcuts, no fragile hacks.
        </p>
      </div>

      <div class="pillar-card">
        <h3>Integrity</h3>
        <p class="forge-text-gradient-soft">
          Honest recommendations rooted in faith, craftsmanship, and respect.
        </p>
      </div>
    </div>
  </section>


  <!-- HOW IT WORKS -->
  <section class="home-section-card home-how">
    <h2>How It Works</h2>

    <ul class="how-steps">
      <li class="mini-card">
        <span class="step-number">1. Connect</span>
        <span class="step-text forge-text-gradient-soft">
          We talk through what’s happening and what you want to improve.
        </span>
      </li>

      <li class="mini-card">
        <span class="step-number">2. Plan</span>
        <span class="step-text forge-text-gradient-soft">
          You get clear, practical options — no overwhelm.
        </span>
      </li>

      <li class="mini-card">
        <span class="step-number">3. Build</span>
        <span class="step-text forge-text-gradient-soft">
          Clean execution with long-term reliability in mind.
        </span>
      </li>
    </ul>

    <div class="how-actions">
      <a href="{{ links.pages.services }}" class="btn btn-forge home-btn">
        View Services
      </a>
      <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
        Start a Conversation
      </a>
    </div>
  </section>


  <!-- FINAL CTA -->
  <section class="home-final-callout" aria-label="Final call to action">
    <div class="final-card">
      <div class="final-brand forge-title-glow">M.R. TechForge</div>

      <p class="final-slogan">
        <span>Crafting Clarity.</span>
        <span>Building Solutions.</span>
        <span class="accent">Forged with Integrity.</span>
      </p>

      <div class="final-actions">
        <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
          Get in Touch
        </a>
        <a href="{{ links.pages.services }}" class="btn btn-forge home-btn">
          Explore Services
        </a>
      </div>
    </div>
  </section>

</div>


<!-- VIDEO MODAL (audio) -->
<div class="forge-modal" id="forgeHeroVideoModal" role="dialog" aria-modal="true" aria-label="MR TechForge brand video" hidden>
  <div class="forge-modal__backdrop" data-close></div>

  <div class="forge-modal__panel" role="document">
    <button class="forge-modal__close" type="button" aria-label="Close video" data-close>×</button>

    <video class="forge-modal__video" controls preload="metadata" playsinline>
      <source src="/assets/video/mrtechforge-hero.mp4" type="video/mp4">
    </video>

    <div class="forge-modal__caption forge-text-gradient-soft">
      Crafting Clarity. Building Solutions. Forged with Integrity.
    </div>
  </div>
</div>

<script>
(function () {
  const openBtn = document.querySelector('.hero-open-video');
  const modal = document.getElementById('forgeHeroVideoModal');
  if (!openBtn || !modal) return;

  const video = modal.querySelector('video');
  const closeEls = modal.querySelectorAll('[data-close]');

  function openModal() {
    modal.hidden = false;
    document.documentElement.classList.add('forge-modal-open');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  function closeModal() {
    if (video) video.pause();
    modal.hidden = true;
    document.documentElement.classList.remove('forge-modal-open');
  }

  openBtn.addEventListener('click', openModal);
  closeEls.forEach(el => el.addEventListener('click', closeModal));

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
  });
})();
</script>
