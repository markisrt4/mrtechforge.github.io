---
layout: default
title: "NFC Tags + Apps"
permalink: /products/nfc/
description: "Tap-to-run NFC tags and companion apps from M.R. TechForge."
---

{% assign products = site.data.products %}

<section class="forge-service-pricing nfc-page">

  <header class="forge-section-header">
    <h1 class="forge-page-title">Forge NFC</h1>
    <p class="forge-subtext">
      Physical NFC tags that trigger fast, reliable automations — plus the Forge NFC Android app (and a future Wear OS companion).
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="#nfc-starter-pack">Start with the Starter Pack</a>
      <a class="forge-btn" href="#how-it-works">How it works</a>
      <a class="forge-btn" href="#ideas">Ideas</a>
    </div>
  </header>

  <!-- =========================
       HOW IT WORKS
  ========================== -->
  <section class="forge-card how-it-works" id="how-it-works" aria-label="How NFC tags work">
    <h2>How it works</h2>
    <ol class="forge-steps">
      <li><strong>Place</strong> a tag where it matters (car, desk, toolbox, keychain).</li>
      <li><strong>Tap</strong> your Android phone to the tag.</li>
      <li><strong>Run an action</strong> (Wi-Fi, VPN, Home Mode, Guest Wi-Fi, SOS, and more).</li>
    </ol>
    <p class="forge-muted">No batteries. No pairing. Just a quick tap.</p>
  </section>

  <!-- =========================
       NFC TAGS
  ========================== -->
  <h2 id="nfc-tags">NFC Tags</h2>

  <div class="forge-offerings-grid">
    {% assign tags = products | where: "category", "NFC Tags" %}
    {% for p in tags %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">

        <div class="forge-card-topline">
          <span class="forge-card-title">{{ p.name }}</span>
          {% if p.badge %}
            <span class="forge-badge">{{ p.badge }}</span>
          {% endif %}
        </div>

        <div class="forge-card-media">
          <img class="forge-card-img"
               src="{{ p.image | relative_url }}"
               alt="{{ p.alt }}"
               loading="lazy" />
        </div>

        <div class="forge-card-body">
          <p class="forge-card-desc">{{ p.short }}</p>

          {% if p.features %}
            <ul class="forge-card-list">
              {% for f in p.features %}
                <li>{{ f }}</li>
              {% endfor %}
            </ul>
          {% endif %}

          <div class="forge-card-price-row">
            <span class="forge-card-price">{{ p.price }}</span>
            {% if p.price_note %}
              <span class="forge-price-note">{{ p.price_note }}</span>
            {% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "View Details" }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================
       APPS
  ========================== -->
  <h2 id="apps">Companion apps</h2>

  <div class="forge-offerings-grid">
    {% assign apps = products | where: "category", "Apps" %}
    {% for p in apps %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">

        <div class="forge-card-topline">
          <span class="forge-card-title">{{ p.name }}</span>
          {% if p.badge %}
            <span class="forge-badge">{{ p.badge }}</span>
          {% endif %}
        </div>

        <div class="forge-card-media">
          <img class="forge-card-img"
               src="{{ p.image | relative_url }}"
               alt="{{ p.alt }}"
               loading="lazy" />
        </div>

        <div class="forge-card-body">
          <p class="forge-card-desc">{{ p.short }}</p>

          {% if p.features %}
            <ul class="forge-card-list">
              {% for f in p.features %}
                <li>{{ f }}</li>
              {% endfor %}
            </ul>
          {% endif %}

          <div class="forge-card-price-row">
            <span class="forge-card-price">{{ p.price }}</span>
            {% if p.price_note %}
              <span class="forge-price-note">{{ p.price_note }}</span>
            {% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "Learn More" }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================
       IDEAS
  ========================== -->
  <section class="forge-card nfc-ideas" id="ideas" aria-label="NFC automation ideas">
    <h2>Sweet ideas you can ship with the tags</h2>
    <div class="forge-ideas-grid">
      <div class="forge-idea">
        <h3>Car Mode</h3>
        <p>Enable Bluetooth, set volume, launch Maps, start your “drive” playlist.</p>
      </div>
      <div class="forge-idea">
        <h3>Home Mode</h3>
        <p>Connect Wi-Fi, set VPN preference, open smart-home dashboard.</p>
      </div>
      <div class="forge-idea">
        <h3>Focus Mode</h3>
        <p>Do Not Disturb, start timer, open your task list.</p>
      </div>
      <div class="forge-idea">
        <h3>Guest Wi-Fi</h3>
        <p>Share Wi-Fi via QR or open a “guest instructions” page.</p>
      </div>
      <div class="forge-idea">
        <h3>SOS</h3>
        <p>Text a preset contact, share location, call a number.</p>
      </div>
      <div class="forge-idea">
        <h3>Toolbox Tag</h3>
        <p>Open a quick guide (wiki/PDF) for equipment, robotics pit, or procedures.</p>
      </div>
    </div>
  </section>

  <!-- =========================
       FAQ
  ========================== -->
  <section class="forge-faq" id="faq" aria-label="NFC FAQ">
    <h2>FAQ</h2>

    <details class="forge-faq-item">
      <summary>Do NFC tags work on iPhone?</summary>
      <p>Some iPhone automations are possible, but Forge NFC is designed primarily for Android tap automations.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Do the tags need power or batteries?</summary>
      <p>No — NFC tags are passive. Your phone provides the energy during the tap.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Will this work with Tasker / Automate / built-in routines?</summary>
      <p>Yes. The tags can be used with popular Android automation tools, plus the Forge NFC app for guided setup.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Can you make custom tag sets for my org / team?</summary>
      <p>Yep — custom label sets, onboarding instructions, and “tap-to-open” internal links/wiki pages.</p>
    </details>
  </section>

</section>