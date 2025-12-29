---
layout: default
title: "Forge Managed Phone & Text"
permalink: /services/forge-managed-phone-text/
description: "A managed phone and messaging service designed and configured by M.R. TechForge."
---

{% assign mrtf_line = site.data.services | where: "id", "forge-managed-phone-text" | first %}

<div class="service-hero">
  <h1>Forge Managed Phone &amp; Text</h1>
  <div class="service-product-tag">
    Managed Communication Service by M.R. TechForge
  </div>

  <p>
    <strong>A phone number that works the way you do.</strong>
    Forge Managed Phone &amp; Text is a managed phone and messaging service designed for real people — not call centers and not phone companies. Instead of tying communication to a single device, your number is intentionally configured to ring phones, send texts, deliver voicemails, or trigger notifications based on how you actually operate.
  </p><p>
    Your number lives on resilient, centrally managed systems — not inside a phone and not dependent on a single carrier or piece of hardware.
  </p>

  <p>
    <strong>This is not a telecom contract.</strong>
    It’s a thoughtfully designed communication service, set up and maintained by M.R. TechForge.
  </p>
</div>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Who This Is For</h2>

  <div class="phone-services-card">
    <ul>
      <li>Churches and ministries that want a safe, centralized number for prayer requests and updates.</li>
      <li>Libraries and community spaces that need clear hours, event info, and directions by phone or text.</li>
      <li>Small organizations that want a professional contact number without becoming a phone-system expert.</li>
      <li>Counselors, wellness practitioners, and family services who benefit from controlled messaging.</li>
      <li>Individuals and families who want separation between personal life and public contact.</li>
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">How It Works</h2>

  <div class="phone-services-card">
    <ol class="how-it-works-steps">
      <li>
        <strong>We design your communication flow.</strong>
        Calls, texts, and messages are mapped intentionally — business hours, after hours, and edge cases included.
      </li>
      <li>
        <strong>You choose add-ons.</strong>
        Call menus, smart routing, voicemail behavior, secure messaging,
        Slack notifications, dashboards, and more.
      </li>
      <li>
        <strong>We configure and test.</strong>
        Everything is tested so the system behaves predictably before it ever goes live.
      </li>
      <li>
        <strong>You stay focused.</strong>
        When changes are needed, M.R. TechForge handles the updates — or gives you simple tools if you prefer.
      </li>
    </ol>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Typical Cost</h2>

  <div class="phone-services-card">
    <p style="margin-top: 0;">
      <strong>Typical monthly cost:</strong>
      <span style="white-space: nowrap;">{% if mrtf_line and mrtf_line.typical_monthly_range %}{{ mrtf_line.typical_monthly_range }}{% else %}$20–$45 / month{% endif %}</span>
      <span style="color: var(--forge-subtext);">
        depending on features and usage.
      </span>
    </p>

    <p style="margin-bottom: 0;">
      <strong>What setup covers:</strong>
      consultation, configuration, testing, and documentation so your communication behaves
      correctly during business hours, after hours, and when changes happen.
    </p>

    {% if mrtf_line and mrtf_line.minimum_setup %}
      <p style="margin-top: 0.75rem; color: var(--forge-subtext); font-size: 0.95rem;">
        <strong>Typical setup:</strong> {{ mrtf_line.minimum_setup }}
      </p>
    {% endif %}
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Bundle Packages (Out-the-Door Pricing)</h2>

  <p>
    These bundles are meant to make pricing easy to understand.
    Exact costs depend on your feature choices and usage — but these represent common real-world setups.
  </p>

  {% if mrtf_line and mrtf_line.bundles %}
    <div class="forge-offerings-grid">
      {% for bundle in mrtf_line.bundles %}
        <article class="forge-offering-card">
          <div class="forge-offering-icon">{{ bundle.icon | default: "📦" }}</div>

          <h3 class="forge-offering-title">
            {{ bundle.name }}
            {% if bundle.badge %}
              <span class="forge-offering-badge">{{ bundle.badge }}</span>
            {% endif %}
          </h3>

          {% if bundle.description %}
            <p class="forge-offering-desc">{{ bundle.description }}</p>
          {% endif %}

          <div class="forge-offering-pricing">
            {% assign setup_val = bundle.setup_price | default: bundle.setup_range %}
            {% assign monthly_val = bundle.monthly_price | default: bundle.monthly_range %}

            {% if setup_val %}
              <div class="forge-price-row is-setup">
                <span class="label">Setup</span>
                <span class="value">{{ setup_val }}</span>
              </div>
            {% endif %}

            {% if monthly_val %}
              <div class="forge-price-row">
                <span class="label">Monthly</span>
                <span class="value">{{ monthly_val }}</span>
              </div>
            {% endif %}
          </div>

          {% if bundle.includes %}
            <ul class="forge-offering-desc" style="margin-top: 0.8rem;">
              {% for item in bundle.includes %}
                <li>{{ item }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  {% else %}
    <div class="phone-services-card">
      <p style="margin: 0;">
        Bundles are not configured yet. Add a <code>bundles:</code> section under
        <code>id: forge-managed-phone-text</code> in <code>_data/services.yml</code>.
      </p>
    </div>
  {% endif %}

  <p style="margin-top: 1rem; color: var(--forge-subtext);">
    Want a tighter quote? Tell me your goals and I’ll propose the cleanest bundle for your needs.
  </p>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Available Features</h2>

  <p>
    Every setup starts with a managed phone number.
    From there, features are added based on what actually helps you communicate clearly and safely.
  </p>

  {% if mrtf_line and mrtf_line.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in mrtf_line.offerings %}

        {% assign icon = offering.icon | default: "📞" %}
        {% assign is_core = false %}
        {% if offering.core == true %}
          {% assign is_core = true %}
        {% endif %}

        <article class="forge-offering-card">
          <div class="forge-offering-icon">{{ icon }}</div>

          <h3 class="forge-offering-title">
            {{ offering.name }}
            {% if is_core %}
              <span class="forge-offering-badge">Core</span>
            {% endif %}
          </h3>

          <p class="forge-offering-desc">{{ offering.description }}</p>

          <div class="forge-offering-pricing">
            {% if offering.monthly %}
              <div class="forge-price-row">
                <span class="label">Monthly</span>
                <span class="value">${{ offering.monthly }} / mo</span>
              </div>
            {% endif %}

            {% if offering.setup != nil %}
              <div class="forge-price-row is-setup">
                <span class="label">Setup</span>
                {% if offering.setup == 0 %}
                  <span class="value is-included">Included</span>
                {% else %}
                  <span class="value">${{ offering.setup }} one-time</span>
                {% endif %}
              </div>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
  {% endif %}
</section>

<div class="services-divider"></div>

{% include faq-section.html
  category="managed-phone-text"
  title="FAQ"
  subtitle="Straight answers, no telecom jargon."
%}

<div class="services-divider"></div>

<section class="services-cta">
  <h2 class="services-heading">Ready to Design Your Communication?</h2>

  <p>
    If you’re tired of missed calls, unclear routing, or exposing personal numbers,
    Forge Managed Phone &amp; Text gives you a clean, intentional alternative.
  </p>
</section>

<section class="forge-form-card">
  <h2 class="services-heading">Request a Setup Quote</h2>

  <form
    name="forge-managed-phone-text"
    method="POST"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="forge-form"
  >
    <input type="hidden" name="form-name" value="forge-managed-phone-text" />

    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <label>Your Name</label>
    <input type="text" name="name" required />

    <label>Email</label>
    <input type="email" name="email" required />

    <label>Tell me what you’re trying to accomplish</label>
    <textarea
      name="goals"
      rows="4"
      placeholder="Example: After-hours voicemail, calls ring two people, texts auto-reply with hours, etc."
      required
    ></textarea>

    <button type="submit" class="btn btn-forge" style="width:100%; margin-top:1rem;">
      Request Setup
    </button>
  </form>
</section>
