# HANDOFF — Tækkemand Carlsen B-version

**Sidst opdateret:** 2026-05-19 12:49

## Hurtig genstart (paste til ny session)

> Fortsæt arbejde på Tækkemand Carlsen B-version (https://taekkemand-carlsen.vercel.app/b/) i `/Users/madsellegard/Projects/taekkemand-carlsen`. Læs `HANDOFF.md` for kontekst. Tjek `src/pages/b.astro` for sektion-rækkefølge.

---

## Status

- **Repo:** `/Users/madsellegard/Projects/taekkemand-carlsen`
- **Live (A — gammel V5):** https://taekkemand-carlsen.vercel.app/
- **B-version (sandkasse):** https://taekkemand-carlsen.vercel.app/b/
- **A-versionen bevares uændret indtil B er klar til at blive promoted til `/`**
- **SEO-mål:** Ranke på "Tækkemand Nordsjælland"

## Designsprog

Editorial heritage:
- **Accent:** `#a04f1b` (terracotta)
- **Background:** `#f4ede2` (cream)
- **Body text:** `#51443a` (rust-brun)
- **Headlines:** `#1a1310` (deep brown-black)
- **Headlines:** italic serif med italic emphasis
- **Body:** sans-serif
- **Cards:** `border-radius: 10px` (ikke 16px, ikke 0)
- **CSS-prefix på alle B-komponenter:** `b-`

## Komponent-struktur (B)

`src/pages/b.astro` importerer fra `src/components/b/*` (uafhængig kopi af V5).

Rækkefølge på `/b/`:

1. **HeroB** — 2-col editorial: tekst venstre + clean rektangulært billede højre (4:5)
   - H1: "Lokal tækkemand i Nordsjælland — smukt og holdbart håndværk"
   - Proof: ★★★★★ 4.9/5 · 50+ kunder på Nordsjælland
   - CTA: "Få et tilbud" + tekst-link "Eller ring 24 24 80 80"
2. **SocialProofB** — Lys cream band med ikoner i runde brune cirkler
   - 15+ år · 90 dage · 12 mio. kr · Nordsjælland
3. **ServicesB** — 6 services i 3-kol grid med beige (`#faf3e7`) text-blok, store billeder
   - SEO-titler: "Nyt stråtag Nordsjælland", "Reparation af stråtag", "Algebehandling Nordsjælland"
   - Plus mønning, vedligeholdelse, skadedyr
   - Extras-strip nederst: Rensning af tagrender, Vinduespolering, Solceller
4. **WhyChooseB** — Copy + ✓-liste venstre, foto + anmeldelse + stats højre
   - H1: "Tækkemand i Nordsjælland du kan stole på"
   - 4 punkter: Tækkelaugets "Veludført Stråtag" / Materialer i bedste kvalitet / Klar kommunikation / Hurtig udførsel
   - Anmeldelse + 90 dage + 12mio stats
5. **ProcessB** — 4 trin i lodret timeline: Forespørgsel → Besigtigelse → Tilbud → Vi går i gang
6. **GuaranteesB** — Magasin-layout: 1 stor mørk hero-card (12 mio. forsikring) + 3 mindre stats
7. **GalleryB** — Portfolio-billeder, hover-captions
8. **TestimonialsB** — 6 anmeldelser i 2x3 symmetrisk grid med italic citat-titler
   - Google-badge (5,0) øverst til højre
9. **PricingB** — Nyt stråtag, Renovering (388 kr/m² FEATURED), matrix, Vedligeholdelse (79/89 kr/m²)
10. **InfoB** — "Renovering eller nyt stråtag?" + "Hvorfor algebehandling?"
    - Cream baggrund, terracotta border-left
11. **FaqB** — Incl. skråfoto.dk, priser, vedligehold, tillid
12. **CtaBandB**
13. **ContactB**
14. **FooterB** — Med Facebook + Instagram ikoner (https://www.instagram.com/...)

## Kritiske fakta

- **Telefonnummer:** 24 24 80 80 (var 89 88 34 53 og 89 88 34 55 — alle fixed)
- **CVR:** 44410976
- **Adresse:** Nørretorv 30, 4100 Ringsted
- **Service-område:** Nordsjælland (Hillerød, Gilleleje, Frederiksværk, Tisvildeleje, Hundested)
- **Forsikring:** Alm. Brand, 12 mio. kr.
- **Garanti:** 90 dage (nyt stråtag), 8 uger (mønning)
- **Process:** Prisoverslag online → skråfoto.dk-tjek hvis stort nok (IKKE gratis taginspektion automatisk)
- **Kvalitetsstandard:** Tækkelaugets "Veludført Stråtag"
- **Materialer:** vandrør, halm, lyng, kobber

## Åbne items / potentielle næste skridt

- `/b/` er ikke promotet til `/` endnu (A er stadig live)
- Mads har ikke besluttet om "rygning" skal være standalone-service i Services-grid (samlet i "Mønning & rygning" nu, men servicesidens "Mønning og rygning" som separat)
- Gallery captions vises kun ved hover — alternative: altid synlige
- "Se hele porteføljen"-knap i Gallery er ikke wired op
- A-versionen kunne have global meta-tekst (Layout.astro er allerede global)
- Service-detalje-sider (`src/pages/tagdaekning/`) er ikke gennemgået for B-version

## Man må IKKE

- Ændre på Process-rækkefølgen (har det reverteret én gang)
- Bruge "postkort-stil" (polaroid + tape + №-numre) — Mads kaldte det "for postkort-agtigt"
- Tilføje "gratis taginspektion" — de gør det ikke automatisk
- Bare proppe FAQ med info-paragraffer
- Dobbelt-trust-info flere steder end nødvendigt (fjernet fra WhyChoose tidligere fordi det var redundant)

## Konventioner

- **Memory:** `/Users/madsellegard/.claude/projects/-Users-madsellegard-Projects-brain/memory/`
- **Telefonopkald i kode:** `tel:+4524248080`
- **Display-format:** `24 24 80 80`
- **CSS-prefix:** `b-` på alle B-komponenter
- **Border-radius:** `10px` på cards

## Vigtige filer

- `src/pages/b.astro` — B-version side (relateret med V5)
- `src/pages/index.astro` — A (live) side
- `src/layouts/Layout.astro` — Globale meta (Nordsjælland-optimeret)
- `src/components/b/*` — B-version komponenter
- `src/components/v5/*` — A (live) komponenter (rør ikke)
- `src/data/services.ts` — 18 services (begge versioner bruger nu)

## Fortsæt med

Næste sektion at se på er sandsynligvis **ContactB** — kontaktformular. Det gamle PHP-script har "Arbejdsområder?" + "Tidsramme?"-spørgsmål.
