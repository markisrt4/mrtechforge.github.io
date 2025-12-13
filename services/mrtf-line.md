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
      <li><strong>You pick your add-ons.</strong> Choose from call menus, hours &amp; routing, voicemail+, text auto-replies, secure messaging, 2FA delivery, and dashboard access.</li>
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

        {%- comment -%}
        Simple icon mapping by offering name
        {%- endcomment -%}
        {% assign icon = "📞" %}
        {% case name %}
          {% when "MRTF-Line Phone Line" %}
            {% assign icon = "📞" %}
          {% when "Call Menu" %}
            {% assign icon = "📲" %}
          {% when "Hours & Routing" %}
            {% assign icon = "⏰" %}
          {% when "Voicemail+" %}
            {% assign icon = "🎙️" %}
          {% when "Text Auto-Replies" %}
            {% assign icon = "💬" %}
          {% when "Secure Messaging (Signal)" %}
            {% assign icon = "🛡️" %}
          {% when "Caller Shield" %}
            {% assign icon = "🚫" %}
          {% when "2FA Delivery" %}
            {% assign icon = "✅" %}
          {% when "Dashboard (Basic)" %}
            {% assign icon = "📊" %}
          {% when "Dashboard (Multi-Admin)" %}
            {% assign icon = "👥" %}
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

          <div class="forge-offering-pricing is-setup">
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
  {% else %}
    <p><em>MRTF-Line offerings are coming soon. Please contact M.R. TechForge for current pricing.</em></p>
  {% endif %}
</section>

<div class="services-divider"></div>

<section class="service-section forge-bundles">
  <h2 class="services-heading">Suggested Configurations</h2>
  <p class="section-sub">
    These examples help estimate monthly cost quickly. Final setup is always tailored to your workflow.
  </p>

  <div class="forge-bundle-grid">
    <article class="forge-bundle-card">
      <div class="forge-bundle-tag">Essentials</div>
      <div class="forge-bundle-price">$27/mo</div>
      <div class="forge-bundle-meta">Approximate • Setup from $15</div>
      <ul class="forge-bundle-list">
        <li>MRTF-Line Phone Line</li>
        <li>Hours &amp; Routing</li>
        <li>Secure Messaging (Signal)</li>
      </ul>
      <p class="forge-bundle-desc">
        A clean professional line with time-aware behavior + optional secure channel.
      </p>
    </article>

    <article class="forge-bundle-card">
      <div class="forge-bundle-tag">Community</div>
      <div class="forge-bundle-price">$42/mo</div>
      <div class="forge-bundle-meta">Approximate • Setup from $50</div>
      <ul class="forge-bundle-list">
        <li>MRTF-Line Phone Line</li>
        <li>Call Menu (IVR)</li>
        <li>Hours &amp; Routing</li>
        <li>Caller Shield</li>
      </ul>
      <p class="forge-bundle-desc">
        Great for libraries, churches, and community organizations handling frequent inquiries.
      </p>
    </article>

    <article class="forge-bundle-card">
      <div class="forge-bundle-tag">Enhanced Security</div>
      <div class="forge-bundle-price">$52/mo</div>
      <div class="forge-bundle-meta">Approximate • Setup from $55</div>
      <ul class="forge-bundle-list">
        <li>MRTF-Line Phone Line</li>
        <li>2FA Delivery</li>
        <li>Caller Shield</li>
        <li>Dashboard (Basic)</li>
      </ul>
      <p class="forge-bundle-desc">
        For organizations that need verification and a control surface without complexity.
      </p>
    </article>
  </div>
</section>


<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Download the MRTF-Line Overview (PDF)</h2>
  <p>
    Want something you can share with staff, boards, or leadership teams?
    Download a one-page MRTF-Line overview:
  </p>
  <p>
    <a href="/assets/docs/MRTF-Line_Marketing_Overview.pdf" class="btn-glow">
      Download MRTF-Line Marketing Overview (PDF)
    </a>
  </p>
</section>

<div class="services-divider"></div>

<section class="service-section services-cta">
  <h2 class="services-heading">Ready to Talk About Your Line?</h2>
  <p>
    Most clients start with a single <strong>MRTF-Line Phone Line</strong> and one or two add-ons,
    then evolve over time as their needs change.
  </p>
  <p>
    If you're curious whether MRTF-Line would be a good fit for your home, ministry,
    library, or small organization, reach out and we’ll design a setup that makes
    sense for your size, budget, and comfort level.
  </p>
  <p>
    <a href="/contact/" class="btn-glow">Contact M.R. TechForge About MRTF-Line</a>
  </p>
</section>
