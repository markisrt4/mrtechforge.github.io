---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}

<div class="home home-v3">

  <!-- HERO -->
  <section class="forge-hero-cinematic" aria-label="M.R. TechForge hero">

    <!-- Poster-only hero background (no autoplay video) -->
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-vignette"></div>
      <div class="hero-scanline" aria-hidden="true"></div>
      <div class="hero-grain" aria-hidden="true"></div>
    </div>

    <div class="hero-inner">
      <div class="hero-stamp forge-title-glow">M.R. TechForge</div>

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
        <a href="{{ links.pages.services }}" class="btn btn-forge btn-hero">
          <span class="btn-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M14.7 6.3a1 1 0 0 1 0 1.4L9.4 13l2.6 2.6 5.3-5.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0L7.3 13.7a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z"/>
            </svg>
          </span>
          Explore Services
        </a>

        <a href="{{ links.pages.contact }}" class="btn btn-forge btn-hero btn-hero-secondary">
          <span class="btn-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
          </span>
          Get in Touch
        </a>

        <button type="button" class="btn btn-forge btn-hero btn-hero-tertiary hero-open-video" aria-haspopup="dialog">
          <span class="btn-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path d="M9 7.5v9l8-4.5-8-4.5z"/>
              <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 .001-16.001A8 8 0 0 1 12 20z"/>
            </svg>
          </span>
          Watch the Video
        </button>
      </div>

      <div class="hero-badges" aria-label="Key strengths">
        <span class="hero-badge">
          <span class="badge-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2 3 6v6c0 5 4 9.7 9 10 5-.3 9-5 9-10V6l-9-4zm0 18c-3.6-.5-7-4.2-7-8V7.3L12 4l7 3.3V12c0 3.8-3.4 7.5-7 8z"/></svg>
          </span>
          Security
        </span>
        <span class="hero-badge">
          <span class="badge-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M19 7h-1V6a6 6 0 0 0-12 0v1H5a2 2 0 0 0-2 2v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-11-1a4 4 0 0 1 8 0v1H8V6zm12 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h15v10z"/></svg>
          </span>
          Reliability
        </span>
        <span class="hero-badge">
          <span class="badge-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M21 7 9 19l-5.5-5.5 1.4-1.4L9 16.2 19.6 5.6 21 7z"/></svg>
          </span>
          Clarity
        </span>
        <span class="hero-badge">
          <span class="badge-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M14 7h-4V3H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4V9h4V7h-4V3h-2v4zm0 8h-4V9h4v6z"/></svg>
          </span>
          Craftsmanship
        </span>
      </div>
    </div>

    <div class="hero-scroll-hint" aria-hidden="true">
      <span class="scroll-dot"></span>
      <span class="scroll-text forge-text-gradient-soft">Scroll</span>
    </div>
  </section>


  <!-- QUICK OVERVIEW (no outer "card", fixes mobile readability) -->
  <section class="home-quick-grid" aria-label="Quick overview">

    <div class="quick-card">
      <h2>
        <span class="h2-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M2 12h4l3-9 6 18 3-9h4v2h-3l-4 12-6-18-2 6H2v-2z"/></svg>
        </span>
        What I Do
      </h2>

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
      <h2>
        <span class="h2-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.8V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.2c1.8-1.3 3-3.4 3-5.8a7 7 0 0 0-7-7zm2.6 11.2-.6.4V19h-4v-5.4l-.6-.4A5 5 0 1 1 14.6 13.2z"/></svg>
        </span>
        How It Feels
      </h2>

      <p class="forge-text-gradient-soft">
        No jargon. No pressure. Just clear options, clean execution,
        and systems that work the way they should.
      </p>

      <div class="signal-meter" aria-hidden="true">
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
      </div>

      <p class="quick-foot forge-text-gradient-soft">
        Built for real people — not big-tech chaos.
      </p>
    </div>

    <div class="quick-card">
      <h2>
        <span class="h2-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/></svg>
        </span>
        Who I Help
      </h2>

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
      <a href="{{ links.pages.services }}" class="btn btn-forge btn-cta">
        <span class="btn-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M3 13h18v-2H3v2zm0 6h12v-2H3v2zM3 7h18V5H3v2z"/></svg>
        </span>
        View Services
      </a>

      <a href="{{ links.pages.contact }}" class="btn btn-forge btn-cta btn-cta-secondary">
        <span class="btn-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>
        </span>
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
        <a href="{{ links.pages.contact }}" class="btn btn-forge btn-cta">
          <span class="btn-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>
          </span>
          Get in Touch
        </a>
        <a href="{{ links.pages.services }}" class="btn btn-forge btn-cta btn-cta-secondary">
          <span class="btn-ico" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 1 0 1.4L9.4 13l2.6 2.6 5.3-5.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0L7.3 13.7a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.4 0z"/></svg>
          </span>
          Explore Services
        </a>
      </div>
    </div>
  </section>

</div>


<!-- VIDEO MODAL (plays WITH audio) -->
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
    // Start playback with audio; user initiated, so allowed.
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }

  function closeModal() {
    if (video) {
      video.pause();
    }
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
