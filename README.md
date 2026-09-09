# Wave B offer stubs

Static multi-route GitHub Pages site — offer-stub depth only (not full MRR products).

**Clock fail bar:** ≥6/10 stubs with HTML sample depth (landing + sample + price + kill line + not-legal-advice / not-SoR-replacement).

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

| # | Code | Path | Price | Meets depth? | Playbook? |
|---|------|------|-------|--------------|-----------|
| 1 | BIND | `bind/` | $79–249/mo seat · toothpick $29–79 | **YES** (priority / richest sample) | **YES** |
| 2 | PREMISES | `premises/` | $19 | **YES** | **YES** |
| 3 | 8867 | `form-8867/` | $149–297 | **YES** | **YES** |
| 4 | RIDGE | `ridge/` | $29 | **YES** | **YES** |
| 5 | RECORD | `record/` | Trial · $25–75/job | **YES** | **YES** |
| 6 | KENNEL | `kennel/` | $19–49 / annual ask | **YES** | **YES** |
| 7 | WAKE | `wake/` | $39 | **YES** | **YES** |
| 8 | BOND | `bond/` | Module/OEM sketch | **YES** | **YES** |
| 9 | SILL | `sill/` | $12–35/mo ask | **YES** | **YES** |
| 10 | SERVICE | `service/` | Monthly niche $1–2k + link | **YES** (link-out + local refuse desk) | **YES** |

**Score: 10/10 full depth** (fail bar ≥6). Demo Playbook closed on hub + all listed routes.

## Demo Playbook (mandatory bar)

On hub + BIND + every depth route:

1. **What it is**
2. **What it does**
3. **Compare** — honest vs/alongside category tools; never claim SoR replacement (SoftPro / AppFolio / Clio / PowerSchool / Epic / Drake / Spectora / etc.)
4. **ROI** — soft framing on every price (labeled assumptions, not kill claims)
5. **Demo** — breakable blotter: empty / thin / PDF → **REFUSE**; sample → gap rows. Presentation-complete, not full SaaS. SERVICE keeps the full sample on the live magnet.
6. **Suite / dual-mode** — module beside SettleUp **or** standalone; Pilot [live $499](https://buy.stripe.com/dRm00j0GG53F8dVfO17Vm03) where relevant
7. **Rails** — not legal advice · kill lines · human owns send

## Rails

- Mailto → `nathanplatter@gmail.com` (subject codes). Magnet / sibling Stripe **HOLD**. Live Stripe is Pilot only.
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
| Pilot (live Stripe only) | https://buy.stripe.com/dRm00j0GG53F8dVfO17Vm03 |

## Verify notes

Local: `python3 -m http.server 8765` then open `/`, `/bind/#demo`, break empty / thin / PDF, load sample, upload a `.txt` and a `.pdf` (PDF must REFUSE). Repeat on premises / form-8867 / ridge / record / kennel / wake / bond / sill / service.

Booth walk (BIND first): playbook bar → What / Does / Compare → Demo (sample + one refuse) → Suite (Pilot vs mailto) → price + labeled ROI → kill + not legal advice.

## BIND URL path

Site-relative: **`bind/`** (or `bind/index.html`)  
When published under Pages root: **`{Pages-root}/bind/`**

## Publish

Prefer PR; Eng can merge to `main` (Pages already public).
