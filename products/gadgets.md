---
layout: default
title: "Tech Gadgets & Hardware"
permalink: /products/gadgets/
---

<section class="forge-products">
  <h1 class="page-title">Tech Gadgets & Hardware</h1>
  <p class="page-intro">
    MRTF-built drives and hardware tools — like the MRTF Ultimate Drive and ForgeSecure USB —
    assembled, tested, and ready to drop into your workflow.
  </p>

  <div class="product-grid">
    {% assign gadget_items = site.data.products | where: "category", "gadgets" %}
    {% for item in gadget_items %}
      {% include product-card.html item=item %}
    {% endfor %}
  </div>
</section>

{% include cart-drawer.html %}