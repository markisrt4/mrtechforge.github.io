---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}
{% assign intro_youtube_id = site.intro_youtube_id | default: "" %}

<div class="home home-v8">

  <!-- HERO INTRO (TEXT OUTSIDE CARD) -->
  <section class="home-hero-intro" aria-label="M.R. TechForge intro">

    <!-- OUTSIDE CARD -->
    <div class="hero-intro-top">
      <div class="hero-stamp-sweep" data-text="M.R. TechForge">M.R. TechForge</div>

      <h1 class="hero-headline">
        <span class="hero-line hero-line-blue">Crafting Clarity.</span><br>
        <span class="hero-line hero-line-silver">Building Solutions.</span><br>
        <span class="hero-line hero-line-hot">Forged with Integrity.</span>
      </h1>

<img src="/assets/images/hero-forge-tech.png" alt="Forged steel and glowing circuitry — craftsmanship meets technology" class = "hero-forge-image" />

      <p class="hero-subtitle forge-text-gradient-soft">
        Practical, relationship-focused technology help for homes, churches, libraries,
        and small businesses — built with modern tools and honest guidance.
      </p>
    </div>

    <!-- ACTIONS IN A CARD -->
    <div class="hero-intro-actions forge-card">

      <div class="hero-actions">
        <a href="{{ links.pages.services }}" class="btn btn-forge home-btn">
          <span class="mini-ico" aria-hidden="true">🧰</span>
          Explore Services
        </a>
        <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
          <span class="mini-ico" aria-hidden="true">✉️</span>
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


  <!-- HERO VIDEO (YOUTUBE, BELOW INTRO) -->
  <section class="home-hero-video" aria-label="MR TechForge intro video">
    <div class="hero-video-wrap">

      <!-- ✅ NOT inside a card anymore -->
      <div class="hero-video-shell">

        <div class="hero-video-card hero-video-embed" aria-label="MR TechForge video">
          {% if intro_youtube_id != "" %}

            <div class="hero-youtube-frame" data-tap-hint="Tap to play">
              <iframe
                class="hero-youtube-iframe"
                src="https://www.youtube-nocookie.com/embed/{{ intro_youtube_id }}?rel=0&modestbranding=1"
                title="MR TechForge — Intro"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>

              <div class="hero-video-overlay" aria-hidden="true">
                <div class="play-ring">
                  <div class="play-triangle"></div>
                </div>
              </div>
            </div>

          {% else %}

            <div class="hero-video-missing forge-text-gradient-soft">
              <strong>Video not configured yet.</strong><br>
              Add <code>intro_youtube_id</code> in <code>_config.yml</code>.
            </div>

          {% endif %}
        </div>

        <div class="hero-video-meta">
          <div class="chip-title">MR TechForge — Intro</div>
          <div class="chip-sub forge-text-gradient-soft"> Tap to play with sound</div>
        </div>

      </div>

      <div class="hero-video-caption forge-text-gradient-soft">
        <span class="mini-ico" aria-hidden="true">🎬</span>
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
        <span class="mini-ico" aria-hidden="true">🧭</span>
        View Services
      </a>
      <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
        <span class="mini-ico" aria-hidden="true">💬</span>
        Start a Conversation
      </a>
    </div>
  </section>


  <!-- FINAL CTA -->
  <section class="home-final-callout" aria-label="Final call to action">
    <div class="final-card forge-card">
      <div class="final-brand hero-stamp-sweep" data-text="M.R. TechForge">M.R. TechForge</div>

      <p class="final-slogan">
        <span>Crafting Clarity.</span>
        <span>Building Solutions.</span>
        <span class="accent">Forged with Integrity.</span>
      </p>

      <div class="final-actions">
        <a href="{{ links.pages.contact }}" class="btn btn-forge home-btn">
          <span class="mini-ico" aria-hidden="true">✉️</span>
          Get in Touch
        </a>
        <a href="{{ links.pages.services }}" class="btn btn-forge home-btn">
          <span class="mini-ico" aria-hidden="true">🧰</span>
          Explore Services
        </a>
      </div>
    </div>
  </section>

</div>