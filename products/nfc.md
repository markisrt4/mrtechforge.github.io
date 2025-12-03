---
layout: default
title: "NFC Tags & Automations"
permalink: /products/nfc/
---

<section class="forge-products">
  <h1 class="page-title">NFC Tags & Automations</h1>
  <p class="page-intro">
    MRTF NFC tags that actually do something — Wi-Fi toggles, VPN connects, car mode,
    bedtime serenity, guest Wi-Fi, SOS, and more.
  </p>

  <div class="product-grid">
    {% assign nfc_items = site.data.products | where: "category", "nfc" %}
    {% for item in nfc_items %}
      {% include product-card.html item=item %}
    {% endfor %}
  </div>
</section>

{% include cart-drawer.html %}