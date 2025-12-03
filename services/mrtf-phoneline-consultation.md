---
layout: default
title: MRTF Phone Line Consultation
permalink: /services/mrtf-phoneline-consultation/
---

# MRTF Line Voice &amp; Messaging Consultation
### A quick way to tell M.R. TechForge what you need.

<div class="forge-form-wrapper">
  <h2>Start Your Consultation</h2>
  <p>Answer a few quick questions and I’ll follow up with a personalized recommendation and quote.</p>

  <form id="forgeline-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
    <!-- Step 1 -->
    <div class="wizard-step" data-step="1">
      <h3>Step 1 · About you</h3>

      <label for="org_type">What best describes you?</label>
      <select id="org_type" name="Organization Type" required>
        <option value="">Select an option…</option>
        <option>Small business</option>
        <option>Church or ministry</option>
        <option>Library</option>
        <option>Non-profit / community org</option>
        <option>Personal / individual</option>
      </select>

      <label for="current_tools">How do you handle calls or messages today? (optional)</label>
      <textarea id="current_tools" name="Current tools" rows="3" placeholder="Examples: personal cell, Google Voice, separate business line, etc."></textarea>

      <button type="button" class="btn-glow wizard-next">Next: What you need</button>
    </div>

    <!-- Step 2 -->
    <div class="wizard-step" data-step="2" style="display:none;">
      <h3>Step 2 · What you’re interested in</h3>

      <label>Which ForgeLine services are you interested in?</label>
      <div class="wizard-checkboxes">
        <label><input type="checkbox" name="Interested in[]" value="Business Line"> Business Line</label>
        <label><input type="checkbox" name="Interested in[]" value="Press-1 Menu"> Press-1 Phone Menu</label>
        <label><input type="checkbox" name="Interested in[]" value="Auto-Reply Text"> Auto-Reply Text Line</label>
        <label><input type="checkbox" name="Interested in[]" value="Church/Ministry Tools"> Church &amp; Ministry Tools</label>
        <label><input type="checkbox" name="Interested in[]" value="Library Tools"> Library Communication Tools</label>
        <label><input type="checkbox" name="Interested in[]" value="Secure 2FA"> Secure 2FA Number</label>
        <label><input type="checkbox" name="Interested in[]" value="Privacy Shield"> Privacy Shield Number</label>
        <label><input type="checkbox" name="Interested in[]" value="Alerts/Notifications"> Alerts &amp; Notifications</label>
      </div>

      <label for="priority">What’s your biggest priority?</label>
      <select id="priority" name="Top priority">
        <option value="">Select an option…</option>
        <option>Protect my personal number</option>
        <option>Make it easier for people to reach us</option>
        <option>Reduce staff time on the phone</option>
        <option>Look more professional</option>
        <option>Improve texting and auto-replies</option>
      </select>

      <button type="button" class="btn-glow wizard-prev">Back</button>
      <button type="button" class="btn-glow wizard-next">Next: Contact details</button>
    </div>

    <!-- Step 3 -->
    <div class="wizard-step" data-step="3" style="display:none;">
      <h3>Step 3 · Contact details</h3>

      <label for="name">Your name</label>
      <input type="text" id="name" name="Name" required>

      <label for="email">Email address</label>
      <input type="email" id="email" name="Email" required>

      <label for="phone">Phone number (optional)</label>
      <input type="text" id="phone" name="Phone">

      <label for="message">Anything else I should know?</label>
      <textarea id="message" name="Notes" rows="4" placeholder="Examples: timeline, budget, existing numbers you want to keep, etc."></textarea>

      <button type="button" class="btn-glow wizard-prev">Back</button>
      <button type="submit" class="btn-glow">Submit consultation request</button>
    </div>
  </form>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const steps = Array.from(document.querySelectorAll('.wizard-step'));
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? 'block' : 'none';
    });
    currentStep = index;
  }

  document.querySelectorAll('.wizard-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
      }
    });
  });

  document.querySelectorAll('.wizard-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    });
  });

  showStep(0);
});
</script>