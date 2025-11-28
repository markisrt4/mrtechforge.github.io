---
title: Contact
layout: default
permalink: /contact.html
class: contact
---

<div class="forge-contact-page">

  <div class="page-intro">
    <h1>
      Signal Beacon:
      <span class="forge-highlight">Contact M.R. TechForge</span>
    </h1>
    <p class="tagline">
      Forged connections start with a simple “hello.”
    </p>
  </div>

  <!-- DISPLAY MODES (one global set) -->
  <section class="forge-terminal-modes">
    <h2 class="modes-heading">Display Modes</h2>
    <div class="modes-buttons">
      <button class="terminal-mode-btn is-active" data-mode="scanline">
        Scanline
      </button>
      <button class="terminal-mode-btn" data-mode="grid">
        Grid
      </button>
      <button class="terminal-mode-btn" data-mode="radar">
        Radar
      </button>
      <button class="terminal-mode-btn" data-mode="clean">
        Clean
      </button>
    </div>
  </section>

  <!-- TERMINAL: HANDSHAKE -->
  <section class="forge-terminal-panel crt-scanline" data-terminal>
    <div class="forge-terminal-screen">
      <code>
&gt; INITIALIZING CONNECTION...
&gt; STATUS: 🔵  ACTIVE
&gt; IDENTITY VERIFIED: M.R. TECHFORGE
&gt; AWAITING USER INPUT...
      </code>
    </div>
  </section>

  <!-- CARD: OPEN A CHANNEL -->
  <section class="forge-card">
    <h2>Open a Channel</h2>
    <p>
      We like things straightforward — no forms, no robots.
      Just send a message, and you’ll reach a real person who actually reads it.
    </p>

    <ul class="contact-list">
      <li>📧 <strong>Email:</strong> <a href="mailto:mark@mrtechforge.com">mark@mrtechforge.com</a></li>
      <li>🐙 <strong>GitHub:</strong> <a href="https://github.com/markisrt4" target="_blank" rel="noopener">github.com/markisrt4</a></li>
      <li>▶️ <strong>YouTube:</strong> <a href="https://youtube.com/@mrtechforge" target="_blank" rel="noopener">youtube.com/@mrtechforge</a></li>
      <li>📘 <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61582641067637" target="_blank" rel="noopener">facebook.com/@mrtechforge</a></li>
    </ul>

    <blockquote>
      “Every connection is an opportunity to build, teach, or secure something that matters.”
    </blockquote>
  </section>

  <!-- CARD: SUGGESTED EMAIL TEMPLATE -->
  <section class="forge-card">
    <h2>Suggested Email Template</h2>
    <p>
      If you’re not sure what to say, here’s a quick format you can copy and adjust.
    </p>

    <button id="copy-template" class="btn-glow">Copy Template</button>
  </section>

  <!-- TERMINAL: EMAIL TEMPLATE BODY -->
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
  <section class="forge-terminal-panel crt-radar" data-terminal>
    <div class="forge-terminal-screen">
      <code>
&gt; SIGNAL RECEIVED.
&gt; CONNECTION SECURE.
&gt; TRANSMISSION STANDING BY...
      </code>
    </div>
  </section>

  <!-- LOCATION / MICHIGAN BLUEPRINT PANEL -->
  <section class="forge-location-card">
    <h2>Proudly Serving Southeast Michigan</h2>

    <div class="forge-location-map">
      <svg viewBox="0 0 260 260" aria-hidden="true">
        <!-- Blueprint grid background is handled by CSS; this is just outlines -->

        <!-- Lower Peninsula (simple but recognisable “mitten”) -->
        <path
          class="mi-outline"
          d="
            M 145 70
            C 130 65, 120 65, 108 72
            C 96 78, 88 90, 84 106
            C 80 122, 82 140, 88 158
            C 94 176, 104 190, 118 200
            C 132 210, 150 214, 166 210
            C 182 206, 194 196, 202 182
            C 210 168, 214 150, 212 134
            C 210 118, 202 104, 192 94
            C 182 84, 168 74, 145 70
            Z" />

        <!-- Upper Peninsula (faint, off to the NW) -->
        <path
          class="mi-outline mi-up"
          d="
            M 70 60
            C 90 50, 115 48, 135 52
            C 145 54, 152 58, 158 64
            C 152 66, 146 68, 138 70
            C 124 74, 104 78, 88 78
            C 80 78, 74 76, 70 72
            Z" />

        <!-- Metro Detroit / Macomb dot -->
        <circle class="mi-pulse-dot" cx="190" cy="168" r="5" />
      </svg>
    </div>

    <p class="forge-location-text">
      Based in northern Macomb County — proudly serving Southeast Michigan and the broader Metro Detroit area with practical, relationship-focused tech support and integrity.
    </p>
  </section>

</div>