---
layout: default
title: "Software Toolkits"
permalink: /products/software-toolkits/
description: "Purpose-built software tools and build environments designed to remove friction from real development workflows."
---

{% assign toolkits = site.data.products | where: "category", "software-toolkits" %}

<div class="forge-service-pricing software-toolkits-page">

  <!-- ============================
       HERO
  ============================ -->
  <div class="forge-card" aria-label="Software Toolkits hero">
    <div class="forge-card-body">
      <h1>Software Toolkits</h1>
      <p class="forge-lead">
        Self-contained software environments and tools built to solve real engineering problems —
        without bloat, lock-in, or guesswork.
      </p>

      <div class="forge-ideas-grid">
        <div class="forge-idea">
          <h3>Reproducible</h3>
          <p>Same results every time, across machines and environments.</p>
        </div>
        <div class="forge-idea">
          <h3>CLI-first</h3>
          <p>Designed to run headless, locally, or in CI pipelines.</p>
        </div>
        <div class="forge-idea">
          <h3>Opinionated (on purpose)</h3>
          <p>Sensible defaults that avoid fragile setups.</p>
        </div>
        <div class="forge-idea">
          <h3>Expandable</h3>
          <p>Built to evolve as workflows grow.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================
       TOOLKITS (DATA-DRIVEN)
  ============================ -->
  <div class="forge-card" id="toolkits">
    <h2>Available Toolkits</h2>
    <p>
      These toolkits are designed to stand on their own. Optional guidance is available
      if you want help integrating them into your workflow.
    </p>

    <div class="forge-ideas-grid">

      {% if toolkits and toolkits.size > 0 %}
        {% for p in toolkits %}
          <div class="forge-idea">
            {% if p.badge %}
              <div class="forge-badge">{{ p.badge }}</div>
            {% endif %}

            <h3>{{ p.name }}</h3>

            {% if p.description %}
              <p>{{ p.description }}</p>
            {% endif %}

            {% if p.short_features %}
              <ul class="forge-bullets">
                {% for f in p.short_features %}
                  <li>{{ f }}</li>
                {% endfor %}
              </ul>
            {% endif %}

            {% if p.url %}
              <a class="forge-btn" href="{{ p.url }}">
                {{ p.cta_label | default: "View Toolkit" }}
              </a>
            {% endif %}
          </div>
        {% endfor %}
      {% else %}
        <div class="forge-idea forge-idea-muted">
          <h3>Toolkits Incoming</h3>
          <p>
            Toolkits are actively being forged. Check back soon.
          </p>
        </div>
      {% endif %}

    </div>
  </div>

  <!-- ============================
       CTA
  ============================ -->
  <div class="forge-card">
    <h2>Want help choosing the right toolkit?</h2>
    <p>
      If you’re curious about fit for your workflow, reach out — I’ll point you in the right direction.
    </p>
    <a class="forge-btn" href="/contact/">Start a Conversation</a>
  </div>

</div>