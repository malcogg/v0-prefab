# Open Graph artwork (`/public/og`)

Dynamic share cards are generated at **`/api/og`** (see `app/api/og/route.tsx` and `lib/og.ts`).

## Optional full-bleed backdrop

Drop a single horizontal image here (export from Figma at **1200×630** or larger with the same aspect ratio):

- **Preferred filename:** `og-backdrop.jpg`  
- Also detected: `og-backdrop.jpeg`, `og-backdrop.png`, `og-backdrop.webp`

When present, the generator:

- Fills the card with your image (`object-fit: cover`)
- Applies a **dark gradient overlay** so **white type** stays readable
- Keeps the **top accent bar** (variant color) and the **footer strip** (site tagline + `PREFABRICATED.CO`)

If no backdrop file is found, the card falls back to the **light gradient** layout (dark text) so production never breaks.

### Design tips

- Keep important detail out of the **bottom ~90px** (footer + platform chrome).
- Slightly darker or textured regions on the **left third** help the title block pop.
- Avoid tiny text baked into the image; all headlines are rendered as live text.

## Legacy static OG filenames (optional)

Per-page **fully static** 1200×630 JPGs are optional, e.g. `homepage.jpg`, `faq.jpg`.  
The recommended path is one **`og-backdrop`** plus dynamic titles from each page’s metadata.
