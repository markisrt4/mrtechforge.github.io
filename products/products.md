---
layout: default
title: "Products"
permalink: /products/
---

<section class="forge-products">
  <h1 class="page-title">Products &amp; Services</h1>
  <p class="page-intro">
    Every tool, tag, gadget, and service here is built to simplify your digital life
    and strengthen your privacy — all forged under the MRTF banner.
  </p>

  <!-- Featured Services -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Featured Services</h2>
    </div>
    <div class="product-grid">
      <div class="product-card">
        <img src="{{ '/assets/images/private_cloud_node.png' | relative_url }}" alt="MRTF Private Cloud Node">
        <h3>MRTF Private Cloud Node</h3>
        <p>
          A managed, on-prem private cloud and VPN entrypoint for your small business.
          Your data stays on hardware you own, inside your building, with encrypted
          remote access and nightly backups.
        </p>
        <span class="price price-contact">Service · Contact for quote</span>
        <a class="btn-glow" href="{{ '/services/private-cloud/' | relative_url }}">Learn More</a>
      </div>

      <div class="product-card">
        <img src="{{ '/assets/images/phone_voice_services.png' | relative_url }}" alt="Phone, Voice &amp; Messaging">
        <h3>Phone, Voice &amp; Messaging</h3>
        <p>
          Business lines, “press 1” menus, auto-reply text lines, and ministry or library
          tools — calm, clear communication systems built for real humans.
        </p>
        <span class="price price-contact">Service · Contact for quote</span>
        <a class="btn-glow" href="{{ '/services/phone-voice-messaging/' | relative_url }}">Learn More</a>
      </div>
    </div>
  </section>

  <!-- Private Cloud / VPN -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Private Cloud &amp; VPN</h2>
      <a class="section-link" href="{{ '/products/private-cloud/' | relative_url }}">View all &raquo;</a>
    </div>
    <div class="product-grid">
      {% assign private_cloud_items = site.data.products | where: "category", "private-cloud" %}
      {% for item in private_cloud_items %}
        {% include product-card.html item=item %}
      {% endfor %}
    </div>
  </section>

  <!-- NFC -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>NFC Tags &amp; Automations</h2>
      <a class="section-link" href="{{ '/products/nfc/' | relative_url }}">View all &raquo;</a>
    </div>
    <div class="product-grid">
      {% assign nfc_items = site.data.products | where: "category", "nfc" %}
      {% for item in nfc_items limit:4 %}
        {% include product-card.html item=item %}
      {% endfor %}
    </div>
  </section>

  <!-- Virtual -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Virtual Tools &amp; Sessions</h2>
      <a class="section-link" href="{{ '/products/virtual/' | relative_url }}">View all &raquo;</a>
    </div>
    <div class="product-grid">
      {% assign virtual_items = site.data.products | where: "category", "virtual" %}
      {% for item in virtual_items %}
        {% include product-card.html item=item %}
      {% endfor %}
    </div>
  </section>

  <!-- Gadgets -->
  <section class="product-section">
    <div class="product-section-header">
      <h2>Tech Gadgets &amp; Hardware</h2>
      <a class="section-link" href="{{ '/products/gadgets/' | relative_url }}">View all &raquo;</a>
    </div>
    <div class="product-grid">
      {% assign gadget_items = site.data.products | where: "category", "gadgets" %}
      {% for item in gadget_items %}
        {% include product-card.html item=item %}
      {% endfor %}
    </div>
  </section>
</section>

{% include cart-drawer.html %}