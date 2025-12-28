---
title: FAQ
layout: default
permalink: /faq/
class: faq-page
---

{% assign links = site.data.links %}
{% assign faq = site.data.faq %}
{% assign categories = faq.categories %}
{% assign items = faq.items %}

<section class="faq-hero">
  <div class="faq-hero-inner">
    <div class="faq-hero-text">
      <h1 class="faq-title">Frequently Asked Questions</h1>
      <p class="faq-subtitle">
        Clear, honest answers — practical guidance with a little Forge personality.
      </p>

      <div class="faq-actions">
        <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Still stuck? Contact me</a>
        <a class="forge-btn" href="#faq-categories">Browse categories</a>
      </div>
    </div>

    <div class="faq-hero-media" aria-hidden="true">
      <img
        src="{{ '/assets/img/faq/faq-hero.jpg' | relative_url }}"
        alt="FAQ"
        loading="lazy"
      />
    </div>
  </div>
</section>

<section class="faq-wrap">

  <nav id="faq-categories" class="faq-category-nav" aria-label="FAQ Categories">
    {% for c in categories %}
      <a class="faq-cat-pill" href="#cat-{{ c.id }}">
        <span class="faq-cat-icon">{{ c.icon }}</span>
        <span class="faq-cat-text">{{ c.title }}</span>
      </a>
    {% endfor %}
  </nav>

  {% for c in categories %}
    <section class="faq-category" id="cat-{{ c.id }}">
      <header class="faq-category-header">
        <h2 class="faq-category-title">
          <span class="faq-cat-icon">{{ c.icon }}</span>
          {{ c.title }}
        </h2>
        {% if c.description %}
          <p class="faq-category-desc">{{ c.description }}</p>
        {% endif %}
      </header>

      <div class="faq-list">
        {% assign cat_items = items | where: "category", c.id %}
        {% for f in cat_items %}
          <details class="faq-item">
            <summary class="faq-question">
              <span class="faq-q">{{ f.q }}</span>
              <span class="faq-chevron" aria-hidden="true">▾</span>
            </summary>
            <div class="faq-answer">
              <p>{{ f.a }}</p>
            </div>
          </details>
        {% endfor %}
      </div>
    </section>
  {% endfor %}

  <section class="faq-footer forge-card">
    <h2 style="margin-top: 0;">Still have questions?</h2>
    <p>
      I’m always happy to help — whether it’s digital security, tech guidance,
      or something that didn’t make it onto this page.
    </p>
    <p style="margin-top: 0.75rem;">
      <a class="forge-btn" href="{{ links.pages.contact | relative_url }}">Contact M.R. TechForge</a>
    </p>
  </section>

</section>
