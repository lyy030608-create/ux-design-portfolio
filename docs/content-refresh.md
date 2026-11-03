# Portfolio content refresh

Continues the existing React/Vite site from origin/main e7d21a8. No redesign or prototype replacement.

- Message Drift: native research/concept/test cards; V1-only process embed and complete navigation outline checked against the bundled V1 code; distinguishes nonfunctional reading cards and timer-driven demo states from working interaction. V2 screenshots rendered at 390×844 with 2× pixel density from the original local HTML after transitions settled. Original V2 remains unchanged.
- Latest owner clarification: Message Drift competitor research preceded V1. The section now explains concrete references and resulting V1 interaction decisions within the concept step. Karaoke competitor analysis follows updated_competitor_analysis_complete.pdf (Smule, Spotify, Apple Music, Quanmin K Ge).
- Karaoke: supplied cross_device_mockup_lower_screen_brightness PDF rendered as a sharp image; native persona and research content; Pinterest → Figma Design AI → human review/shared component workflow; six watch states from uploaded smartwatch PDFs with device frames; explains private saving versus public queue confirmation. Search and collection management are future extensions, not absent existing save functionality.
- Undergraduate: 10 work groups, five categories, readable descriptions, image zoom and book-page samples. Source imagery comes from newly uploaded repository assets; icons extracted from original PDF embedded images. LIME identified as a group adolescent expression concept; no unsupported efficacy claims.
- Shared SVG arrows, aligned process navigation, home category subtitle and Message Drift entry control.

Validation: npm run build; static Pages route preparation; git diff --check; 390px and 1440px browser checks for five routes; all eight process tabs, six category controls, image decoding, overflow, and lightbox. V2 onboarding tested to choice page. Figma access and full real-world hardware integration are not verified.

Initial refresh deployed in e0cb2bd. Follow-up scope: cover hover/focus consistency, tablet edge clipping, competitor copy and placement, removal of undergraduate icon work. Original prototypes unchanged. Targeted checks passed at 390px and 1440px, including actual mouse-hover transform changes and watch/strap alignment.

## 2026-11-02 — focused copy and flow presentation update

- Simplified competitor headings/copy and V1 flow descriptions; separated optional V1 branches instead of mixing English action names into one long path.
- Replaced the misordered five-image V2 strip with three selectable paths: writing/casting (8 screens), reading/responding (4), and optional Token matching (10). Screens captured from the existing bundled V2 components; original interactive prototype unchanged. Transient states and matching remain prototype demonstrations.
- Added five mid-fidelity watch screens from page 1 of `A2_yili0658.pdf`. Extracted original PDF vector content, omitting report background and annotation arrows, retaining watch shells and UI. No report pages embedded.
- Removed Drift competitor outbound links. WeChat mark: Simple Icons `icons/wechat.svg` (white on brand green). Bottled uses a text wordmark fallback; official site and app stores were inaccessible through the environment network policy, so no unverified pictorial logo was substituted.
- Bounded homepage Drift phone heights to preserve all three screens and existing hover/focus motion.
- Validation: production build; four viewport checks (1440/1024/768/390), cover bounds before/after hover, all V2 presentation paths, mid-fi assets, missing images, horizontal overflow, competitor external-link removal; existing route/prototype release checks.

## 2026-11-03 — Dose of Truth scope and case-study chronology

- Sources: newly supplied `desn9200 - product manual.docx` and one-page `Client Meeting Be Yourself（拖移项目）.pdf` (visually read; page is outlined/image content).
- Scope is health-related social posts/short videos with commercial interests, not supplement advertising alone. The manual proposes platform-native integration as the main delivery route, with a desktop browser extension for pilot testing. Neither is described as already deployed.
- Reordered existing case content: introduction → paper prototype → V1 / 13 prototype tests → survey and interview findings → V2 / client feedback → final V6 presentation. Survey findings remain identified separately from prototype-test findings; placement does not assert the survey occurred after V1.
- Survey: 13 respondents, ages 23–28, 11 female/2 male; 85% trust less after learning of paid partnership, 69% bought on recommendation, one third of those buyers did not independently research, mean trust 2.5/5 (none above 3). Reminder item retains the source's denominator of 12 (8/12), rather than silently changing it to 13.
- Condensed interview findings and changed the home card descriptor to state what the product does. Other projects, assets, and interactive prototypes unchanged.
