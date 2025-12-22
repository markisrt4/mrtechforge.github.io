---
layout: default
title: "MRTF-Line Communication Services"
permalink: /services/mrtf-line/
description: "A modular, managed phone and messaging line powered by M.R. TechForge."
---

{% assign mrtf_line = site.data.services | where: "id", "mrtf-line" | first %}

<div class="service-hero">
  <h1>M.R. TechForge Communication Line</h1>
  <div class="service-product-tag">
    Communication Line by M.R. TechForge
    <span style="opacity:0.75;">(currently labeled “MRTF-Line”)</span>
  </div>

  {% if mrtf_line %}
    <!-- Option B (refined): no “cloud” wording -->
    <p>
      <strong>A phone number that works the way you do.</strong>
      This is a managed phone and messaging number designed for real people — not call centers.
      Instead of tying communication to a single device, your number lives on a secure managed platform and
      can ring phones, send texts, deliver voicemails, or trigger notifications based on your needs.
    </p>
  {% else %}
    <p>
      A managed phone &amp; messaging line that can route calls, send texts, deliver voicemails,
      and trigger notifications — without exposing personal numbers or wrestling with a complex phone system.
    </p>
  {% endif %}

  <p><strong>Start with one number, then add only the features you need.</strong></p>
</div>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Who This Is For</h2>

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
  <h2 class="services-heading">How It Works</h2>

  <div class="phone-services-card">
    <ol class="how-it-works-steps">
      <li><strong>We set up your dedicated number.</strong> You get a managed phone &amp; text line configured by M.R. TechForge.</li>
      <li>
        <strong>You pick your add-ons.</strong>
        Choose from call menus, routing, voicemail upgrades, after-hours behavior,
        <strong>Slack notifications</strong>, secure messaging, 2FA delivery, and dashboards.
      </li>
      <li><strong>We customize the behavior.</strong> Greetings, menus, routing rules, and responses are built around how you actually work.</li>
      <li><strong>You focus on people, not phone systems.</strong> When you need changes, MRTF handles them — or you can use a dashboard if you prefer.</li>
    </ol>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Typical Cost</h2>

  <div class="phone-services-card">
    <p style="margin-top: 0;">
      <strong>Typical monthly cost:</strong>
      <span style="white-space: nowrap;">$20–$45 / month</span>
      <span style="color: var(--forge-subtext);">based on common configurations.</span>
    </p>

    <p style="margin-bottom: 0;">
      <strong>Quick reassurance:</strong>
      Setup covers consultation, configuration, testing, and documentation so your line behaves correctly
      during business hours, after hours, and when changes happen.
    </p>

    {% if mrtf_line and mrtf_line.minimum_setup %}
      <p style="margin-top: 0.85rem; color: var(--forge-subtext); font-size: 0.95rem;">
        <strong>Minimum setup:</strong> {{ mrtf_line.minimum_setup }}
      </p>
    {% endif %}

    {% if mrtf_line and mrtf_line.pricing_note %}
      <p style="margin-top: 0.6rem; color: var(--forge-subtext); font-size: 0.95rem;">
        {{ mrtf_line.pricing_note }}
      </p>
    {% endif %}
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section forge-service-pricing">
  <h2 class="services-heading">Offerings &amp; Pricing</h2>

  <p>
    Every setup starts with the <strong>Phone Line</strong>. From there, you can
    mix and match add-ons based on your needs and budget.
  </p>

  {% if mrtf_line and mrtf_line.offerings %}
    <div class="forge-offerings-grid">
      {% for offering in mrtf_line.offerings %}

        {% assign icon = offering.icon | default: "📞" %}
        {% assign is_core = false %}
        {% if offering.core == true or offering.name == "MRTF-Line Phone Line" %}
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

