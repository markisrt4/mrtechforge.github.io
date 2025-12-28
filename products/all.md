---
layout: default
title: "All Products"
permalink: /products/all/
class: products
description: "Browse all M.R. TechForge products in one place."
---

{% assign products = site.data.products %}

<section class="forge-products">

  <header class="forge-section-header">
    <h1 class="page-title">All Products</h1>
    <p class="page-intro">
      Everything in the Forge catalog — NFC tags, apps, and gadgets — presented in one clean view.
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="{{ '/products/nfc/' | relative_url }}">Forge NFC</a>
      <a class="forge-btn" href="{{ '/products/gadgets/' | relative_url }}">Gadgets</a>
      <a class="forge-btn" href="{{ '/products/' | relative_url }}">Back to Products</a>
    </div>
  </header>

  <div class="forge-offerings-grid">
    {% for p in products %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">
        <div class="forge-card-topline">
          <span class="forge-card-title">{{ p.name }}</span>
          {% if p.badge %}<span class="forge-badge">{{ p.badge }}</span>{% endif %}
        </div>

        <div class="forge-card-media">
          {%- assign jpg = '/assets/img/products/' | append: p.id | append: '.jpg' -%}
          <img class="forge-card-img"
               src="{{ jpg | relative_url }}"
               alt="{{ p.alt | default: p.name }}"
               loading="lazy" />
        </div>

        <div class="forge-card-body">
          {% if p.short %}<p class="forge-card-desc">{{ p.short }}</p>{% endif %}

          {% if p.features %}
            <ul class="forge-card-list">
              {% for f in p.features %}<li>{{ f }}</li>{% endfor %}
            </ul>
          {% endif %}

          {% if p.price or p.price_note %}
            <div class="forge-card-price-row">
              <span class="forge-card-price">{{ p.price | default: "—" }}</span>
              {% if p.price_note %}<span class="forge-price-note">{{ p.price_note }}</span>{% endif %}
            </div>
          {% endif %}

          {% if p.cta_url %}
            <div class="forge-card-cta">
              <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "View" }}</a>
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>

</section>