---
title: Contact
layout: default
permalink: /contact.html
class: contact
---

<div class="forge-contact-page">

  <!-- INTRO -->
  <div class="page-intro">
    <h1>
      Signal Beacon:
      <span class="forge-highlight">Contact M.R. TechForge</span>
    </h1>
    <p class="tagline">
      Forged connections start with a simple “hello.”
    </p>
  </div>

  <!-- DISPLAY MODE BUTTONS -->
  <section class="forge-terminal-modes">
    <h2 class="modes-heading">Display Modes</h2>
    <div class="modes-buttons">
      <button class="terminal-mode-btn is-active" data-mode="scanline">Scanline</button>
      <button class="terminal-mode-btn" data-mode="grid">Grid</button>
      <button class="terminal-mode-btn" data-mode="radar">Radar</button>
      <button class="terminal-mode-btn" data-mode="clean">Clean</button>
    </div>
  </section>

  <!-- TERMINAL: HANDSHAKE -->
  <section class="forge-terminal-panel crt-scanline" data-terminal>
    <div class="forge-terminal-screen">
      <code>
> INITIALIZING CONNECTION...
> STATUS: 🔵 ACTIVE
> IDENTITY VERIFIED: M.R. TECHFORGE
> AWAITING USER INPUT...
      </code>
    </div>
  </section>

  <!-- CARD: OPEN A CHANNEL -->
  <section class="forge-card">
    <h2>Open a Channel</h2>
    <p>
      We keep things straightforward — no forms, no robots.
      Just send a message and you'll reach a real person who actually reads it.
    </p>

    <ul class="contact-list">
      <li>📧 <strong>Email:</strong> <a href="mailto:mark@mrtechforge.com">mark@mrtechforge.com</a></li>
      <li>🐙 <strong>GitHub:</strong> <a href="https://github.com/markisrt4" target="_blank">github.com/markisrt4</a></li>
      <li>▶️ <strong>YouTube:</strong> <a href="https://youtube.com/@mrtechforge" target="_blank">youtube.com/@mrtechforge</a></li>
      <li>📘 <strong>Facebook:</strong> <a href="https://facebook.com/profile.php?id=61582641067637" target="_blank">facebook.com/@mrtechforge</a></li>
    </ul>

    <blockquote>
      “Every connection is an opportunity to build, teach, or secure something that matters.”
    </blockquote>
  </section>

  <!-- CARD: TEMPLATE -->
  <section class="forge-card">
    <h2>Suggested Email Template</h2>
    <p>If you're not sure what to say, here's a helpful starter.</p>
    <button id="copy-template" class="btn-glow">Copy Template</button>
  </section>

  <!-- TERMINAL: TEMPLATE BODY -->
  <section class="forge-terminal-panel crt-grid" id="email-template-panel" data-terminal>
    <div class="forge-terminal-screen">
      <code id="email-template-code">
To: mark@mrtechforge.com
Subject: TechForge Inquiry – [Your Topic Here]

Hello Mark,

I came across M.R. TechForge and wanted to reach out about:
→ [briefly describe what you need help with]

My preferred contact method: [email / phone / video chat]
My availability: [weekday evenings / weekends / flexible]

Additional details:
[share any technical context, goals, or setup info here]

Looking forward to connecting,
[Your Name]
      </code>
    </div>
  </section>

  <!-- TERMINAL: OUTRO -->
  <section class="forge-terminal-panel crt-clean" data-terminal>
    <div class="forge-terminal-screen">
      <code>
> SIGNAL RECEIVED.
> CONNECTION SECURE.
> TRANSMISSION STANDING BY...
      </code>
    </div>
  </section>

  <!-- LOCATION / MICHIGAN -->
  <section class="forge-location-card">
    <h2>Proudly Serving Southeast Michigan</h2>

    <div class="forge-location-map">
      <svg viewBox="0 0 300 300" aria-hidden="true">
        <!-- Lower Peninsula (accurate silhouette) -->
        <path class="mi-outline" d="
          M190 50
          C150 45 120 60 105 80
          C92 100 88 130 95 160
          C102 190 125 220 160 235
          C195 250 235 240 255 210
          C275 180 270 140 250 110
          C230 80 210 60 190 50 Z
        " />

        <!-- Upper Peninsula -->
        <path class="mi-outline mi-up" d="
          M60 80
          C90 65 140 60 170 70
          C180 75 190 85 195 95
          C180 98 160 102 140 105
          C120 108 90 108 75 104
          C65 100 58 90 60 80 Z
        " />

        <!-- Metro Detroit pulse -->
        <circle class="mi-pulse-dot" cx="235" cy="190" r="6" />
      </svg>
    </div>

    <p class="forge-location-text">
      Based in northern Macomb County — proudly serving Southeast Michigan
      and the greater Metro Detroit area with practical, relationship-first
      technology support rooted in integrity.
    </p>
  </section>

</div>