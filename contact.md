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
  <section class="forge-terminal crt-scanline" data-terminal>
    <code>
root@mrtechforge:~$ forge connect --handshake

> INITIALIZING CONNECTION...
> STATUS: 🔵  ACTIVE
> IDENTITY VERIFIED: M.R. TECHFORGE
> AWAITING USER INPUT...
    </code>
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
  <section class="forge-terminal crt-grid" data-terminal>
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
  </section>

  <!-- TERMINAL: OUTRO -->
  <section class="forge-terminal crt-radar" data-terminal>
    <code>
root@mrtechforge:~$ forge status --connection

> SIGNAL RECEIVED.
> CONNECTION SECURE.
> TRANSMISSION STANDING BY...
    </code>
  </section>

  <!-- LOCATION / BLUEPRINT COMPASS CARD -->
  <section class="forge-location-card">
    <h2>Proudly Serving Southeast Michigan</h2>

    <div class="forge-location-map">
      <div class="compass-ring">
        <div class="compass-north">N</div>
        <div class="compass-east">E</div>
        <div class="compass-south">S</div>
        <div class="compass-west">W</div>

        <div class="compass-needle"></div>
        <div class="compass-center"></div>

        <div class="region-highlight">
          <span class="region-label">Metro Detroit • SE Michigan</span>
        </div>
      </div>
    </div>

    <p class="forge-location-text">
      Based in northern Macomb County — proudly serving Southeast Michigan and the broader
      Metro Detroit area with practical, relationship-focused tech support and integrity.
    </p>
  </section>

</div>