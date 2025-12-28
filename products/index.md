---
layout: default
title: "Products"
permalink: /products/
class: products products-landing
description: "Forge-built tools and tags that simplify everyday tech — clean, practical, and privacy-respecting."
---

{% assign links = site.data.links %}

<section class="products-hero">
  <div class="products-hero-inner">
    <div class="products-hero-text">
      <h1 class="products-title">Products</h1>
      <p class="products-subtitle">
        Practical, Forge-built tools that make everyday tech simpler — without the bloat.
        NFC tags for quick actions, and small gadgets that solve real problems.
      </p>

      <div class="products-badges">
        <span class="products-badge">⚡ Fast</span>
        <span class="products-badge">🛡️ Privacy-respecting</span>
        <span class="products-badge">🧰 Practical</span>
      </div>
    </div>

    <div class="products-hero-actions">
      <a class="forge-btn" href="{{ links.products.nfc | relative_url }}">Explore NFC Tags</a>
      <a class="forge-btn" href="{{ links.products.gadgets | relative_url }}">Explore Gadgets</a>
    </div>
  </div>
</section>

<section class="products-wrap">

  <div class="products-feature-grid">

    <article class="forge-card product-feature">
      <div class="product-feature-media">
        <img src="/assets/img/products/forge-nfc-hero.jpg" alt="Forge NFC tags on a desk with a phone" loading="lazy">
      </div>
      <div class="product-feature-body">
        <h2 class="product-feature-title">Forge NFC Tags</h2>
        <p class="product-feature-desc">
          Tap your phone to trigger an action — connect to Wi-Fi, open a safety checklist, start a driving mode,
          launch a playlist, or kick off a smart-home routine.
        </p>

        <ul class="product-feature-points">
          <li>Pre-configured options (or custom-built)</li>
          <li>Made for Android now — iPhone support depends on the action</li>
          <li>Perfect for home, vehicles, teams, and small orgs</li>
        </ul>

        <div class="product-feature-actions">
          <a class="forge-btn" href="{{ links.products.nfc | relative_url }}">See NFC tags →</a>
          <a class="text-link" href="{{ links.pages.contact | relative_url }}">Not sure? Ask me</a>
        </div>
      </div>
    </article>

    <article class="forge-card product-feature">
      <div class="product-feature-media">
        <img src="/assets/img/products/forge-gadgets-hero.jpg" alt="A small Forge gadget on a workbench" loading="lazy">
      </div>
      <div class="product-feature-body">
        <h2 class="product-feature-title">Forge Gadgets</h2>
        <p class="product-feature-desc">
          Small tools with big leverage — designed to reduce friction, boost reliability, and keep your setup clean.
          Think “tech that behaves.”
        </p>

        <ul class="product-feature-points">
          <li>Simple, focused devices</li>
          <li>Built for real-world use (not just demos)</li>
          <li>Often pairs perfectly with Forge services</li>
        </ul>

        <div class="product-feature-actions">
          <a class="forge-btn" href="{{ links.products.gadgets | relative_url }}">See gadgets →</a>
          <a class="text-link" href="{{ links.pages.contact | relative_url }}">Tell me what you need</a>
        </div>
      </div>
    </article>

  </div>

  <section class="products-cta forge-card">
    <h2 class="products-cta-title">Want a recommendation?</h2>
    <p class="products-cta-text">
      If you tell me your goal (home, vehicle, small business, privacy, etc.), I’ll point you to the right tags or tools.
    </p>
    <div class="products-cta-actions">
      <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Get in touch</a>
      <a class="text-link" href="{{ links.pages.services | relative_url }}">Prefer services? →</a>
    </div>
  </section>

</section>
