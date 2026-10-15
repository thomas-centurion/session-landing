---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Landing Session Haus

Scope: single-page landing (`src/App.tsx` and its sections). Visitor mode: **Persuade**. Spanish only, mobile first.

Audience and job: young locals of Pergamino planning a night with friends or a date, mostly on the phone, often from Instagram/WhatsApp. They want menu, prices and today's promo fast, and to feel the place.

Action: see the carta (prices) and today's promo; secondary, order delivery / take away.

Proof on hand: real night photos, the venue's own neon phrases, own-branded beer glass, the full menu with prices (src/data/menu.ts from assets/Menú Session.pdf), real promos (2x1 burgers; Sale Session 19 a 23 hs; days unknown and they change often), hours Wed–Sun from 18 (00 hs Wed/Thu, 4–5 hs other nights), Alem 599 Pergamino, WhatsApp delivery, Instagram @sessionhaus. Never claim a promo runs "hoy".

Chosen direction: **Pared de neón** (user picked the IMPECCABLE'S PICK card; seed 84130335). Approved sketch: `.impeccable/mocks/decision/model-pick.html`. Build path: code-led (no image generation).

Memorable moment: the neon headline switching on, tube by tube, the first time the page loads.

Open decisions: happy hour time window; exact Fri–Sun closing time; whether they brew their own beer; reservations.

## Direction contract

THESIS: The page is the bar's back wall at night. Headlines are amber neon tubes taken from the venue's own signs; the carta is an illuminated board. It refuses the category default of a full-bleed photo with a centred title and a "Ver carta" button.

OWN-WORLD: Warm near-black wood wall (#0F0906 with faint vertical plank lines); neon amber #FA9F3F with bulb glow #FEC67C; logo pink #E9A4A5 as the second neon colour and the brand mark; cream #FFF4EA for all reading text; teal street-night #0B2E36 only inside photos. Neon set as glass tubes in Quicksand 600 uppercase (monoline, round ends), each word its own tube with an unlit glass state and light spilling on the wall; Baloo 2 only for non-neon display (promo titles, menu group titles); condensed sans for menu and prices. Boards have thin lit outlines and dashed price leaders.

STORY: Visitor sees the place is alive tonight, reads today's promo and real prices without hunting, sees the patio full of people like them, and leaves to go or to order.

FIRST VIEWPORT: Desktop: neon "Más amor y más cerveza" huge on the left (about 60% width), "cerveza" in pink neon; on the right a lit board "Hoy en la barra" listing today's promos and price rows; "Ver la carta" (solid amber) and "Pedir delivery" (outlined) under the neon. Logo top left, anchors top right. Mobile: neon stacked full width, board below, both actions visible in the first screen and as a sticky bottom bar.

FORM: Pick card (own top-ranked grounded candidate: the venue's neon signs), not the assigned index; seed key 84130335. Signature interaction: neon switch-on with a short flicker on first load (respects reduced motion); price rows light up on hover/tap. Motion grammar: light turning on, never sliding.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