<!-- FAQ using your _faq.scss accordion structure: input then label then answer -->
<section class="service-section">
  <h2 class="faq-heading">FAQ</h2>
  <p class="faq-subtitle">Simple answers to common questions.</p>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-1">
    <label class="faq-question" for="faq-comm-1">Is this a physical phone line?</label>
    <div class="faq-answer">
      <p>
        It’s a <strong>managed phone number</strong>, not a handset. You can use it with mobile apps,
        desk phones, or routing rules depending on what fits your setup.
      </p>
    </div>
  </div>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-2">
    <label class="faq-question" for="faq-comm-2">Can I make outgoing calls from this number?</label>
    <div class="faq-answer">
      <p>
        Yes — outbound calling can be enabled so calls show your managed number as the caller ID.
        We’ll configure the safest approach for your use case.
      </p>
    </div>
  </div>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-3">
    <label class="faq-question" for="faq-comm-3">What is a “softphone” app?</label>
    <div class="faq-answer">
      <p>
        A <strong>softphone</strong> is an app on your phone or computer that lets you make and receive calls
        using your managed number — like having a second line inside an app.
      </p>
    </div>
  </div>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-4">
    <label class="faq-question" for="faq-comm-4">What is a SIP desk phone?</label>
    <div class="faq-answer">
      <p>
        A <strong>SIP phone</strong> is a desk phone that uses your internet connection instead of a traditional phone jack.
        It looks and feels like a normal office phone — just more modern under the hood.
      </p>
    </div>
  </div>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-5">
    <label class="faq-question" for="faq-comm-5">What is an ATA adapter?</label>
    <div class="faq-answer">
      <p>
        An <strong>ATA adapter</strong> is a small device that lets a traditional phone (old-school handset)
        work with an internet-based phone number.
      </p>
    </div>
  </div>

  <div class="faq-item">
    <input type="checkbox" id="faq-comm-6">
    <label class="faq-question" for="faq-comm-6">Do I need special hardware to start?</label>
    <div class="faq-answer">
      <p>
        No. Most clients start with routing rules and/or a softphone app.
        If you want a desk phone, we’ll recommend a simple, compatible option — no proprietary lock-in.
      </p>
    </div>
  </div>
</section>

<div class="services-divider"></div>

<section class="service-section">
  <h2 class="services-heading">Download the Overview (PDF)</h2>

  <p>
    Want something you can share with staff, boards, or leadership teams?
    Download a one-page overview:
  </p>

  <p>
    <a href="/assets/docs/MRTF-Line_Marketing_Overview.pdf" class="btn btn-forge">
      Download Communication Line Overview (PDF)
    </a>
  </p>
</section>

<div class="services-divider"></div>

<section class="service-section services-cta">
  <h2 class="services-heading">Ready to Talk About Your Line?</h2>

  <p>
    Most clients start with one number and one or two add-ons, then evolve over time as needs change.
  </p>

  <p>
    If you're curious whether this would be a good fit for your home, ministry,
    library, or small organization, reach out and we’ll design a setup that makes
    sense for your size, budget, and comfort level.
  </p>
</section>

<section class="forge-form-card">
  <h2 class="services-heading">Request a Setup Quote</h2>

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

    <div class="form-grid">
      <div>
        <label>Organization / Project Name</label>
        <input type="text" name="organization" required />
      </div>

      <div>
        <label>Preferred Area Code (optional)</label>
        <input type="text" name="area_code" />
      </div>
    </div>

    <div class="form-grid">
      <div>
        <label>Contact Name</label>
        <input type="text" name="name" required />
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>
    </div>

    <label>How should calls/texts work?</label>
    <textarea
      name="workflow"
      rows="4"
      placeholder="Example: After-hours voicemail to email; business hours ring 2 staff; texts auto-reply with HOURS; etc."
      required
    ></textarea>

    <label>Interested Features</label>
    <select name="features">
      <option value="not_sure">Not sure yet</option>
      <option value="core_only">Phone Line (Core)</option>
      <option value="ivr">Call Menu (IVR)</option>
      <option value="routing">Call Forwarding (Smart Routing)</option>
      <option value="voicemail">Voicemail Upgrade</option>
      <option value="after_hours">After-Hours / Emergency Routing</option>
      <option value="spam_filter">Spam &amp; Robocall Filtering</option>
      <option value="slack">Slack Notifications</option>
      <option value="secure_sms">Secure SMS / Messaging</option>
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
