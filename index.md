---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}

<div class="home home-v8">

  <!-- HERO INTRO (TEXT ONLY) -->
  <section class="home-hero-intro" aria-label="M.R. TechForge intro">
    <div class="hero-intro-card forge-card">

      <div class="hero-stamp-glow hero-stamp-glow--forge">M.R. TechForge</div>

      <h1 class="hero-headline">
        <span class="hero-line hero-line-blue">Crafting Clarity.</span><br>
        <span class="hero-line hero-line-silver">Building Solutions.</span><br>
        <span class="hero-line hero-line-hot">Forged with Integrity.</span>
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
  </section>


  <!-- HERO VIDEO (BELOW INTRO) -->
  <section class="home-hero-video" aria-label="MR TechForge intro video">
    <div class="hero-video-wrap">

      <div class="forge-card hero-video-shell">

        <button
          type="button"
          class="hero-video-card hero-open-video"
          aria-haspopup="dialog"
          aria-label="Play MR TechForge intro video">

          <video
            class="hero-video-preview"
            muted
            playsinline
            preload="none"
            poster="{{ '/assets/video/mrtechforge-hero-poster.jpg' | relative_url }}">
            <source src="{{ '/assets/video/mrtechforge-hero.mp4' | relative_url }}" type="video/mp4">
          </video>

          <!-- overlay is now ONLY the play control + dark gradient -->
          <div class="hero-video-overlay" aria-hidden="true">
            <div class="play-ring">
              <div class="play-triangle"></div>
            </div>
          </div>
        </button>

        <!-- ✅ moved BELOW the video -->
        <div class="hero-video-meta">
          <div class="chip-title">MR TechForge — Intro</div>
          <div class="chip-sub forge-text-gradient-soft">~40 seconds • Click to play with sound</div>
        </div>

      </div>

      <div class="hero-video-caption forge-text-gradient-soft">
        A quick introduction to how M.R. TechForge thinks and builds.
      </div>

    </div>
  </section>


  <!-- QUICK OVERVIEW -->
  <section class="home-quick-grid" aria-label="Quick overview">

    <div class="quick-card forge-card">
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

    <div class="quick-card forge-card">
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

    <div class="quick-card forge-card">
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
  <section class="home-section-card home-pillars forge-card">
    <h2>What We Stand For</h2>

    <div class="pillar-grid">
      <div class="pillar-card forge-card">
        <h3>Clarity</h3>
        <p class="forge-text-gradient-soft">
          Plain English, transparent choices, and guidance you can trust.
        </p>
      </div>

      <div class="pillar-card forge-card">
        <h3>Reliability</h3>
        <p class="forge-text-gradient-soft">
          Stable systems built to last — no shortcuts, no fragile hacks.
        </p>
      </div>

      <div class="pillar-card forge-card">
        <h3>Integrity</h3>
        <p class="forge-text-gradient-soft">
          Honest recommendations rooted in faith, craftsmanship, and respect.
        </p>
      </div>
    </div>
  </section>


  <!-- HOW IT WORKS -->
  <section class="home-section-card home-how forge-card">
    <h2>How It Works</h2>

    <ul class="how-steps">
      <li class="mini-card forge-card">
        <span class="step-number">1. Connect</span>
        <span class="step-text forge-text-gradient-soft">
          We talk through what’s happening and what you want to improve.
        </span>
      </li>

      <li class="mini-card forge-card">
        <span class="step-number">2. Plan</span>
        <span class="step-text forge-text-gradient-soft">
          You get clear, practical options — no overwhelm.
        </span>
      </li>

      <li class="mini-card forge-card">
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
    <div class="final-card forge-card">
      <div class="final-brand hero-stamp-glow hero-stamp-glow--forge">M.R. TechForge</div>

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


<!-- VIDEO MODAL (plays with audio) -->
<div class="forge-modal" id="forgeHeroVideoModal" role="dialog" aria-modal="true" aria-label="MR TechForge brand video" hidden>
  <div class="forge-modal__backdrop" data-close></div>

  <div class="forge-modal__panel" role="document">
    <button class="forge-modal__close" type="button" aria-label="Close video" data-close>×</button>

    <video class="forge-modal__video" controls preload="metadata" playsinline>
      <source src="{{ '/assets/video/mrtechforge-hero.mp4' | relative_url }}" type="video/mp4">
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

  // True for desktop-like environments
  const canAutoplayAttempt =
    window.matchMedia &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function lockScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.dataset.scrollY = String(y);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${y}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    const y = parseInt(document.body.dataset.scrollY || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    delete document.body.dataset.scrollY;
    window.scrollTo(0, y);
  }

  function openModal() {
    modal.hidden = false;
    document.documentElement.classList.add('forge-modal-open');
    lockScroll();

    // Desktop: try to start playing right away
    // Mobile: do NOT auto-play (prevents scroll-jumps + audio restrictions)
    if (video) {
      video.currentTime = 0;

      if (canAutoplayAttempt) {
        // defer to avoid focus/scroll weirdness
        requestAnimationFrame(() => {
          video.play().catch(() => {});
        });
      }
    }
  }

  function closeModal() {
    if (video) video.pause();
    modal.hidden = true;
    document.documentElement.classList.remove('forge-modal-open');
    unlockScroll();
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  closeEls.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  }));

  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
  });
})();
</script>