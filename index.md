---
layout: default
title: "Home"
permalink: /
class: home
---

{% assign links = site.data.links %}
{% assign intro_youtube_id = site.intro_youtube_id | default: "REPLACE_WITH_YOUTUBE_ID" %}

<div class="home home-v9">

  <!-- ============================
       HERO INTRO (NOT A CARD)
  ============================ -->
  <section class="hero-intro" aria-label="M.R. TechForge introduction">
    <div class="hero-kicker">M.R. TECHFORGE</div>

    <h1 class="hero-headline">
      <span class="hero-line hero-blue">Crafting Clarity.</span><br />
      <span class="hero-line hero-silver">Building Solutions.</span><br />
      <span class="hero-line hero-gold">Forged with Integrity.</span>
    </h1>

    <p class="hero-subtext">
      Practical, relationship-focused technology help for homes, churches, libraries, and small
      businesses — built with modern tools and honest guidance.
    </p>
  </section>

  <!-- ============================
       HERO ACTIONS (CARD)
  ============================ -->
  <section class="hero-actions" aria-label="Primary actions">
    <div class="hero-actions-card">
      <div class="hero-cta-row">
        <a class="forge-btn forge-btn-primary" href="/services/">Explore Services</a>
        <a class="forge-btn forge-btn-secondary" href="/contact/">Get in Touch</a>
      </div>

      <div class="hero-badges" role="list" aria-label="Core values">
        <span class="hero-badge" role="listitem">🧠 Clarity</span>
        <span class="hero-badge" role="listitem">🛡️ Security</span>
        <span class="hero-badge" role="listitem">🧱 Reliability</span>
        <span class="hero-badge" role="listitem">🛠️ Craftsmanship</span>
      </div>
    </div>
  </section>

  <!-- ============================
       INTRO VIDEO (INLINE YOUTUBE)
  ============================ -->
  <section class="home-video" aria-label="Intro video">
    <div class="video-card">
      <div class="video-frame" data-tap-hint="Tap to play">
        {% if intro_youtube_id and intro_youtube_id != "REPLACE_WITH_YOUTUBE_ID" %}
          <iframe
            class="video-embed"
            src="https://www.youtube-nocookie.com/embed/{{ intro_youtube_id }}?rel=0&modestbranding=1"
            title="M.R. TechForge — Intro"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        {% else %}
          <div class="video-placeholder">
            <strong>Video not configured yet.</strong><br />
            Set <code>intro_youtube_id</code> in <code>_config.yml</code> or replace the default in <code>index.md</code>.
          </div>
        {% endif %}
      </div>

      <div class="video-meta">
        <div class="video-title">MR TechForge — Intro</div>
        <div class="video-caption">~40 seconds • Click play with sound</div>
      </div>
    </div>
  </section>

  <!-- ============================
       NEXT SECTIONS (EXISTING CONTENT)
       Keep your existing cards/sections below as-is.
  ============================ -->

  <!-- Example: your 3 cards row can stay unchanged -->
  <!--
  <section class="home-panels">
    ...
  </section>
  -->

</div>