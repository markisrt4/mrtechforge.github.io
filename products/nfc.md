---
layout: default
title: "NFC Tags"
permalink: /products/nfc/
description: "Forge NFC — tap-to-run tags that turn physical spaces into smart triggers."
---

{% assign products = site.data.products %}

<section class="forge-service-pricing nfc-page">

  <!-- =========================
       HERO: CLEAR INTENT
  ========================== -->
  <header class="forge-section-header">
    <h1 class="forge-page-title">Forge NFC</h1>

    <p class="forge-subtext">
      Forge NFC is about turning real places into reliable triggers.
      Put a tag where a decision happens — your desk, your car, your nightstand —
      then tap your phone to run the routine you actually want.
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="#nfc-starter-pack">Start with the Starter Pack</a>
      <a class="forge-btn" href="#use-cases">See Use Cases</a>
      <a class="forge-btn" href="#all-tags">Browse All Tags</a>
    </div>
  </header>

  <!-- Hero image (replace with a real photo later) -->
  <section class="forge-card" aria-label="Forge NFC hero image">
    <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
      <img class="forge-card-img"
           src="{{ '/assets/img/products/nfc-hero.jpg' | relative_url }}"
           alt="A phone tapping an NFC tag on a desk with subtle blue lighting"
           loading="lazy" />
    </div>

    <div class="forge-ideas-grid" style="margin-top: 0.9rem;">
      <div class="forge-idea">
        <h3>No batteries</h3>
        <p>Tags are passive. Your phone powers the tap.</p>
      </div>
      <div class="forge-idea">
        <h3>No pairing</h3>
        <p>No setup rituals. Place the tag and go.</p>
      </div>
      <div class="forge-idea">
        <h3>Built for routines</h3>
        <p>Home, car, work, guests, safety — physical triggers win.</p>
      </div>
      <div class="forge-idea">
        <h3>Simple + reliable</h3>
        <p>A tap is faster than hunting through menus.</p>
      </div>
    </div>
  </section>

  <!-- =========================
       STARTER PACK SPOTLIGHT
  ========================== -->
  {% assign starter = products | where: "id", "nfc-starter-pack" | first %}
  {% if starter %}
  <section class="forge-card" id="nfc-starter-pack" aria-label="Forge NFC Starter Pack spotlight">
    <h2>Start here: {{ starter.name }}</h2>
    <p class="forge-muted" style="margin-top: 0.35rem;">
      The curated set that makes Forge NFC “click” immediately — the most useful daily automations in one pack.
    </p>

    <div class="forge-offerings-grid" style="margin-top: 1rem;">
      <article class="forge-offering-card pricing-card product-card" style="grid-column: span 12;">
        <div class="forge-card-topline">
          <span class="forge-card-title">{{ starter.name }}</span>
          {% if starter.badge %}<span class="forge-badge">{{ starter.badge }}</span>{% endif %}
        </div>

        <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
          <img class="forge-card-img"
               src="{{ '/assets/img/products/nfc-starter-pack-photo.jpg' | relative_url }}"
               alt="Forge NFC Starter Pack photographed on a desk with tags arranged neatly"
               loading="lazy" />
        </div>

        <div class="forge-card-body">
          <p class="forge-card-desc">{{ starter.short }}</p>

          {% if starter.features %}
            <ul class="forge-card-list">
              {% for f in starter.features %}
                <li>{{ f }}</li>
              {% endfor %}
            </ul>
          {% endif %}

          <div class="forge-card-price-row">
            <span class="forge-card-price">{{ starter.price }}</span>
            {% if starter.price_note %}<span class="forge-price-note">{{ starter.price_note }}</span>{% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ starter.cta_url | relative_url }}">{{ starter.cta_label | default: "View Details" }}</a>
          </div>
        </div>
      </article>
    </div>
  </section>
  {% endif %}

  <!-- =========================
       HOW IT WORKS (SHORT + CONFIDENT)
  ========================== -->
  <section class="forge-card" id="how-it-works" aria-label="How Forge NFC works">
    <h2>How it works</h2>
    <ol class="forge-steps">
      <li><strong>Place</strong> a tag where the decision happens (desk, car mount, nightstand, entryway).</li>
      <li><strong>Tap</strong> your phone.</li>
      <li><strong>Run</strong> an automation (Wi-Fi, VPN, focus mode, guest info, SOS, and more).</li>
    </ol>
    <p class="forge-muted">It’s the fastest UI there is: the real world.</p>
  </section>

  <!-- =========================
       USE CASES (SELL THE WHY)
  ========================== -->
  <section class="forge-card" id="use-cases" aria-label="Forge NFC use cases">
    <h2>Use cases that feel like magic</h2>

    <div class="forge-ideas-grid">
      <div class="forge-idea">
        <h3>Car Mode</h3>
        <p>Maps + music + Bluetooth + driving focus. One tap as you get in.</p>
      </div>
      <div class="forge-idea">
        <h3>Home Mode</h3>
        <p>Connect Wi-Fi, open your dashboard, switch into “off work” mode.</p>
      </div>
      <div class="forge-idea">
        <h3>Guest Wi-Fi</h3>
        <p>Tap to show a QR code or a simple guest instructions page.</p>
      </div>
      <div class="forge-idea">
        <h3>Work / Focus</h3>
        <p>Timer + tasks + Do Not Disturb. Put it on your monitor stand.</p>
      </div>
      <div class="forge-idea">
        <h3>SOS</h3>
        <p>Emergency actions: call, text, location share, medical info link.</p>
      </div>
      <div class="forge-idea">
        <h3>Toolbox / Lab</h3>
        <p>Tap to open docs, wiring diagrams, checklists, or dashboards.</p>
      </div>
    </div>
  </section>

  <!-- =========================
       ALL TAGS (SNAPPY GRID)
  ========================== -->
  <h2 id="all-tags">NFC Tags</h2>

  <div class="forge-offerings-grid">
    {% assign tags = products | where: "category", "NFC Tags" %}
    {% for p in tags %}
      {% if p.id != "nfc-starter-pack" %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">
        <div class="forge-card-topline">
          <span class="forge-card-title">{{ p.name }}</span>
          {% if p.badge %}<span class="forge-badge">{{ p.badge }}</span>{% endif %}
        </div>

        <!-- TEMP image path: swap these to real photos later -->
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
              {% for f in p.features %}<li>{{ f }}</li>{% endfor %}
            </ul>
          {% endif %}

          <div class="forge-card-price-row">
            <span class="forge-card-price">{{ p.price }}</span>
            {% if p.price_note %}<span class="forge-price-note">{{ p.price_note }}</span>{% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "View Details" }}</a>
          </div>
        </div>
      </article>
      {% endif %}
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
          {% if p.badge %}<span class="forge-badge">{{ p.badge }}</span>{% endif %}
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
              {% for f in p.features %}<li>{{ f }}</li>{% endfor %}
            </ul>
          {% endif %}

          <div class="forge-card-price-row">
            <span class="forge-card-price">{{ p.price }}</span>
            {% if p.price_note %}<span class="forge-price-note">{{ p.price_note }}</span>{% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "Learn More" }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================
       FAQ (KEEP, BUT TIGHTENED)
  ========================== -->
  <section class="forge-faq" id="faq" aria-label="Forge NFC FAQ">
    <h2>FAQ</h2>

    <details class="forge-faq-item">
      <summary>Do the tags need power or batteries?</summary>
      <p>No — NFC tags are passive. Your phone powers the tap.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Will this work with Tasker / Automate / built-in routines?</summary>
      <p>Yes. Forge NFC is designed to work with popular Android automation tools and guided setups.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Do NFC tags work on iPhone?</summary>
      <p>Some iPhone automations are possible, but Forge NFC is primarily designed for Android “tap to run” style automations.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Can you make custom tag sets for my org or team?</summary>
      <p>Yes — custom label sets, onboarding instructions, and “tap-to-open” internal links/wiki pages.</p>
    </details>
  </section>

</section>