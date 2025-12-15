---
layout: default
title: "Services"
permalink: /services/
description: "Services by M.R. TechForge — secure infrastructure, communication systems, general tech help, and clarity-focused documentation/testing."
---

{% assign all_services = site.data.services %}

{% assign sn = all_services | where: "id", "secure-network-services" | first %}
{% assign line = all_services | where: "id", "mrtf-line" | first %}
{% assign tech = all_services | where: "id", "tech-services" | first %}
{%- comment -%} documentation-product-testing is a standalone page, not necessarily in services.yml {%- endcomment -%}

<div class="service-hero">
  <h1>Services by M.R. TechForge</h1>
  <div class="service-product-tag">Build • Secure • Support • Clarify</div>

  <p>
    MRTF delivers practical, security-minded technology services — from hardened home &amp; small-business networks,
    to managed phone lines, to general tech help and coaching, to documentation and product testing that reduces friction.
  </p>

  <p><strong>Pick a lane below — or just tell us what you’re trying to accomplish.</strong></p>

  <p style="margin-top: 1rem;">
    <a href="#services-grid" class="btn btn-forge">Explore Services</a>
    &nbsp;
    <a href="/contact/" class="btn-glow">Contact MRTF</a>
  </p>

  <p style="margin-top: 1rem; color: var(--forge-subtext); font-size: 0.95rem;">
    Jump to:
    <a href="#secure-network">Secure Network</a> •
    <a href="#mrtf-line">MRTF-Line</a> •
    <a href="#tech-services">Tech Services</a> •
    <a href="#docs-testing">Docs &amp; Testing</a>
  </p>
</div>

<div class="services-divider"></div>

