---
layout: default
title: "Forge NFC"
permalink: /products/nfc/
class: products
description: "Forge NFC — tap-to-run tags that turn real spaces into reliable triggers."
---

{% assign products = site.data.products %}
{% assign tags = products | where: "category", "NFC Tags" %}
{% assign apps = products | where: "category", "Apps" %}
{% assign starter = products | where: "id", "nfc-starter-pack" | first %}

<section class="forge-service-pricing nfc-page">

  <!-- =========================================
       HERO: intent + positioning
  ========================================== -->
  <header class="forge-section-header">
    <h1 class="forge-page-title">Forge NFC</h1>

    <p class="forge-subtext">
      Forge NFC is a simple idea: <strong>put a shortcut where life happens</strong>.
      Place a tag on your desk, in your car, or by your door — then tap your phone to run the routine you actually want.
      Faster than menus. More reliable than “I’ll do it in a second.”
    </p>

    <div class="forge-hero-cta">
      <a class="forge-btn" href="#starter">Start with the Starter Pack</a>
      <a class="forge-btn" href="#use-cases">Use Cases</a>
      <a class="forge-btn" href="#all-tags">All Tags</a>
    </div>
  </header>

  <!-- Big hero image that carries the page -->
  <section class="forge-card" aria-label="Forge NFC hero image">
    <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
      <img class="forge-card-img"
           src="{{ '/assets/img/products/nfc-hero.jpg' | relative_url }}"
           alt="Phone tapping an NFC tag on a desk with subtle blue lighting"
           loading="lazy" />
    </div>

    <div class="forge-ideas-grid" style="margin-top: 0.95rem;">
      <div class="forge-idea">
        <h3>No batteries</h3>
        <p>Passive tags — your phone powers the tap.</p>
      </div>
      <div class="forge-idea">
        <h3>No pairing</h3>
        <p>Place it. Tap it. Done.</p>
      </div>
      <div class="forge-idea">
        <h3>Built for routines</h3>
        <p>Home, car, work, guests, safety.</p>
      </div>
      <div class="forge-idea">
        <h3>Fast on purpose</h3>
        <p>Physical triggers beat buried settings.</p>
      </div>
    </div>
  </section>

  <!-- =========================================
       STARTER PACK SPOTLIGHT (hero product)
  ========================================== -->
  <section class="forge-card" id="starter" aria-label="Forge NFC Starter Pack spotlight">
    <h2>Start here: Starter Pack</h2>
    <p class="forge-muted" style="margin-top: 0.35rem;">
      The fastest way to experience the “ohhh… that’s actually useful” moment.
      A curated set of tags for daily life.
    </p>

    {% if starter %}
      <div class="forge-offerings-grid" style="margin-top: 1rem;">
        <article id="nfc-starter-pack" class="forge-offering-card pricing-card product-card" style="grid-column: 1 / -1;">
          <div class="forge-card-topline">
            <span class="forge-card-title">{{ starter.name }}</span>
            {% if starter.badge %}<span class="forge-badge">{{ starter.badge }}</span>{% endif %}
          </div>

          <div class="forge-card-media" style="aspect-ratio: 21 / 9;">
            <img class="forge-card-img"
                 src="{{ '/assets/img/products/nfc-starter-pack-photo.jpg' | relative_url }}"
                 alt="Forge NFC Starter Pack photographed on a desk"
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
    {% endif %}
  </section>

  <!-- =========================================
       HOW IT WORKS (short + confident)
  ========================================== -->
  <section class="forge-card" id="how-it-works" aria-label="How Forge NFC works">
    <h2>How it works</h2>
    <ol class="forge-steps">
      <li><strong>Place</strong> a tag where the decision happens (desk, car mount, entryway, nightstand).</li>
      <li><strong>Tap</strong> your phone.</li>
      <li><strong>Run</strong> the routine: connectivity, focus, guest access, safety, or a custom workflow.</li>
    </ol>
    <p class="forge-muted">It’s the fastest UI there is: the real world.</p>
  </section>

  <!-- =========================================
       USE CASES (sell the why)
  ========================================== -->
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
        <p>Tap to show a QR code or a simple guest page. No password reciting.</p>
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
        <p>Tap to open docs, wiring diagrams, checklists, dashboards.</p>
      </div>
    </div>
  </section>

  <!-- =========================================
       TAGS GRID (snappy cards)
  ========================================== -->
  <h2 id="all-tags">NFC Tags</h2>

  <div class="forge-offerings-grid">
    {% for p in tags %}
      {% if p.id != "nfc-starter-pack" %}
        <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">
          <div class="forge-card-topline">
            <span class="forge-card-title">{{ p.name }}</span>
            {% if p.badge %}<span class="forge-badge">{{ p.badge }}</span>{% endif %}
          </div>

          <div class="forge-card-media">
            {% if p.photo %}
              <img class="forge-card-img"
                   src="{{ p.photo | relative_url }}"
                   alt="{{ p.alt }}"
                   loading="lazy" />
            {% else %}
              <img class="forge-card-img"
                   src="{{ p.image | relative_url }}"
                   alt="{{ p.alt }}"
                   loading="lazy" />
            {% endif %}
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

  <!-- =========================================
       APPS (same visual system)
  ========================================== -->
  <h2 id="apps">Companion apps</h2>

  <div class="forge-offerings-grid">
    {% for p in apps %}
      <article id="{{ p.id }}" class="forge-offering-card pricing-card product-card">
        <div class="forge-card-topline">
          <span class="forge-card-title">{{ p.name }}</span>
          {% if p.badge %}<span class="forge-badge">{{ p.badge }}</span>{% endif %}
        </div>

        <div class="forge-card-media">
          {% if p.photo %}
            <img class="forge-card-img"
                 src="{{ p.photo | relative_url }}"
                 alt="{{ p.alt }}"
                 loading="lazy" />
          {% else %}
            <img class="forge-card-img"
                 src="{{ p.image | relative_url }}"
                 alt="{{ p.alt }}"
                 loading="lazy" />
          {% endif %}
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
            {% if p.price_note %}<span class="forge-price-note">{{ p.price_note }}</span>{% endif %}
          </div>

          <div class="forge-card-cta">
            <a class="forge-btn" href="{{ p.cta_url | relative_url }}">{{ p.cta_label | default: "Learn More" }}</a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- =========================================
       FAQ (tight + credible)
  ========================================== -->
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
      <p>Some iPhone automations are possible, but Forge NFC is primarily designed for Android tap automations.</p>
    </details>

    <details class="forge-faq-item">
      <summary>Can you make custom tag sets for my org or team?</summary>
      <p>Yes — custom label sets, onboarding instructions, and tap-to-open internal docs or dashboards.</p>
    </details>
  </section>

  <div class="forge-products-footer">
    <a class="forge-btn" href="{{ '/products/' | relative_url }}">← Back to Products</a>
  </div>

</section>