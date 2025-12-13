---
layout: default
title: Products
permalink: /products/nfc/
description: "M.R. TechForge NFC tags + companion apps for fast tap automations."
---

<section class="forge-service-pricing">
  <header class="forge-section-header">
    <h1>M.R. TechForge Products</h1>
    <p class="forge-subtext">
      Tap-to-run NFC automations, plus the MRTF NFC Android app (and a future Wear OS companion).
    </p>
  </header>

  <!-- =========================
       NFC TAGS
  ========================== -->
  <h2 id="nfc-tags">NFC Tags</h2>
  <div class="forge-offerings-grid">
    {% assign tags = site.data.products | where: "category", "NFC Tags" %}
    {% for p in tags %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card">
        <div class="forge-card-media">
          <img
            src="{{ p.image | relative_url }}"
            alt="{{ p.alt }}"
            loading="lazy"
            class="forge-card-img"
          />
        </div>

        <div class="forge-card-body">
          <div class="forge-card-topline">
            <h3 class="forge-card-title">{{ p.name }}</h3>
            {% if p.badge %}
              <span class="forge-badge">{{ p.badge }}</span>
            {% endif %}
          </div>

          <p class="forge-card-desc">{{ p.short }}</p>

          <div class="forge-card-price-row">
            <div class="price">{{ p.price }}</div>
            {% if p.price_note %}<div class="forge-price-note">{{ p.price_note }}</div>{% endif %}
          </div>

          {% if p.features %}
          <ul class="forge-card-list">
            {% for f in p.features %}
              <li>{{ f }}</li>
            {% endfor %}
          </ul>
          {% endif %}

          {% if p.status == "coming_soon" %}
            <div class="forge-muted">Status: Coming soon</div>
          {% endif %}

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================
       APPS
  ========================== -->
  <h2 id="apps">Apps</h2>
  <div class="forge-offerings-grid">
    {% assign apps = site.data.products | where: "category", "Apps" %}
    {% for p in apps %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card">
        <div class="forge-card-media">
          <img
            src="{{ p.image | relative_url }}"
            alt="{{ p.alt }}"
            loading="lazy"
            class="forge-card-img"
          />
        </div>

        <div class="forge-card-body">
          <div class="forge-card-topline">
            <h3 class="forge-card-title">{{ p.name }}</h3>
            {% if p.badge %}
              <span class="forge-badge">{{ p.badge }}</span>
            {% endif %}
          </div>

          <p class="forge-card-desc">{{ p.short }}</p>

          <div class="forge-card-price-row">
            <div class="price">{{ p.price }}</div>
            {% if p.price_note %}<div class="forge-price-note">{{ p.price_note }}</div>{% endif %}
          </div>

          {% if p.features %}
          <ul class="forge-card-list">
            {% for f in p.features %}
              <li>{{ f }}</li>
            {% endfor %}
          </ul>
          {% endif %}

          {% if p.status == "coming_soon" %}
            <div class="forge-muted">Status: Coming soon</div>
          {% endif %}

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================
       FAQ (optional, nice for products)
  ========================== -->
  <h2 id="faq">FAQ</h2>
  <div class="forge-faq">
    <details class="forge-faq-item">
      <summary>Do these work on iPhone?</summary>
      <p>
        iPhones can read NFC, but iOS automation behavior is more limited than Android.
        MRTF NFC tags are designed primarily for Android tap automations.
      </p>
    </details>

    <details class="forge-faq-item">
      <summary>Do NFC tags need power or batteries?</summary>
      <p>Nope — NFC tags are passive. Your phone powers the interaction during the tap.</p>
    </details>

    <details class="forge-faq-item">
      <summary>What do I need to program them?</summary>
      <p>
        Install the MRTF NFC Android app (or use your preferred automation tooling).
        Each product includes a quick-start QR to guide setup.
      </p>
    </details>

    <details class="forge-faq-item">
      <summary>What’s the Wear OS companion going to do?</summary>
      <p>
        The goal is quick toggles, status, and fast confirmations right from your wrist.
        It’s listed as “Coming soon” while the roadmap settles.
      </p>
    </details>
  </div>
</section>