<section class="service-section" id="services-grid">
  <h2 class="services-heading">What MRTF Offers</h2>

  <div class="phone-services-card">
    <p style="margin: 0;">
      You don’t need “more tech.” You need a setup that’s <strong>clear</strong>, <strong>safe</strong>, and <strong>recoverable</strong>.
      MRTF focuses on solutions you can understand — with documentation and support options that match your comfort level.
    </p>
  </div>

  <div class="services-divider" style="margin: 1.6rem 0;"></div>

  <div class="forge-offerings-grid">
    <!-- Secure Network -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🛡️</div>
      <h3 class="forge-offering-title">Secure Network Services</h3>

      <p class="forge-offering-desc">
        {% if sn and sn.description %}
          {{ sn.description }}
        {% else %}
          Secure, local-first network infrastructure for homes and small businesses — designed intentionally and documented clearly.
        {% endif %}
      </p>

      <div class="forge-offering-pricing">
        <div class="forge-price-row">
          <span class="label">Best for</span>
          <span class="value">Home • Small business • Remote work</span>
        </div>
        <div class="forge-price-row is-setup">
          <span class="label">Includes</span>
          <span class="value">Packages + optional ongoing care</span>
        </div>
      </div>

      <p style="margin-top: 1rem;">
        <a class="btn btn-forge" href="/services/secure-network-services/">View Secure Network →</a>
      </p>
      <p style="margin-top: 0.6rem; font-size: 0.95rem; color: var(--forge-subtext);">
        <a href="#secure-network">Quick overview ↓</a>
      </p>
    </article>

    <!-- MRTF-Line -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">📞</div>
      <h3 class="forge-offering-title">MRTF-Line Communication Services</h3>

      <p class="forge-offering-desc">
        {% if line and line.description %}
          {{ line.description }}
        {% else %}
          A modular, managed phone &amp; messaging line so you can stay reachable without exposing your personal number.
        {% endif %}
      </p>

      <div class="forge-offering-pricing">
        <div class="forge-price-row">
          <span class="label">Best for</span>
          <span class="value">Ministries • Libraries • Small orgs</span>
        </div>
        <div class="forge-price-row is-setup">
          <span class="label">Style</span>
          <span class="value">Core line + add-ons</span>
        </div>
      </div>

      <p style="margin-top: 1rem;">
        <a class="btn btn-forge" href="/services/mrtf-line/">View MRTF-Line →</a>
      </p>
      <p style="margin-top: 0.6rem; font-size: 0.95rem; color: var(--forge-subtext);">
        <a href="#mrtf-line">Quick overview ↓</a>
      </p>
    </article>

    <!-- Tech Services -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🧩</div>
      <h3 class="forge-offering-title">Tech Services &amp; Coaching</h3>

      <p class="forge-offering-desc">
        {% if tech and tech.description %}
          {{ tech.description }}
        {% else %}
          Practical help for individuals, families, and small organizations — websites, e-commerce, security coaching, and remote support.
        {% endif %}
      </p>

      <div class="forge-offering-pricing">
        <div class="forge-price-row">
          <span class="label">Best for</span>
          <span class="value">Fix • Learn • Secure • Build</span>
        </div>
        <div class="forge-price-row is-setup">
          <span class="label">Format</span>
          <span class="value">Sessions + quoted projects</span>
        </div>
      </div>

      <p style="margin-top: 1rem;">
        <a class="btn btn-forge" href="/services/tech-services/">View Tech Services →</a>
      </p>
      <p style="margin-top: 0.6rem; font-size: 0.95rem; color: var(--forge-subtext);">
        <a href="#tech-services">Quick overview ↓</a>
      </p>
    </article>

    <!-- Docs & Testing -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🧪</div>
      <h3 class="forge-offering-title">Documentation &amp; Product Testing</h3>

      <p class="forge-offering-desc">
        Forging clarity between engineers, products, and people — through professional documentation, usability testing, and clean deliverables.
      </p>

      <div class="forge-offering-pricing">
        <div class="forge-price-row">
          <span class="label">Best for</span>
          <span class="value">Teams • Products • Launches</span>
        </div>
        <div class="forge-price-row is-setup">
          <span class="label">Outcome</span>
          <span class="value">Less confusion, fewer support tickets</span>
        </div>
      </div>

      <p style="margin-top: 1rem;">
        <a class="btn btn-forge" href="/services/documentation-product-testing/">View Docs &amp; Testing →</a>
      </p>
      <p style="margin-top: 0.6rem; font-size: 0.95rem; color: var(--forge-subtext);">
        <a href="#docs-testing">Quick overview ↓</a>
      </p>
    </article>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section" id="secure-network">
  <h2 class="services-heading">Secure Network Services</h2>

  <div class="phone-services-card">
    <p>
      A security-minded network setup for homes and small businesses — designed for clarity and recovery.
      Built with strong defaults, clear separation, and documentation you can actually use.
    </p>

    <ul>
      <li><strong>Home packages:</strong> safer defaults + parental controls + clean documentation</li>
      <li><strong>Business packages:</strong> tighter assumptions + clearer recovery paths</li>
      <li><strong>Optional ongoing care:</strong> best-effort assistance for clients who want continued support</li>
    </ul>

    <p style="margin-top: 1rem;">
      <a href="/services/secure-network-services/" class="btn btn-forge">Explore Secure Network Packages →</a>
    </p>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section" id="mrtf-line">
  <h2 class="services-heading">MRTF-Line Communication Services</h2>

  <div class="phone-services-card">
    <p>
      A managed phone &amp; text line that scales from simple to powerful. Start with one number,
      then add only what you need (menus, routing, voicemail upgrades, secure messaging, dashboards, and more).
    </p>

    <ul>
      <li><strong>Professional presence</strong> without enterprise phone-system pain</li>
      <li><strong>Modular add-ons</strong> so you only pay for what you use</li>
      <li><strong>Clear workflows</strong> designed around how you actually operate</li>
    </ul>

    <p style="margin-top: 1rem;">
      <a href="/services/mrtf-line/" class="btn btn-forge">Explore MRTF-Line →</a>
      &nbsp;
      <a href="/assets/docs/MRTF-Line_Marketing_Overview.pdf" class="btn-glow">Download Overview PDF</a>
    </p>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section" id="tech-services">
  <h2 class="services-heading">Tech Services &amp; Coaching</h2>

  <div class="phone-services-card">
    <p>
      General tech help that’s practical, calm, and security-minded by default.
      Ideal when you don’t need an IT department — you just need things to work.
    </p>

    <ul>
      <li>Website setup / redesign</li>
      <li>E-commerce integration</li>
      <li>Remote support sessions</li>
      <li>Security coaching and parent coaching</li>
      <li>Coding 101 for kids</li>
      <li>File recovery assessment</li>
    </ul>

    <p style="margin-top: 1rem;">
      <a href="/services/tech-services/" class="btn btn-forge">Explore Tech Services →</a>
    </p>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section" id="docs-testing">
  <h2 class="services-heading">Documentation &amp; Product Testing</h2>

  <div class="phone-services-card">
    <p>
      If your product is good but people still struggle, it’s usually clarity — not capability.
      MRTF improves onboarding, reduces support load, and makes your product feel as polished as it truly is.
    </p>

    <ul>
      <li><strong>Documentation:</strong> manuals, guides, SOPs, quick-starts, troubleshooting flows</li>
      <li><strong>Testing:</strong> usability checks, onboarding validation, bug capture, workflow improvement</li>
    </ul>

    <p style="margin-top: 1rem;">
      <a href="/services/documentation-product-testing/" class="btn btn-forge">Explore Docs &amp; Testing →</a>
    </p>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section services-cta">
  <h2 class="services-heading">Not Sure Which Service Fits?</h2>

  <div class="phone-services-card">
    <p style="margin-top: 0;">
      Totally fine. Tell MRTF what you’re trying to achieve — and we’ll recommend the simplest path forward.
    </p>

    <ul>
      <li><strong>“I need safer Wi-Fi + remote access.”</strong> → Secure Network</li>
      <li><strong>“I need a number for my org.”</strong> → MRTF-Line</li>
      <li><strong>“I need help fixing / setting up stuff.”</strong> → Tech Services</li>
      <li><strong>“Users are confused.”</strong> → Docs &amp; Testing</li>
    </ul>

    <p style="margin-top: 1rem;">
      <a href="/contact/" class="btn-glow">Contact M.R. TechForge</a>
    </p>
  </div>
</section>