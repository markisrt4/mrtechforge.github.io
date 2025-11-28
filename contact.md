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
      <span class="intro-label">Signal Beacon:</span>
      <span class="forge-highlight intro-main">Contact M.R. TechForge</span>
    </h1>
    <p class="tagline">
      Forged connections start with a simple “hello.”
    </p>
  </div>

  <!-- DISPLAY MODES (GLOBAL) -->
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

  <!-- CARD: SUGGESTED EMAIL TEMPLATE (BUTTON ONLY) -->
  <section class="forge-card">
    <h2>Suggested Email Template</h2>
    <p>
      If you’re not sure what to say, here’s a quick format you can copy and adjust.
    </p>

    <button id="copy-template" class="btn-glow">Copy Template</button>
  </section>

  <!-- TERMINAL: EMAIL TEMPLATE BODY -->
  <section class="forge-terminal-panel crt-scanline" id="email-template-panel" data-terminal>
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
  <section class="forge-terminal-panel crt-scanline" data-terminal>
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
        <!-- Lower Peninsula (simplified but recognisable mitten) -->
        <path
          class="mi-outline"
          d="
            M 155 55
            C 138 50, 122 52, 110 60
            C 98 68, 90 81, 86 96
            C 82 112, 82 130, 86 147
            C 90 165, 98 180, 112 192
            C 126 205, 145 212, 162 210
            C 179 208, 193 199, 203 186
            C 213 172, 218 155, 217 138
            C 216 121, 209 105, 198 93
            C 188 82, 173 72, 155 67
            Z
          "
        />

        <!-- Upper Peninsula (small, off to NW) -->
        <path
          class="mi-outline mi-up"
          d="
            M 70 65
            C 88 58, 108 56, 128 58
            C 137 59, 146 62, 152 66
            C 144 69, 135 72, 124 74
            C 108 77, 90 79, 78 78
            C 73 78, 70 76, 67 74
            Z
          "
        />

        <!-- Metro Detroit / Macomb-ish pulse dot -->
        <circle class="mi-pulse-dot" cx="190" cy="170" r="5" />
      </svg>
    </div>

    <p class="forge-location-text">
      Based in northern Macomb County — proudly serving Southeast Michigan and the broader Metro Detroit area with practical, relationship-focused tech support and integrity.
    </p>
  </section>

</div>