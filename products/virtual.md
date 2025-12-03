---
layout: default
title: "Virtual Tools & Sessions"
permalink: /products/virtual/
---

<section class="forge-products">
  <h1 class="page-title">Virtual Tools & Sessions</h1>
  <p class="page-intro">
    Remote support sessions and digital tools from M.R. TechForge — no shipping,
    just help and power tools delivered over the wire.
  </p>

  <div class="product-grid">
    {% assign virtual_items = site.data.products | where: "category", "virtual" %}
    {% for item in virtual_items %}
      {% include product-card.html item=item %}
    {% endfor %}
  </div>
</section>

{% include cart-drawer.html %}