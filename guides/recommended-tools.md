---
layout: default
title: "Recommended Tools"
permalink: /guides/recommended-tools/
class: guide-page recommended-tools-page
description: "Privacy-first tools I recommend because they’re useful, practical, and don’t treat you like the product."
---

{% assign links = site.data.links %}

<section class="guide-hero">
  <div class="guide-hero-inner">
    <div class="guide-hero-text">
      <h1 class="guide-title">Recommended Tools</h1>
      <p class="guide-subtitle">
        Tools I recommend because they’re useful, respect privacy, and don’t treat you like the product.
      </p>

      <div class="guide-badges">
        <span class="guide-badge">🛡️ Privacy-first</span>
        <span class="guide-badge">🧰 Practical</span>
        <span class="guide-badge">😌 Low-drama</span>
      </div>
    </div>

    <div class="guide-hero-actions">
      <a class="forge-btn" href="{{ links.guides.digital_security | relative_url }}">Related: Digital Security</a>
      <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Get help migrating</a>
    </div>
  </div>
</section>

<section class="guide-wrap">

  <div class="tool-grid">

    <article class="tool-card forge-card">
      <div class="tool-head">
        <h2 class="tool-name">Proton</h2>
        <div class="tool-tags">
          <span class="tool-tag">Email</span>
          <span class="tool-tag">Calendar</span>
          <span class="tool-tag">Drive</span>
        </div>
      </div>

      <p class="tool-desc">
        Secure email and privacy tools that don’t rely on surveillance advertising. If you’re trying to
        “break up with Google” without suffering, Proton is a strong step.
      </p>

      <ul class="tool-points">
        <li>Email &amp; calendar alternatives</li>
        <li>Strong security posture</li>
        <li>Solid “boring and reliable” vibes</li>
      </ul>

      <div class="tool-actions">
        <a class="tool-link" href="{{ links.external.proton_referral }}" target="_blank" rel="noopener">Try Proton (referral) →</a>
        <span class="tool-note">Disclosure: that link is a referral and may support the site.</span>
      </div>
    </article>

    <article class="tool-card forge-card">
      <div class="tool-head">
        <h2 class="tool-name">Signal</h2>
        <div class="tool-tags">
          <span class="tool-tag">Messaging</span>
          <span class="tool-tag">Private</span>
        </div>
      </div>

      <p class="tool-desc">
        If you only change one thing, make it your default messaging app.
        Signal is simple, secure, and widely trusted for private communication.
      </p>

      <ul class="tool-points">
        <li>End-to-end encrypted messaging</li>
        <li>Great for groups + family threads</li>
        <li>No creepy ad ecosystem attached</li>
      </ul>

      <div class="tool-actions">
        <a class="tool-link" href="{{ links.external.signal }}" target="_blank" rel="noopener">Visit Signal →</a>
      </div>
    </article>

    <article class="tool-card forge-card">
      <div class="tool-head">
        <h2 class="tool-name">Linux</h2>
        <div class="tool-tags">
          <span class="tool-tag">OS</span>
          <span class="tool-tag">Control</span>
        </div>
      </div>

      <p class="tool-desc">
        Linux gives you control back. It’s stable, flexible, and doesn’t “phone home” the way many consumer
        platforms do. Plus, it’s the foundation of most modern infrastructure anyway.
      </p>

      <ul class="tool-points">
        <li>Privacy &amp; control (when configured responsibly)</li>
        <li>Excellent for servers, dev, and power users</li>
        <li>Long-term stability</li>
      </ul>

      <div class="tool-actions">
        <a class="tool-link" href="{{ links.guides.digital_security | relative_url }}">Related: Digital Security →</a>
      </div>
    </article>

  </div>

  <section class="guide-cta forge-card">
    <h2 class="guide-cta-title">Want help choosing or migrating?</h2>
    <p class="guide-cta-text">
      If you want to switch tools without breaking your workflow, I can help you do it cleanly and calmly.
    </p>
    <p class="guide-cta-actions">
      <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Get in Touch</a>
    </p>
  </section>

</section>
