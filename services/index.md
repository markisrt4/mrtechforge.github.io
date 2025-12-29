---
layout: default
title: "Services"
permalink: /services/
description: "Clear, secure, recoverable technology services by M.R. TechForge."
---

{% assign links = site.data.links %}

<div class="service-hero">
  <h1>What MR TechForge Offers</h1>

  <p class="service-subhead">
    You don’t need “more tech.” You need a setup that’s <strong>clear</strong>,
    <strong>safe</strong>, and <strong>recoverable</strong>.
    We focus on solutions you can understand — with documentation and support
    options that match your comfort level.
  </p>

  <p style="margin-top: 1.2rem;">
    <a href="#services-grid" class="btn btn-forge">Explore Services</a>
    &nbsp;
    <a href="{{ links.pages.contact }}" class="btn-glow">Contact MR TechForge</a>
  </p>

  <!-- PDF downloads -->
  <div style="margin-top: 1.2rem;">
    <p style="margin: 0 0 0.4rem 0; font-size: 0.95rem; color: var(--forge-subtext);">
      Downloads:
    </p>
    <p style="margin: 0;">
      <a href="{{ links.downloads.forge_line_comms_overview }}" class="btn btn-forge">
        Forge Line Communications Overview (PDF)
      </a>
      &nbsp;
      <a href="{{ links.downloads.online_digital_seminar_outline }}" class="btn btn-forge">
        Online Digital Seminar Outline (PDF)
      </a>
    </p>
  </div>

  <p style="margin-top: 1rem; font-size: 0.95rem; color: var(--forge-subtext);">
    Jump to:
    <a href="#secure-network">Secure Network</a> •
    <a href="#forge-managed-phone-text">Managed Phone &amp; Text</a> •
    <a href="#tech-services">Tech Services</a> •
    <a href="#docs-testing">Docs &amp; Testing</a>
  </p>
</div>

<div class="services-divider"></div>

<section id="services-grid" class="service-section">
  <div class="forge-offerings-grid">

    <!-- Secure Network Services -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🛡️</div>
      <h3 class="forge-offering-title">Secure Network Services</h3>

      <p class="forge-offering-desc">
        Secure, private, local-first network infrastructure for homes and small
        businesses — built intentionally, documented clearly, and designed for recovery.
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
        <a href="{{ links.services.secure_network }}" class="btn btn-forge">
          View Secure Network →
        </a>
      </p>

      <p class="quick-overview">
        <a href="#secure-network">Quick overview ↓</a>
      </p>
    </article>

    <!-- Forge Managed Phone & Text -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">📞</div>
      <h3 class="forge-offering-title">Forge Managed Phone &amp; Text</h3>

      <p class="forge-offering-desc">
        A managed communication service providing a dedicated phone and text
        number — with call menus, routing, voicemail upgrades, secure messaging,
        and optional dashboards.
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
        <a href="{{ links.services.forge_managed_phone_text }}" class="btn btn-forge">
          View Managed Phone &amp; Text →
        </a>
      </p>

      <p class="quick-overview">
        <a href="#forge-managed-phone-text">Quick overview ↓</a>
      </p>
    </article>

    <!-- Tech Services & Coaching -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🧩</div>
      <h3 class="forge-offering-title">Tech Services &amp; Coaching</h3>

      <p class="forge-offering-desc">
        Practical, friendly technology help for individuals, families, and small
        organizations — from websites and e-commerce to online safety and
        hands-on coaching.
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
        <a href="{{ links.services.tech_services }}" class="btn btn-forge">
          View Tech Services →
        </a>
      </p>

      <p class="quick-overview">
        <a href="#tech-services">Quick overview ↓</a>
      </p>
    </article>

    <!-- Documentation & Product Testing -->
    <article class="forge-offering-card">
      <div class="forge-offering-icon">🧪</div>
      <h3 class="forge-offering-title">Documentation &amp; Product Testing</h3>

      <p class="forge-offering-desc">
        Forging clarity between engineers, products, and people — through
        professional documentation, usability testing, and clean delivery.
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
        <a href="{{ links.services.doc_product_testing }}" class="btn btn-forge">
          View Docs &amp; Testing →
        </a>
      </p>

      <p class="quick-overview">
        <a href="#docs-testing">Quick overview ↓</a>
      </p>
    </article>

  </div>
</section>