---
layout: default
title: "Forge Secure Network Services"
permalink: /services/secure-network-services/
description: "Secure, local-first network infrastructure for homes and small businesses."
---

{% assign sn = site.data.services | where: "id", "secure-network-services" | first %}

<div class="service-hero">
  <h1>{% if sn and sn.title %}{{ sn.title }}{% else %}Forge Secure Network Services{% endif %}</h1>
  <div class="service-product-tag">
    {% if sn and sn.product_tag %}{{ sn.product_tag }}{% else %}Forge Secure Network by M.R. TechForge{% endif %}
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
  <h2 class="services-heading">How Forge Secure Network Works</h2>

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
  <h2 class="services-heading">Home Network Packages</h2>
  <p class="section-sub">
    Choose a package that matches your household needs. Final configuration is tailored to your environment.
  </p>

  {% if sn and sn.home_packages %}
    <div class="forge-bundle-grid">
      {% for p in sn.home_packages %}
        <article class="forge-bundle-card">
        <h3 class="forge-bundle-title">
  {{ p.title | default: p.name | default: p.label | default: "Package" }}
        </h3>
          <div class="forge-bundle-tag">Home</div>

          <div class="forge-bundle-price">
            {% if p.billing == "setup-plus-monthly" %}
              <div>Setup: {{ p.setup_range }}</div>
              <div>Monthly: {{ p.monthly_range }}</div>
            {% else %}
              {{ p.price_range }}
            {% endif %}
          </div>

          <div class="forge-bundle-meta">
            {% if p.billing == "setup-plus-monthly" %}
              Setup + Monthly
            {% else %}
              One-time
            {% endif %}
            {% if p.scope_hint %} • {{ p.scope_hint }}{% endif %}
          </div>

          <ul class="forge-bundle-list">
            {% if p.includes %}
              {% for it in p.includes %}
                <li>{{ it }}</li>
              {% endfor %}
            {% endif %}
          </ul>

          {% if p.ideal_for %}
            <p class="forge-bundle-desc"><strong>Ideal for:</strong>
              {% for it in p.ideal_for %}
                {{ it }}{% unless forloop.last %}, {% endunless %}
              {% endfor %}
            </p>
          {% endif %}

          {% if p.expectations %}
            <p class="forge-bundle-desc"><strong>Expectations:</strong>
              {% for it in p.expectations %}
                {{ it }}{% unless forloop.last %} • {% endunless %}
              {% endfor %}
            </p>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p><em>Home packages are being finalized. Contact MR TechForge for current availability.</em></p>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Business Network Packages</h2>
  <p class="section-sub">
    Designed for small organizations that need strong defaults, clear separation, and documented recovery paths.
  </p>

  {% if sn and sn.business_packages %}
    <div class="forge-bundle-grid">
      {% for p in sn.business_packages %}
        <article class="forge-bundle-card">
          <h3 class="forge-bundle-title">
  {{ p.title | default: p.name | default: p.label | default: "Package" }}
          </h3>
          <div class="forge-bundle-tag">Business</div>

          <div class="forge-bundle-price">
            {% if p.billing == "setup-plus-monthly" %}
              <div>Setup: {{ p.setup_range }}</div>
              <div>Monthly: {{ p.monthly_range }}</div>
            {% else %}
              {{ p.price_range }}
            {% endif %}
          </div>

          <div class="forge-bundle-meta">
            {% if p.billing == "setup-plus-monthly" %}
              Setup + Monthly
            {% else %}
              One-time
            {% endif %}
          </div>

          <ul class="forge-bundle-list">
            {% if p.includes %}
              {% for it in p.includes %}
                <li>{{ it }}</li>
              {% endfor %}
            {% endif %}
          </ul>

          {% if p.notes %}
            <p class="forge-bundle-desc">{{ p.notes }}</p>
          {% endif %}

          {% if p.note %}
            <p class="forge-bundle-desc">{{ p.note }}</p>
          {% endif %}

          {% if p.expectations %}
            <p class="forge-bundle-desc"><strong>Expectations:</strong>
              {% for it in p.expectations %}
                {{ it }}{% unless forloop.last %} • {% endunless %}
              {% endfor %}
            </p>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p><em>Business packages are being finalized. Contact us for current availability.</em></p>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Questions We’ll Ask You</h2>

  <div class="phone-services-card">
    <p>
      These questions help us recommend the right package and avoid unnecessary complexity.
    </p>
    <ul>
      <li>Is this for a home or a small business?</li>
      <li>Do you need access to your network while away from home or the office?</li>
      <li>How many people and devices regularly use the network?</li>
      <li>Are there children in the home who need safer internet defaults?</li>
      <li>What equipment do you already have (router, modem, storage)?</li>
      <li>Is reliability, privacy, or recovery your biggest concern?</li>
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">What’s Included (Capabilities)</h2>
  <p>
    These are the building blocks we design across packages. The exact mix depends on your environment and goals.
  </p>

  {% if sn and sn.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in sn.offerings %}
        {% assign name = offering.name %}

        {% assign icon = "🧩" %}
        {% case name %}
          {% when "Network Setup & Protection" %}{% assign icon = "🧱" %}
          {% when "Secure Remote Access" %}{% assign icon = "🔐" %}
          {% when "Network-Wide Protection" %}{% assign icon = "🛡️" %}
          {% when "Local Storage & Backup Design" %}{% assign icon = "🗄️" %}
          {% when "Managed Network Care" %}{% assign icon = "🛠️" %}
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

          {% if offering.pricing and (offering.pricing.setup_label or offering.pricing.monthly_label) %}
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
          {% endif %}
        </article>
      {% endfor %}
    </div>
  {% else %}
    <p><em>Capabilities are being finalized. Contact us for current availability.</em></p>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Request Help / Get a Quote</h2>

  <div class="forge-form-card">
    <form
      name="secure-network-services"
      method="POST"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="forge-form"
    >
      <input type="hidden" name="form-name" value="secure-network-services" />

      <p style="display:none;">
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <label>Your name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Phone (optional)</label>
      <input type="tel" name="phone" />

      <label>Is this for a home or a business?</label>
      <select name="client_type" required>
        <option value="" selected disabled>Select one</option>
        <option value="home">Home</option>
        <option value="business">Business</option>
        <option value="not_sure">Not sure yet</option>
      </select>

      <label>Which package are you leaning toward?</label>
      <select name="package_interest">
        <option value="not_sure" selected>Not sure yet</option>
        <option value="home_essential">Home – Essential</option>
        <option value="home_secure">Home – Secure Access & Backup Ready</option>
        <option value="home_managed">Home – Fully Managed Care</option>
        <option value="biz_essential">Business – Essential</option>
        <option value="biz_secure">Business – Secure Access & Backup Ready</option>
        <option value="biz_managed">Business – Fully Managed Care</option>
      </select>

      <label>What are you trying to improve? (optional)</label>
      <textarea
        name="goals"
        rows="5"
        placeholder="Example: safer Wi-Fi for kids, remote access for work, better backup/recovery, reduce sketchy device behavior..."
      ></textarea>

      <label>Notes (optional)</label>
      <textarea
        name="notes"
        rows="5"
        placeholder="Any details: ISP/router model, rough device count, any trouble spots, timeline..."
      ></textarea>

      <button type="submit" class="btn btn-forge" style="margin-top: 1rem; width: 100%;">
        Request Help
      </button>

      <p style="margin-top: 0.9rem; color: var(--forge-subtext); font-size: 0.95rem;">
        You’ll get a response with recommended next steps (quick assessment vs. quoted work).
      </p>
    </form>
  </div>
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
    Forge Secure Network Services are designed to scale without surprises.
  </p>
  <p>
    <a href="/contact/" class="btn-glow">Contact M.R. TechForge</a>
  </p>

  <p style="margin-top: 1.6rem; font-size: 0.9rem; color: var(--forge-subtext);">
    <a href="/terms/network-services/" target="_blank" rel="noopener">
      View Service Terms &amp; Expectations
    </a>
  </p>
</section>
