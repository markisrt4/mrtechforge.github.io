---
layout: default
title: "Products"
permalink: /products/
class: products products-landing
description: "Tools and learning modules forged to remove friction from real tech workflows."
---

<!-- ============================
     PRODUCTS LANDING — v1.0
     Uses styles from: _pages-products.scss (products-landing)
============================ -->

<section class="products-hero">
  <div class="products-hero-inner">
    <div class="products-hero-text">
      <h1 class="products-title">Products</h1>
      <p class="products-subtitle">
        Built like a small toolbox: <strong>practical</strong>, <strong>clear</strong>, and <strong>expandable</strong>.
        Some offerings are physical (like NFC tags). Others are software or learning-first labs.
        None of this is “random resale” — it’s forged to be useful.
      </p>

      <div class="products-badges" aria-label="Product badges">
        <span class="products-badge">⚙️ Practical</span>
        <span class="products-badge">🧠 Learning-first</span>
        <span class="products-badge">🔁 Reproducible</span>
        <span class="products-badge">🛡️ Safe + sane</span>
      </div>
    </div>

    <div class="products-hero-actions" aria-label="Primary product navigation">
      <a class="forge-btn" href="{{ '/products/nfc/' | relative_url }}">Explore Forge NFC</a>
      <a class="forge-btn" href="{{ '/products/software_toolkits/' | relative_url }}">Explore Software Toolkits</a>
      <a class="forge-btn" href="{{ '/products/lab/' | relative_url }}">Explore Forge Lab</a>
      <a class="forge-btn" href="{{ '/contact/' | relative_url }}">Ask a Question</a>
    </div>
  </div>
</section>

<section class="products-wrap" aria-label="Product categories">

  <div class="products-feature-grid">

    <!-- =========================
         Forge NFC
    ========================== -->
    <article class="forge-card product-feature" aria-label="Forge NFC category">
      <div class="product-feature-media">
        <img
          src="{{ '/assets/img/products/nfc-hero.png' | relative_url }}"
          alt="Phone tapping an NFC tag with subtle blue lighting"
          loading="lazy" />
      </div>

      <div class="product-feature-body">
        <h2 class="product-feature-title">Forge NFC</h2>
        <p class="product-feature-desc">
          Tap-to-run tags that put shortcuts where life happens — desk, car, entryway, toolbox.
          Built for routines, reliability, and fast wins.
        </p>

        <ul class="product-feature-points">
          <li>Passive tags (no batteries)</li>
          <li>Designed for real routines (home / car / work / guests / safety)</li>
          <li>Curated sets + clear “what to do with it” guidance</li>
        </ul>

        <div class="product-feature-actions">
          <a class="forge-btn" href="{{ '/products/nfc/' | relative_url }}">View Forge NFC</a>
          <a class="text-link" href="{{ '/products/nfc/#use-cases' | relative_url }}">See use cases</a>
        </div>
      </div>
    </article>

    <!-- =========================
         Software Toolkits
    ========================== -->
    <article class="forge-card product-feature" aria-label="Software Toolkits category">
      <!-- No image required — keep it clean + consistent -->
      <div class="product-feature-media" aria-hidden="true"
           style="min-height: 240px; background:
             radial-gradient(900px 380px at 20% 10%, rgba(60,180,255,0.20) 0%, rgba(0,0,0,0.00) 58%),
             linear-gradient(180deg, rgba(10,18,30,0.75) 0%, rgba(2,6,13,0.96) 100%);
             border-bottom: 1px solid rgba(255,255,255,0.06);">
      </div>

      <div class="product-feature-body">
        <h2 class="product-feature-title">Software Toolkits</h2>
        <p class="product-feature-desc">
          Self-contained build environments and CLI tools that remove setup friction and make workflows repeatable —
          locally, headless, or in CI.
        </p>

        <ul class="product-feature-points">
          <li>Reproducible environments (same results across machines)</li>
          <li>CLI-first, automation-friendly</li>
          <li>Built to be expandable as your workflow grows</li>
        </ul>

        <div class="product-feature-actions">
          <a class="forge-btn" href="{{ '/products/software_toolkits/' | relative_url }}">View Toolkits</a>
          <a class="text-link" href="{{ '/products/software_toolkits/#toolkits' | relative_url }}">See available kits</a>
        </div>
      </div>
    </article>

    <!-- =========================
         Forge Lab
    ========================== -->
    <article class="forge-card product-feature" aria-label="Forge Lab category">
      <div class="product-feature-media">
        <img
          src="{{ '/assets/images/lab/forge-lab-hero.jpg' | relative_url }}"
          alt="Forge Lab — hands-on learning environment"
          loading="lazy" />
      </div>

      <div class="product-feature-body">
        <h2 class="product-feature-title">Forge Lab</h2>
        <p class="product-feature-desc">
          Hands-on learning modules designed for curiosity — practical labs that make real systems feel approachable.
          Bring-your-own hardware. No resale pressure.
        </p>

        <ul class="product-feature-points">
          <li>Learning-first modules (Linux, networking, SDR fundamentals, and more)</li>
          <li>Safe scope + responsible exploration</li>
          <li>Guidance available if you want it</li>
        </ul>

        <div class="product-feature-actions">
          <a class="forge-btn" href="{{ '/products/lab/' | relative_url }}">View Forge Lab</a>
          <a class="text-link" href="{{ '/products/lab/#labs' | relative_url }}">Browse modules</a>
        </div>
      </div>
    </article>

  </div>

  <!-- =========================
       CTA
  ========================== -->
  <div class="forge-card products-cta" aria-label="Products CTA">
    <h2 class="products-cta-title">Not sure which direction fits?</h2>
    <p class="products-cta-text">
      Tell me what you’re trying to do (or what you’re stuck on). I’ll point you toward the right product path —
      or tell you honestly if it should be a service instead.
    </p>

    <div class="products-cta-actions">
      <a class="forge-btn" href="{{ '/contact/' | relative_url }}">Start a Conversation</a>
      <a class="text-link" href="{{ '/services/' | relative_url }}">View Services</a>
    </div>
  </div>

</section>