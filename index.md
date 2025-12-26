---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}

<div class="home home-v2">

  <!-- CINEMATIC HERO -->
  <section class="forge-hero-cinematic" aria-label="M.R. TechForge hero">

    <div class="hero-video-wrap" aria-hidden="true">

      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        poster="/assets/images/banner/social_banner.jpg">
        <source src="/assets/video/mrtechforge-hero.mp4" type="video/mp4">
      </video>

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
          Explore Services
        </a>
        <a href="{{ links.pages.contact }}" class="btn btn-forge btn-hero btn-hero-secondary">
          Get in Touch
        </a>
      </div>

      <div class="hero-badges" aria-label="Key strengths">
        <span class="hero-badge">Clarity</span>
        <span class="hero-badge">Security</span>
        <span class="hero-badge">Reliability</span>
        <span class="hero-badge">Craftsmanship</span>
      </div>
    </div>

  </section>


  <!-- QUICK OVERVIEW -->
  <section class="home-section-card home-quick-grid">

    <div class="quick-card">
      <h2>What I Do</h2>
      <p class="forge-text-gradient-soft">
        I design and build dependable systems that reduce noise and create calm —
        from communications to modern infrastructure.
      </p>

      <ul class="quick-list">
        <li class="forge-text-gradient-soft">
          <a href="{{ links.services.forge_managed_phone_text }}">Managed phone &amp; text services</a>
        </li>
        <li class="forge-text-gradient-soft">
          <a href="{{ links.services.secure_network }}">Secure networking &amp; Wi-Fi</a>
        </li>
        <li class="forge-text-gradient-soft">
          <a href="{{ links.guides.digital_security }}">Digital security guidance</a>
        </li>
        <li class="forge-text-gradient-soft">
          Web tools &amp; lightweight automation
        </li>
      </ul>
    </div>

    <div class="quick-card">
      <h2>How It Feels</h2>
      <p class="forge-text-gradient-soft">
        No jargon. No pressure. Just clear options, clean execution,
        and systems that work the way they should.
      </p>

      <p class="quick-foot forge-text-gradient-soft">
        Built for real people — not big-tech chaos.
      </p>
    </div>

    <div class="quick-card">
      <h2>Who I Help</h2>
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
      <a href="{{ links.pages.services }}" class="btn btn-forge">
        View Services
      </a>
      <a href="{{ links.pages.contact }}" class="btn btn-forge btn-hero-secondary">
        Start a Conversation
      </a>
    </div>
  </section>


  <!-- FINAL CTA -->
  <section class="home-final-callout">
    <div class="final-card">
      <div class="final-brand forge-title-glow">M.R. TechForge</div>

      <p class="final-slogan">
        <span>Crafting Clarity.</span>
        <span>Building Solutions.</span>
        <span class="accent">Forged with Integrity.</span>
      </p>

      <div class="final-actions">
        <a href="{{ links.pages.contact }}" class="btn btn-forge btn-hero">
          Get in Touch
        </a>
        <a href="{{ links.pages.services }}" class="btn btn-forge btn-hero btn-hero-secondary">
          Explore Services
        </a>
      </div>
    </div>
  </section>

</div>
