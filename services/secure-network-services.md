---
layout: default
title: "MRTF Secure Network Services"
permalink: /services/secure-network-services/
description: "Secure, local-first network infrastructure for homes and small businesses."
---

{% assign sn = site.data.services | where: "id", "secure-network-services" | first %}

<div class="service-hero">
  <h1>{% if sn %}{{ sn.title }}{% else %}MRTF Secure Network Services{% endif %}</h1>
  <div class="service-product-tag">
    {% if sn and sn.product_tag %}{{ sn.product_tag }}{% else %}MRTF Secure Network by M.R. TechForge{% endif %}
  </div>

  {% if sn and sn.description %}
    <p>{{ sn.description }}</p>
  {% else %}
    <p>
      Secure, private, local-first network infrastructure — built intentionally, documented clearly,
      and supported with optional ongoing care.
    </p>
  {% endif %}

  <p>
    <strong>This is not a consumer VPN or a black-box router.</strong><br />
    It’s a properly designed network you can understand, trust, and recover if something goes wrong.
  </p>
</div>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Who This Is For</h2>

  <div class="phone-services-card">
    <ul>
      {% if sn and sn.who_for %}
        {% for item in sn.who_for %}
          <li>{{ item }}</li>
        {% endfor %}
      {% else %}
        <li>Home users who want security without guessing or breaking things.</li>
        <li>Remote workers who need safe access to files and systems while away.</li>
        <li>Small businesses without in-house IT staff.</li>
      {% endif %}
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">How MRTF Secure Network Works</h2>

  <div class="phone-services-card">
    <ol class="how-it-works-steps">
      {% if sn and sn.how_it_works %}
        {% for step in sn.how_it_works %}
          <li><strong>{{ step.title }}</strong> {{ step.text }}</li>
        {% endfor %}
      {% else %}
        <li><strong>We review your environment.</strong> Existing hardware, usage patterns, and goals.</li>
        <li><strong>We design a secure network.</strong> Clear separation, strong defaults, and documented behavior.</li>
        <li><strong>We configure and test.</strong> Security, access, and protection are validated.</li>
        <li><strong>You receive documentation.</strong> You know how everything works and what to do if something breaks.</li>
        <li><strong>Optional ongoing care.</strong> For clients who want continued peace of mind.</li>
      {% endif %}
    </ol>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Service Offerings</h2>
  <p>
    Start with a secure foundation, then add only what you need. Every setup includes clear documentation
    so you’re never guessing how your network is built.
  </p>

  {% if sn and sn.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in sn.offerings %}
        {% assign name = offering.name %}

        {%- comment -%} Icon mapping by offering name {%- endcomment -%}
        {% assign icon = "🧩" %}
        {% case name %}
          {% when "Network Setup & Protection" %}
            {% assign icon = "🧱" %}
          {% when "Secure Remote Access" %}
            {% assign icon = "🔐" %}
          {% when "Network-Wide Protection" %}
            {% assign icon = "🛡️" %}
          {% when "Local Storage & Backup Design" %}
            {% assign icon = "🗄️" %}
          {% when "Managed Network Care" %}
            {% assign icon = "🛠️" %}
        {% endcase %}

        <article class="forge-offering-card">
          <div class="forge-offering-icon">{{ icon }}</div>

          <h3 class="forge-offering-title">
            {{ offering.name }}
            {% if offering.badge %}
              <span class="forge-offering-badge">{{ offering.badge }}</span>
            {% endif %}
          </h3>

          <p class="forge-offering-desc">{{ offering.description }}</p>

          <div class="forge-offering-pricing">
            {% if offering.pricing.monthly_label %}
              <div class="forge-price-row">
                <span class="label">Monthly</span>
                <span class="value">{{ offering.pricing.monthly_label }}</span>
              </div>
            {% endif %}

            {% if offering.pricing.setup_label %}
              <div class="forge-price-row is-setup">
                <span class="label">Setup</span>
                {% if offering.pricing.setup_label contains "Included" %}
                  <span class="value is-included">{{ offering.pricing.setup_label }}</span>
                {% else %}
                  <span class="value">{{ offering.pricing.setup_label }}</span>
                {% endif %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p><em>Offerings are being finalized. Contact MRTF for current availability.</em></p>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section forge-bundles">
  <h2 class="services-heading">Suggested Configurations</h2>
  <p class="section-sub">
    These examples help estimate scope quickly. Final configuration is always tailored to your environment.
  </p>

  {% if sn and sn.bundles %}
    <div class="forge-bundle-grid">
      {% for b in sn.bundles %}
        <article class="forge-bundle-card">
          <div class="forge-bundle-tag">{{ b.tag }}</div>
          <div class="forge-bundle-price">{{ b.price }}</div>
          <div class="forge-bundle-meta">{{ b.meta }}</div>
          <ul class="forge-bundle-list">
            {% for it in b.items %}
              <li>{{ it }}</li>
            {% endfor %}
          </ul>
          <p class="forge-bundle-desc">{{ b.description }}</p>
        </article>
      {% endfor %}
    </div>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">FAQ</h2>

  <div class="phone-services-card">
    {% if sn and sn.faq %}
      {% for item in sn.faq %}
        <p><strong>{{ item.q }}</strong><br />{{ item.a }}</p>
      {% endfor %}
    {% else %}
      <p><strong>Do I need a new router?</strong><br />Not always — we’ll validate what you have and recommend options if needed.</p>
    {% endif %}
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section services-cta">
  <h2 class="services-heading">Ready to Secure Your Network?</h2>
  <p>
    Most clients start with a secure foundation and expand only if needed.
    MRTF Secure Network Services are designed to scale without surprises.
  </p>
  <p>
    <a href="/contact/" class="btn-glow">Contact M.R. TechForge</a>
  </p>
</section>
