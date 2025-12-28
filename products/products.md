---
layout: default
title: "Products"
permalink: /products/
description: "Products from M.R. TechForge — practical tools, physical triggers, and useful tech."
---

{% assign links = site.data.links %}

<section class="forge-products">

  <!-- ==========================
       HERO / INTRO
     ========================== -->
  <header class="forge-section-header">
    <h1 class="page-title">Products</h1>
    <p class="page-intro">
      M.R. TechForge products are built around one idea: reduce friction.
      Real-world tools that make tech feel calmer, faster, and more intentional.
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="{{ links.products.nfc | relative_url }}">Explore NFC Tags</a>
      <a class="forge-btn" href="{{ links.products.gadgets | relative_url }}">Browse Gadgets</a>
    </div>
  </header>

  <!-- Optional hero image (replace with a real photo later) -->
  <section class="forge-card" aria-label="Products hero image">
    <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
      <img class="forge-card-img"
           src="{{ '/assets/img/products/products-hero.jpg' | relative_url }}"
           alt="Forge products arranged on a desk: NFC tags, a phone, and small tech gadgets"
           loading="lazy" />
    </div>
    <p class="forge-muted" style="margin-top: 0.75rem;">
      Tip: Use one strong hero photo here (desk scene / phone tap / starter pack).
    </p>
  </section>

  <!-- ==========================
       SHOP BY CATEGORY (NO SERVICES)
     ========================== -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Browse by category</h2>
    </div>

    <div class="forge-products-grid">

      <a class="forge-product-card" href="{{ links.products.nfc | relative_url }}">
        <h2>NFC Tags</h2>
        <p>
          Physical “tap-to-run” tags that trigger routines: Wi-Fi, VPN, Car Mode, Home Mode, Guest Wi-Fi, SOS, and more.
        </p>
        <span class="forge-card-cta">Go to NFC →</span>
      </a>

      <a class="forge-product-card" href="{{ links.products.gadgets | relative_url }}">
        <h2>Gadgets</h2>
        <p>
          Small practical hardware helpers — tested, curated, and built to actually get used.
        </p>
        <span class="forge-card-cta">Go to Gadgets →</span>
      </a>

      <a class="forge-product-card" href="{{ links.pages.contact | relative_url }}">
        <h2>Custom Builds</h2>
        <p>
          Need a kit, a workflow tool, or a physical “shortcut” for your org? Tell me what you’re trying to simplify.
        </p>
        <span class="forge-card-cta">Contact →</span>
      </a>

    </div>
  </section>

</section>