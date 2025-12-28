---
layout: default
title: "About"
permalink: /about/
description: "Meet Mark — the engineer behind M.R. TechForge. Clear, dependable systems, built with care, and explained in plain language."
class: about about-v4
---

{% assign links = site.data.links %}

<section class="about-hero">
  <div class="about-hero__inner">

    <div class="about-hero__text">
      <h1 class="about-title">About M.R. TechForge</h1>

      <p class="about-lead">
        <strong>Hi — I’m Mark.</strong> I’m an engineer who genuinely enjoys building relationships and helping people understand the technology they rely on.
        One of my favorite moments is watching someone hit that <em>“a-ha”</em> point — when a complex technical idea suddenly
        clicks and feels approachable.
      </p>

      <p class="about-lead">
        That ability to translate complicated systems into plain, human language is at the heart of everything I build at
        <strong class="about-brand">M.R. TechForge</strong>.
      </p>

      <div class="about-hero__quick" aria-label="Quick traits">
        <div class="about-pill">
          <span class="about-ico" aria-hidden="true">🤝</span>
          Warm engineering
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

    <!-- Small, subtle motion accent -->
    <div class="about-hero__media about-accent-media" aria-label="About video">
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
      I build systems that are <strong>clear, dependable, and quietly useful</strong>.
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
      The why
    </h2>
    <p>
      I’ve spent years working with software, hardware, and infrastructure — from code and automation to devices operating on real networks
      in real environments.
    </p>

    <p class="about-quote">
      Tools that were powerful, but difficult to trust.
      Solutions that solved one problem while introducing unnecessary complexity.
      Systems that required expertise just to understand what they were doing.
    </p>

    <p>
      M.R. TechForge started as a response to that frustration.
      My goal is always to <strong>reduce cognitive load</strong>, not add to it — to design systems that communicate clearly,
      behave predictably, and respect the people using them.
    </p>
  </div>

  <div class="forge-card about-card">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">🧱</span>
      What I build
    </h2>
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
      I enjoy helping people — technical or not — understand how systems work, how to use them safely,
      and how to make informed decisions online.
    </p>
    <p>
      I’m especially excited about teaching the <strong>next generation of coders</strong>, engineers, and problem-solvers —
      and helping others build good online habits around <strong>privacy</strong>, <strong>security</strong>, and digital responsibility.
    </p>
  </div>

  <div class="forge-card about-card about-card--closing">
    <h2 class="about-h2">
      <span class="about-h2__icon" aria-hidden="true">☕</span>
      A human moment
    </h2>
    <p>
      If you’re here because you value clarity, thoughtful engineering, or working with someone who takes the time to explain things well,
      you’re in the right place.
    </p>

    <div class="about-actions">
      <a class="forge-btn about-btn" href="{{ links.pages.contact | relative_url }}">Reach out</a>
      <a class="forge-btn about-btn about-btn--ghost" href="{{ links.pages.products | relative_url }}">Explore products</a>
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