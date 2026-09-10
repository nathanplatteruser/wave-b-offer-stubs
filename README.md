# Wave B offer stubs

Static multi-route GitHub Pages site — offer-stub depth only (not full MRR products).

**Clock fail bar:** ≥6/10 stubs with HTML sample depth (landing + sample + intro CTA + kill line + not-legal-advice / not-SoR-replacement).

**Demo Playbook bar (this PR):** hub + BIND + every depth-YES route. Seven items on each bar. Presentation-complete for Zoom / booth — not full SaaS.

## File tree

```
wave-b-stubs/
  index.html              # hub + status pills + playbook
  assets/ink.css          # shared paper/ink + playbook / desk
  assets/desk.js          # refuse / empty / thin / PDF blotter
  bind/index.html         # FIRST / most complete
  premises/index.html
  form-8867/index.html    # 8867 (folder can't start with digit)
  ridge/index.html
  record/index.html
  kennel/index.html
  wake/index.html
  bond/index.html
  sill/index.html
  service/index.html
  README.md
  .nojekyll
```

## Depth bar

| # | Code | Path | Public CTA | Meets depth? | Playbook? |
|---|------|------|------------|--------------|-----------|
| 1 | BIND | `bind/` | Book intro / mailto | **YES** (priority / richest sample) | **YES** |
| 2 | PREMISES | `premises/` | Book intro / mailto | **YES** | **YES** |
| 3 | 8867 | `form-8867/` | Book intro / mailto | **YES** | **YES** |
| 4 | RIDGE | `ridge/` | Book intro / mailto | **YES** | **YES** |
| 5 | RECORD | `record/` | Book intro / mailto | **YES** | **YES** |
| 6 | KENNEL | `kennel/` | Book intro / mailto | **YES** | **YES** |
| 7 | WAKE | `wake/` | Book intro / mailto | **YES** | **YES** |
| 8 | BOND | `bond/` | Book intro / mailto | **YES** | **YES** |
| 9 | SILL | `sill/` | Book intro / mailto | **YES** | **YES** |
| 10 | SERVICE | `service/` | Book intro / mailto + magnet link | **YES** (link-out + local refuse desk) | **YES** |

**Score: 10/10 full depth** (fail bar ≥6). Demo Playbook closed on hub + all listed routes.

## Demo Playbook (mandatory bar)

On hub + BIND + every depth route:

1. **What it is**
2. **What it does**
3. **Compare** — honest vs/alongside category tools; never claim SoR replacement (SoftPro / AppFolio / Clio / PowerSchool / Epic / Drake / Spectora / etc.)
4. **ROI** — soft framing after intro (labeled hour assumptions, not public list prices, not kill claims)
5. **Demo** — breakable blotter: empty / thin / PDF → **REFUSE**; sample → gap rows. Presentation-complete, not full SaaS. SERVICE keeps the full sample on the live magnet.
6. **Suite / dual-mode** — module beside SettleUp **or** standalone; [Book intro](https://calendly.com/nathanplatter) or mailto
7. **Rails** — not legal advice · kill lines · human owns send

## Rails

- Public CTA → [Book intro](https://calendly.com/nathanplatter) or mailto `nathanplatter@gmail.com` (subject codes). No public SaaS/magnet list prices until after intro (P0 2026-09-10). Magnet / sibling Stripe **HOLD**. No `buy.stripe.com` CTAs.
- Paper/ink. Phone-friendly. Not neon SaaS.
- COMMON frozen. No Wave C. No LLC/entity admin.
- Every page: not legal advice · kill line · human owns send · non-goals / not-SoR-replacement.
- Do not invent counsel-blessed PDFs.

## Live URLs (Pages, after merge)

| Surface | URL |
|---------|-----|
| Hub | https://nathanplatteruser.github.io/wave-b-offer-stubs/ |
| BIND | https://nathanplatteruser.github.io/wave-b-offer-stubs/bind/ |
| BIND demo | https://nathanplatteruser.github.io/wave-b-offer-stubs/bind/#demo |
| BIND break empty | https://nathanplatteruser.github.io/wave-b-offer-stubs/bind/?break=empty#demo |
| BIND break PDF | https://nathanplatteruser.github.io/wave-b-offer-stubs/bind/?break=pdf#demo |
| PREMISES | https://nathanplatteruser.github.io/wave-b-offer-stubs/premises/ |
| 8867 | https://nathanplatteruser.github.io/wave-b-offer-stubs/form-8867/ |
| RIDGE | https://nathanplatteruser.github.io/wave-b-offer-stubs/ridge/ |
| RECORD | https://nathanplatteruser.github.io/wave-b-offer-stubs/record/ |
| KENNEL | https://nathanplatteruser.github.io/wave-b-offer-stubs/kennel/ |
| WAKE | https://nathanplatteruser.github.io/wave-b-offer-stubs/wake/ |
| BOND | https://nathanplatteruser.github.io/wave-b-offer-stubs/bond/ |
| SILL | https://nathanplatteruser.github.io/wave-b-offer-stubs/sill/ |
| SERVICE | https://nathanplatteruser.github.io/wave-b-offer-stubs/service/ |
| SERVICE magnet (link-out) | https://nathanplatteruser.github.io/service-packs-magnet/ |
| Book intro | https://calendly.com/nathanplatter |
| Email | mailto:nathanplatter@gmail.com |

## Verify notes

Local: `python3 -m http.server 8765` then open `/`, `/bind/#demo`, break empty / thin / PDF, load sample, upload a `.txt` and a `.pdf` (PDF must REFUSE). Repeat on premises / form-8867 / ridge / record / kennel / wake / bond / sill / service.

Booth walk (BIND first): playbook bar → What / Does / Compare → Demo (sample + one refuse) → Suite (Book intro vs mailto) → intro CTA + labeled ROI → kill + not legal advice.

## BIND URL path

Site-relative: **`bind/`** (or `bind/index.html`)  
When published under Pages root: **`{Pages-root}/bind/`**

## Publish

Prefer PR; Eng can merge to `main` (Pages already public).
