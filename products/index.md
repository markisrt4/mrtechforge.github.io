---
layout: default
title: "Products & Services"
permalink: /products/
---

<section class="forge-products">
  <h1 class="page-title">Products &amp; Services</h1>
  <p class="page-intro">
    Tools, tags, gadgets, and services from M.R. TechForge (MRTF) — built to
    simplify your digital life, protect your privacy, and keep your systems
    calm and reliable.
  </p>

  <!-- ==========================
       SERVICE HIGHLIGHTS
     ========================== -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Service Highlights</h2>
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

        <span class="price price-contact">Service · Contact for quote</span>
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

        <span class="price price-contact">Service · Contact for quote</span>
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
      <!-- Private Cloud & VPN category -->
      <div class="product-card">
        <h3>Private Cloud &amp; VPN</h3>
        <p>
          On-prem mini-servers and secure VPN entrypoints for small businesses
          that want control over their data without becoming their own IT department.
        </p>
        <ul>
          <li>Store files on hardware you own, not “somewhere in the cloud”</li>
          <li>Remote access for staff over an encrypted VPN tunnel</li>
          <li>Backup plans that are actually usable on bad days</li>
        </ul>

        <a class="btn-glow"
           href="{{ '/products/private-cloud/' | relative_url }}">
          Explore private cloud &amp; VPN
        </a>
      </div>

      <!-- NFC Tags & Automations category -->
      <div class="product-card">
        <h3>NFC Tags &amp; Automations</h3>
        <p>
          A whole line of MRTF NFC tags that trigger real-world actions with a tap:
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