---
layout: default
title: "Products"
permalink: /products/
class: products
description: "Products from M.R. TechForge — physical triggers, practical gadgets, and tools that reduce friction."
---

{% assign links = site.data.links %}

<section class="forge-products">

  <!-- =========================================
       HERO
  ========================================== -->
  <header class="forge-section-header">
    <h1 class="page-title">Products</h1>
    <p class="page-intro">
      M.R. TechForge products are designed to <strong>reduce friction</strong> — tools that make the right action feel automatic.
      Simple, durable, and built for real life.
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="{{ links.products.nfc | relative_url }}">Explore Forge NFC</a>
      <a class="forge-btn" href="{{ links.products.gadgets | relative_url }}">Browse Gadgets</a>
      <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Ask About Custom Packs</a>
    </div>
  </header>

  <!-- Hero image that carries the vibe -->
  <section class="forge-card" aria-label="Products hero image">
    <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
      <img class="forge-card-img"
           src="{{ '/assets/img/products/products-hero.jpg' | relative_url }}"
           alt="Forge products on a desk: NFC tags, a phone, and small gadgets"
           loading="lazy" />
    </div>

    <div class="forge-ideas-grid" style="margin-top: 0.95rem;">
      <div class="forge-idea">
        <h3>Physical triggers</h3>
        <p>Tap-to-run routines that live where you need them.</p>
      </div>
      <div class="forge-idea">
        <h3>Practical by design</h3>
        <p>No fluff — just tools that get used.</p>
      </div>
      <div class="forge-idea">
        <h3>Premium presentation</h3>
        <p>Snappy cards, clean UI, and strong visuals.</p>
      </div>
      <div class="forge-idea">
        <h3>Built to expand</h3>
        <p>Starter packs now, deeper workflows later.</p>
      </div>
    </div>
  </section>

  <!-- =========================================
       FEATURED CATEGORIES (snappy link cards)
  ========================================== -->
  <section class="product-section" aria-label="Featured product categories">
    <div class="product-section-header">
      <h2>Featured</h2>
    </div>

    <div class="forge-products-grid">

      <a class="forge-product-card" href="{{ links.products.nfc | relative_url }}">
        <div class="forge-card-topline">
          <span class="forge-card-title">Forge NFC</span>
          <span class="forge-badge">Most Popular</span>
        </div>

        <div class="forge-card-media" style="aspect-ratio: 16 / 9;">
          <img class="forge-card-img"
               src="{{ '/assets/img/products/nfc-hero.jpg' | relative_url }}"
               alt="Phone tapping an NFC tag"
               loading="lazy" />
        </div>

        <p>
          Put a tag where a decision happens — desk, car, nightstand — then tap to run the routine you want.
        </p>

        <span class="forge-card-cta">Explore NFC →</span>
      </a>

      <a class="forge-product-card" href="{{ links.products.gadgets | relative_url }}">
        <div class="forge-card-topline">
          <span class="forge-card-title">Gadgets</span>
          <span class="forge-badge">Practical</span>
        </div>

        <div class="forge-card-media" style="aspect-ratio: 16 / 9;">
          <img class="forge-card-img"
               src="{{ '/assets/img/products/gadgets-hero.jpg' | relative_url }}"
               alt="Small practical gadgets on a workspace"
               loading="lazy" />
        </div>

        <p>
          Small hardware helpers and tools — curated and built to actually get used.
        </p>

        <span class="forge-card-cta">Browse Gadgets →</span>
      </a>

      <a class="forge-product-card" href="{{ links.pages.contact | relative_url }}">
        <div class="forge-card-topline">
          <span class="forge-card-title">Custom Packs</span>
          <span class="forge-badge">By Request</span>
        </div>

        <div class="forge-card-media" style="aspect-ratio: 16 / 9;">
          <img class="forge-card-img"
               src="{{ '/assets/img/products/custom-hero.jpg' | relative_url }}"
               alt="Custom kit concept with components and labels"
               loading="lazy" />
        </div>

        <p>
          Want a labeled NFC set, onboarding instructions, or a “tap-to-open” workflow for your org?
        </p>

        <span class="forge-card-cta">Contact →</span>
      </a>

    </div>
  </section>

  <!-- =========================================
       OPTIONAL: QUICK PATHS
  ========================================== -->
  <section class="forge-card" aria-label="Quick paths">
    <h2 style="margin-top: 0;">Quick paths</h2>
    <div class="forge-ideas-grid" style="margin-top: 0.9rem;">
      <div class="forge-idea">
        <h3>Start with a pack</h3>
        <p>Buy once, place tags in your daily locations, and instantly feel the difference.</p>
        <p style="margin-top: 0.65rem;">
          <a class="forge-btn" href="{{ links.products.nfc | relative_url }}">Go to Forge NFC</a>
        </p>
      </div>
      <div class="forge-idea">
        <h3>Make it yours</h3>
        <p>Custom tag label sets, guest pages, safety flows, or internal docs links for a team.</p>
        <p style="margin-top: 0.65rem;">
          <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Request a Custom Pack</a>
        </p>
      </div>
    </div>
  </section>

</section>