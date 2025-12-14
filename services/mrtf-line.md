---
layout: default
title: "MRTF-Line Communication Services"
permalink: /services/mrtf-line/
description: "A modular, managed phone and messaging line powered by M.R. TechForge."
---

{% assign mrtf_line = site.data.services | where: "id", "mrtf-line" | first %}

<div class="service-hero">
  <h1>MRTF-Line Communication Services</h1>
  <div class="service-product-tag">MRTF-Line by M.R. TechForge</div>

  {% if mrtf_line %}
    <p>{{ mrtf_line.description }}</p>
  {% else %}
    <p>
      MRTF-Line gives you a dedicated, managed phone &amp; messaging line for your home,
      ministry, library, or small organization — without exposing your personal number
      or wrestling with complex phone systems.
    </p>
  {% endif %}

  <p><strong>Start with a single MRTF-Line phone number, then add only the features you need.</strong></p>
</div>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Who MRTF-Line Is For</h2>

  <div class="phone-services-card">
    <ul>
      <li>Churches and ministries that want a safe, centralized line for prayer requests and updates.</li>
      <li>Libraries and community spaces that need clear hours, event info, and directions by phone or text.</li>
      <li>Small businesses that want a professional call presence without an enterprise phone system bill.</li>
      <li>Counselors, wellness practitioners, and family services who benefit from secure messaging options.</li>
      <li>Individuals and families who want to separate “life” from “support &amp; tech” calls and texts.</li>
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">How MRTF-Line Works</h2>

  <div class="phone-services-card">
    <ol class="how-it-works-steps">
      <li><strong>We set up your MRTF-Line number.</strong> You get a dedicated phone &amp; text line managed by M.R. TechForge.</li>
      <li>
        <strong>You pick your add-ons.</strong>
        Choose from call menus, hours &amp; routing, voicemail+, text auto-replies,
        <strong>Slack notifications</strong>, secure messaging, 2FA delivery, and dashboard access.
      </li>
      <li><strong>We customize everything to your organization.</strong> Greetings, menus, routing, and responses are built around how you actually work.</li>
      <li><strong>You focus on people, not phone systems.</strong> When you need changes, MRTF handles them — or you can use the dashboard if you prefer.</li>
    </ol>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">MRTF-Line Offerings &amp; Pricing</h2>

  <p>
    Every MRTF-Line setup starts with the <strong>MRTF-Line Phone Line</strong>. From there, you can
    mix and match add-ons based on your needs and budget.
  </p>

  {% if mrtf_line and mrtf_line.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in mrtf_line.offerings %}
        {% assign name = offering.name %}

        {% assign icon = "📞" %}
        {% case name %}
          {% when "MRTF-Line Phone Line" %}{% assign icon = "📞" %}
          {% when "Call Menu" %}{% assign icon = "📲" %}
          {% when "Hours & Routing" %}{% assign icon = "⏰" %}
          {% when "Voicemail+" %}{% assign icon = "🎙️" %}
          {% when "Text Auto-Replies" %}{% assign icon = "💬" %}
          {% when "Slack Notifications" %}{% assign icon = "🔔" %}
          {% when "Secure Messaging (Signal)" %}{% assign icon = "🛡️" %}
          {% when "Caller Shield" %}{% assign icon = "🚫" %}
          {% when "2FA Delivery" %}{% assign icon = "✅" %}
          {% when "Dashboard (Basic)" %}{% assign icon = "📊" %}
          {% when "Dashboard (Multi-Admin)" %}{% assign icon = "👥" %}
        {% endcase %}

        {% assign is_core = false %}
        {% if name == "MRTF-Line Phone Line" %}
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

<section class="forge-form-card">
  <h2 class="services-heading">Request an MRTF-Line Setup Quote</h2>

  <form
    name="mrtf-line"
    method="POST"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="forge-form"
  >
    <input type="hidden" name="form-name" value="mrtf-line" />

    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <label>Interested Features</label>
    <select name="features">
      <option value="not_sure">Not sure yet</option>
      <option value="core_only">Core line only</option>
      <option value="ivr">Call Menu (IVR)</option>
      <option value="hours_routing">Hours & Routing</option>
      <option value="voicemail">Voicemail+</option>
      <option value="text_autoreplies">Text Auto-Replies</option>
      <option value="slack">Slack Notifications</option>
      <option value="signal">Secure Messaging (Signal)</option>
      <option value="caller_shield">Caller Shield</option>
      <option value="2fa">2FA Delivery</option>
      <option value="dashboard_basic">Dashboard (Basic)</option>
      <option value="dashboard_multi">Dashboard (Multi-Admin)</option>
    </select>

    <button type="submit" class="btn btn-forge" style="margin-top: 1rem; width: 100%;">
      Request Setup Quote
    </button>
  </form>

  <p style="margin-top: 0.9rem; color: var(--forge-subtext); font-size: 0.95rem;">
    We’ll respond with a recommended configuration and setup quote.
  </p>
</section>