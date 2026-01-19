---
layout: default
title: "About"
permalink: /about/
description: "Meet Mark — the engineer behind M.R. TechForge. Clear, dependable systems, built with care, and explained in plain language."
class: about about-v5
---

{% assign links = site.data.links %}

<section class="about-hero">
  <div class="about-hero-inner">

    <div class="about-hero-text">
      <h1 class="about-title">About M.R. TechForge</h1>

      <p class="about-subtitle">
        Clear, dependable systems — built with care, and explained in plain language.
      </p>

      <div class="about-actions-top">
        <a class="forge-btn forge-btn--ghost about-btn" href="{{ links.pages.contact | relative_url }}">Get in Touch</a>
        <a class="forge-btn forge-btn--primary about-btn about-btn--ghost" href="{{ links.pages.services | relative_url }}">Explore Services</a>
      </div>

      <div class="about-lead-block">
        <p class="about-lead">
          <strong>Hi — I’m Mark.</strong> I’m an engineer who genuinely enjoys building relationships and helping people understand the technology they rely on.
          One of my favorite moments is watching someone hit that <em>“a-ha”</em> point — when a complex technical idea suddenly clicks and feels approachable.
        </p>

        <p class="about-lead">
          That ability to translate complicated systems into plain, human language is at the heart of everything I build at
          <strong class="about-brand">M.R. TechForge</strong>.
        </p>
      </div>

      <div class="about-hero-quick" aria-label="Quick traits">
        <div class="about-pill">
          <span class="about-ico" aria-hidden="true">🤝</span>
          Systems-oriented engineering
        </div>
        <div class="about-pill">
          <span class="about-ico" aria-hidden="true">💬</span>
          Clear communication
        </div>
        <div class="about-pill">
          <span class="about-ico" aria-hidden="true">🛡️</span>
          Security-minded
        </div>
        <div class="about-pill">
          <span class="about-ico" aria-hidden="true">🛠️</span>
          Built to last
        </div>
      </div>
    </div>

    <!-- Right media area (desktop), stacked below on mobile -->
    <div class="about-hero-media" aria-label="About video">
      <div class="about-media-frame">
        <div class="about-video" role="button" tabindex="0" aria-label="Play or pause about video">
          <video
            class="about-video__el"
            src="/assets/video/about_video.mp4"
            playsinline
            muted
            loop
            autoplay
            preload="metadata"
            aria-label="Short video of Mark smiling and holding coffee"
          ></video>

          <div class="about-video__hint" aria-hidden="true">
            <span class="about-video__hintIcon">▶</span>
            <span class="about-video__hintText">Tap to pause</span>
          </div>
        </div>
      </div>

      <p class="about-video__caption">
        A quiet moment between builds. Coffee helps.
      </p>
    </div>

  </div>
</section>

<section class="about-wrap">

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">🧠</span>
      How I think about technology
    </h2>

    <p>
      I build systems that are <strong>clear, dependable, and useful</strong>.
      Not flashy. Not bloated. Just technology that works the way you expect it to — and explains itself along the way.
    </p>

    <p>
      Good engineering doesn’t just solve problems; it builds confidence.
      If a system only makes sense to its creator, it’s unfinished.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">🧭</span>
      The “why”
    </h2>

    <p>
      I’ve spent years working with software, hardware, and infrastructure — from code and automation to devices operating on real networks in real environments.
    </p>

    <p><strong>Along the way, I kept seeing the same pattern:</strong></p>

    <ul class="about-list">
      <li>Tools that were powerful, but difficult to trust.</li>
      <li>Solutions that solved one problem while introducing unnecessary complexity.</li>
      <li>Systems that required expertise just to understand what they were doing.</li>
    </ul>

    <p>
      <strong>M.R. TechForge started as a response to that frustration.</strong>
    </p>

    <p>
      My goal is always to <strong>reduce cognitive load</strong>, not add to it — to design systems that communicate clearly, behave predictably,
      and respect the people using them.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">🧱</span>
      What I build
    </h2>

    <p>
      <strong>M.R. TechForge isn’t an agency or a product factory.</strong><br>
      It’s a small, focused workshop where I build things end-to-end, with clarity and responsibility in mind.
    </p>

    <p><strong>That includes:</strong></p>

    <ul class="about-list">
      <li>Purpose-built software tools</li>
      <li>Secure, privacy-respecting communication systems</li>
      <li>NFC-driven physical + digital interactions</li>
      <li>Self-hosted and locally controlled infrastructure</li>
    </ul>

    <p class="about-muted">
      Everything is built with real people in mind — not just technical requirements.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">🧑‍🏫</span>
      Teaching, learning, and the next generation
    </h2>

    <p>
      Teaching is one of the most rewarding parts of what I do.
    </p>

    <p>
      I enjoy helping people — technical or not — understand how systems work, how to use them safely, and how to make informed decisions online.
      I’m especially excited about the idea of teaching the next generation of coders, engineers, and problem-solvers.
    </p>

    <p>
      Just as important to me is helping others develop good online habits around <strong>privacy</strong>, <strong>security</strong>, and <strong>digital responsibility</strong> —
      because understanding technology also means knowing how to protect yourself while using it.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">📐</span>
      How I work
    </h2>

    <p><strong>A few principles guide almost everything I make:</strong></p>

    <ul class="about-principles">
      <li><strong>Clarity beats cleverness</strong> — understanding builds trust</li>
      <li><strong>Reliability beats novelty</strong> — boring systems last longer</li>
      <li><strong>Simple isn’t shallow</strong> — clarity takes real effort</li>
      <li><strong>Systems should explain themselves</strong> — good design leaves breadcrumbs</li>
    </ul>

    <p class="about-muted">
      If something feels fragile, opaque, or over-engineered, it usually means there’s more thinking to do.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">☕</span>
      A human moment
    </h2>

    <p>
      Some of my best work happens in quiet moments.
    </p>

    <p><strong>While:</strong></p>

    <ul class="about-list">
      <li>Helping someone untangle a technical problem</li>
      <li>Teaching a concept until it finally clicks</li>
      <li>Or standing still for a minute, coffee in hand, thinking through a system from first principles</li>
    </ul>

    <p>
      That space — where understanding forms — is where I feel most at home.
    </p>
  </div>

  <div class="forge-card about-card about-card--closing">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">✅</span>
      Closing
    </h2>

    <p>
      If you’re here because you value clarity, thoughtful engineering, or working with someone who takes the time to explain things well,
      you’re in the right place.
    </p>

    <p>
      And if you’d like to talk, collaborate, or learn together, I’d be glad to connect.
    </p>

    <div class="about-actions">
      <a class="forge-btn forge-btn--ghost about-btn" href="{{ links.pages.contact | relative_url }}">Reach out</a>
      <a class="fforge-btn forge-btn--primary about-btn" href="{{ links.pages.products | relative_url }}">Explore products</a>
    </div>
  </div>

</section>

<script>
  (function () {
    const video = document.querySelector(".about-video__el");
    const hint = document.querySelector(".about-video__hint");
    const container = document.querySelector(".about-video");
    if (!video || !hint || !container) return;

    const hideHint = () => hint.classList.add("is-hidden");
    const showHint = () => hint.classList.remove("is-hidden");

    video.addEventListener("play", hideHint, { once: true });
    video.addEventListener("playing", hideHint, { once: true });

    const toggle = () => {
      if (video.paused) {
        video.play().catch(() => {});
        hideHint();
      } else {
        video.pause();
        showHint();
      }
    };

    container.addEventListener("click", toggle);
    container.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  })();
</script>
