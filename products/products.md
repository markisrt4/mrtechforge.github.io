---
layout: default
title: "Products"
permalink: /products/
---

<section class="forge-products">
  <h1 class="page-title">MRTF Product Catalog</h1>
  <p class="page-intro">
    NFC tags, gadgets, toolkits, and a few flagship services from M.R. TechForge (MRTF).
    Browse the catalog below, or visit the main <a href="{{ '/services/' | relative_url }}">Services</a>
    page to see everything that’s available.
  </p>

  <!-- ==========================
       SERVICE HIGHLIGHTS
     ========================== -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Featured Services</h2>
    </div>

    <div class="product-grid">
      <!-- MRTF Private Cloud Node -->
      <div class="product-card">
        <h3>MRTF Private Cloud Node</h3>
        <p>
          A managed, on-prem private cloud and VPN entrypoint for your small
          business. Your data stays on hardware you own, inside your building,
          with encrypted remote access and nightly backups.
        </p>
        <ul>
          <li>Keep business files on a mini-server in your office</li>
          <li>Secure VPN access for staff working from home</li>
          <li>Nightly backups to a separate, Windows-readable drive</li>
          <li>Fully managed by M.R. TechForge</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/services/private-cloud/' | relative_url }}">
          Learn more about private cloud
        </a>
      </div>

      <!-- Phone, Voice & Messaging -->
      <div class="product-card">
        <h3>Phone, Voice &amp; Messaging</h3>
        <p>
          Simple phone and texting systems that keep your personal number private
          and make it easier for people to reach you.
        </p>
        <ul>
          <li>A business phone number that isn’t your personal cell</li>
          <li>“Press 1 for…” menus that sound friendly, not robotic</li>
          <li>Auto-reply text lines for HOURS, ADDRESS, or INFO</li>
          <li>Safer numbers for login codes or privacy-sensitive calls</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/services/phone-voice-messaging/' | relative_url }}">
          Learn more about phone &amp; messaging
        </a>
      </div>
    </div>
  </section>

  <!-- ==========================
       SHOP BY CATEGORY
     ========================== -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Shop by Category</h2>
    </div>

    <div class="product-grid">
      <!-- NFC Tags & Automations category -->
      <div class="product-card">
        <h3>NFC Tags &amp; Automations</h3>
        <p>
          A line of MRTF NFC tags that trigger real-world actions with a tap:
          Wi-Fi toggles, VPN connects, car mode, bedtime mode, guest Wi-Fi, SOS,
          and more.
        </p>
        <ul>
          <li>Tap-to-toggle Wi-Fi, Bluetooth, or Focus modes</li>
          <li>Share guest Wi-Fi without reading long passwords</li>
          <li>Quick actions for the car, bedtime, or emergencies</li>
          <li>Works with Android and iPhone automations</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/products/nfc/' | relative_url }}">
          Browse NFC tags &amp; automations
        </a>
      </div>

      <!-- Virtual Tools & Sessions category -->
      <div class="product-card">
        <h3>Virtual Tools &amp; Sessions</h3>
        <p>
          Remote tech help, downloadable toolkits, and (soon) phone and watch apps
          or infrastructure-as-a-service options — all designed to give you more
          control over your devices without having to be “the computer person.”
        </p>
        <ul>
          <li>One-hour remote support sessions</li>
          <li>Downloadable diagnostic and recovery tools</li>
          <li>Future: Android / WearOS apps and small IaaS offerings</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/products/virtual/' | relative_url }}">
          Explore virtual tools &amp; sessions
        </a>
      </div>

      <!-- Tech Gadgets & Hardware category -->
      <div class="product-card">
        <h3>Tech Gadgets &amp; Hardware</h3>
        <p>
          MRTF-assembled hardware tools like the Ultimate Drive and ForgeSecure USB —
          curated, tested gadgets that make fixing, rescuing, and securing systems
          a lot less painful.
        </p>
        <ul>
          <li>Multi-boot USB drives with rescue and diagnostic tools</li>
          <li>Privacy-focused USB kits and utilities</li>
          <li>Future hardware experiments as they graduate from the lab</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/products/gadgets/' | relative_url }}">
          See tech gadgets &amp; hardware
        </a>
      </div>
    </div>
  </section>
</section>

{% include cart-drawer.html %}