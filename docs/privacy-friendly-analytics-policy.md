# UCAISM.org — Privacy-Friendly Analytics Policy Note

UCAISM.org should measure public interest without turning readers into behavioral products. The analytics approach should match the site's mission: research, public education, and individual sovereignty.

## Principles

1. **Measure the site, not the person**
   - Prefer aggregate page views, referrers, geography at country level, device class, and content engagement.

2. **Avoid excessive tracking**
   - Do not use advertising pixels, cross-site retargeting tags, fingerprinting scripts, or behavioral profiling tools.

3. **Use minimal retention**
   - Keep analytics history only as long as needed for editorial and research-platform improvement.

4. **Prefer privacy-friendly defaults**
   - Consider Plausible, Simple Analytics, or GA4 with advertising signals disabled.

5. **Separate analytics from mailing lists**
   - Newsletter subscriptions should use explicit consent and should not be silently merged with browsing analytics.

## Recommended configuration if using GA4

- Disable Google Signals unless needed for a specific reason.
- Disable ad personalization signals.
- Avoid granular user-ID tracking.
- Do not add remarketing tags.

## Recommended configuration if using Plausible

- Use the lightweight script with `defer`.
- Do not enable invasive custom properties.
- Track only high-level goals such as newsletter clicks, PDF downloads, or contact form clicks.

## Website notice

When analytics is activated, add a short privacy notice explaining what is measured and why.
