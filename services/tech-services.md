---
layout: default
title: "Forge Tech Services & Coaching"
permalink: /services/tech-services/
description: "Practical, friendly technology help — websites, e-commerce, security coaching, remote support, and digital safety for families."
---

{% assign tech = site.data.services | where: "id", "tech-services" | first %}

<div class="service-hero">
  <h1>MRTF Tech Services &amp; Coaching</h1>
  <div class="service-product-tag">General Tech by M.R. TechForge</div>

  {% if tech %}
    <p>{{ tech.description }}</p>
  {% else %}
    <p>
      Practical, friendly technology help for individuals, families, and small organizations —
      from websites and e-commerce to online safety, remote support, and hands-on coaching.
    </p>
  {% endif %}

  <p><strong>Clear guidance. Clean setups. Security-minded by default.</strong></p>
</div>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Who This Is For</h2>

  <div class="phone-services-card">
    <ul>
      <li>Individuals who want help setting things up “the right way” without getting overwhelmed.</li>
      <li>Families who want safer devices, safer accounts, and healthier online habits for kids.</li>
      <li>Small organizations that need a website, e-commerce, or tech systems that won’t fall apart.</li>
      <li>Anyone who wants practical privacy + security improvements (without paranoia or lectures).</li>
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">What We Can Help With</h2>

  <div class="phone-services-card">
    <ul>
      <li><strong>Web presence:</strong> website setup, redesign, performance basics, deployment guidance.</li>
      <li><strong>Online selling:</strong> e-commerce integration, payment setup, product/page structure, basic workflows.</li>
      <li><strong>Remote support:</strong> troubleshooting, tune-ups, installs, configs, “why is this doing that?”</li>
      <li><strong>Security coaching:</strong> passwords, 2FA, scams, backups, privacy settings, best practices.</li>
      <li><strong>Families + kids:</strong> parent coaching, safer device settings, boundaries, and digital literacy.</li>
      <li><strong>Learning:</strong> Coding 101 sessions for kids &amp; teens (age-appropriate pacing).</li>
      <li><strong>Data help:</strong> file recovery assessment and software-based recovery attempts (where possible).</li>
    </ul>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">How It Works</h2>

  <div class="phone-services-card">
    <ol class="how-it-works-steps">
      <li><strong>You tell MRTF what you’re trying to accomplish.</strong> (Fix, build, learn, secure, recover, or plan.)</li>
      <li><strong>We recommend a path.</strong> Quick session, structured coaching, or a quoted project.</li>
      <li><strong>We do the work together (or for you).</strong> Clear steps, clean configs, and documentation when it matters.</li>
      <li><strong>You leave with confidence.</strong> Not just a fix — but fewer repeats of the same problem.</li>
    </ol>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Offerings &amp; Pricing</h2>

  <p>
    Some work is best as a <strong>quick session</strong> (remote help / coaching), while bigger items
    (websites, e-commerce, seminars) are typically <strong>quoted</strong>.
  </p>

  {% if tech and tech.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in tech.offerings %}
        {% assign name = offering.name %}

        {% assign icon = "🧩" %}
        {% case name %}
          {% when "Website Setup / Redesign" %}{% assign icon = "🌐" %}
          {% when "E-Commerce Integration" %}{% assign icon = "🛒" %}
          {% when "Remote Support Session" %}{% assign icon = "🛠️" %}
          {% when "Digital Security Seminar" %}{% assign icon = "🎤" %}
          {% when "Private Security Coaching" %}{% assign icon = "🛡️" %}
          {% when "Parent Coaching: Kids Online" %}{% assign icon = "👨‍👩‍👧‍👦" %}
          {% when "Coding 101 for Kids" %}{% assign icon = "💻" %}
          {% when "File Recovery Assessment" %}{% assign icon = "💾" %}
        {% endcase %}

        <article class="forge-offering-card">
          <div class="forge-offering-icon">{{ icon }}</div>

          <h3 class="forge-offering-title">
            {{ offering.name }}
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

            {% if offering.price != nil %}
              <div class="forge-price-row">
                <span class="label">Rate</span>
                {% if offering.unit %}
                  {% if offering.unit == "quote" %}
                    <span class="value">Quoted</span>
                  {% else %}
                    {% if offering.price == 0 %}
                      <span class="value">Quoted</span>
                    {% else %}
                      <span class="value">${{ offering.price }} / {{ offering.unit }}</span>
                    {% endif %}
                  {% endif %}
                {% else %}
                  {% if offering.price == 0 %}
                    <span class="value">Quoted</span>
                  {% else %}
                    <span class="value">${{ offering.price }}</span>
                  {% endif %}
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
  <h2 class="services-heading">Request Help / Get a Quote</h2>

  <form
    name="tech-services"
    method="POST"
    action="/thanks/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="forge-form"
  >
    <input type="hidden" name="form-name" value="tech-services" />

    <p style="display:none;">
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <label>What are you looking for?</label>
    <select name="interest">
      <option value="not_sure">Not sure yet</option>
      <option value="website">Website setup / redesign</option>
      <option value="ecommerce">E-commerce integration</option>
      <option value="remote_support">Remote support / troubleshooting</option>
      <option value="security_seminar">Digital security seminar</option>
      <option value="security_coaching">Private security coaching</option>
      <option value="parent_coaching">Parent coaching (kids online)</option>
      <option value="coding_kids">Coding 101 for kids</option>
      <option value="file_recovery">File recovery assessment</option>
    </select>

    <label style="margin-top: 1rem;">Short description (optional)</label>
    <textarea name="details" rows="5" placeholder="What’s going on, what device/platform, and what outcome you want..."></textarea>

    <button type="submit" class="btn btn-forge" style="margin-top: 1rem; width: 100%;">
      Request Help
    </button>
  </form>

  <p style="margin-top: 0.9rem; color: var(--forge-subtext); font-size: 0.95rem;">
    You’ll get a response with recommended next steps (quick session vs. quoted project).
  </p>
</section>