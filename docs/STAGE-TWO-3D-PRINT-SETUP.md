# Stage Two Testing — 3D Print & Real-World Setup UX

**Goal:** Deliver a printable 3D model of the Stage Two testing setup for home printing, with plastic grate, wood-style covers, and specs for real grass + stones (4 cm).

---

## 1. User experience we’re crafting

| Deliverable | Description | Format |
|-------------|-------------|--------|
| **Plastic grate** | 3D model of the grate (drainage / support surface) | Printable STL (or STEP) for home FDM/resin |
| **Wood-style covers** | 3D model that looks like wood (lid/cover pieces) | Printable STL; can be printed in wood-PLA or painted |
| **Assembly / tray** | Base or tray that holds grate + covers + grass/stones | Optional STL if part of the same “stage” |
| **Real grass + stones** | Spec for adding real materials on top | Spec only: grass type, stone size, **height 4 cm** |

**Outcome:** You can print the grate and covers at home, then add real grass and stones to 4 cm height for a real-life Stage Two testing setup.

---

## 2. 3D models to provide

### 2.1 Plastic grate (main 3D part)

- **Purpose:** Structural/drainage surface (e.g. under grass and stones).
- **Format:** STL (and optionally STEP) for slicing in Cura, PrusaSlicer, etc.
- **Design notes:**
  - Wall thickness ≥ 2 mm for FDM (e.g. 0.4 mm nozzle).
  - Optional: modular tiles so you can scale size to your printer bed.
  - Consider slots or holes so water drains if used with real grass.

### 2.2 Wood-style covers

- **Purpose:** Covers that look like wood (aesthetic / protection).
- **Format:** STL (and optionally STEP).
- **Design notes:**
  - Can be printed in wood-filled PLA for wood look, or standard PLA and painted.
  - Ensure they fit the grate/tray dimensions (document in the same spec or in a README next to the STLs).

### 2.3 Optional: base / tray

- If the “stage” has a base that holds grate + covers + grass/stones, provide as a separate STL so you can print everything in one coherent set.

---

## 3. Real grass + stones (4 cm height)

- **Grass:** Real grass (e.g. sod strip, turf, or seed in a shallow tray). Not 3D printed.
- **Stones:** Real small stones/gravel (e.g. 4–10 mm) for texture and drainage.
- **Height:** **4 cm total** for the layer of grass + stones above the grate (or above the base).
- **Placement:** On top of the plastic grate; covers can sit around or partly over this area as designed.

**Spec summary:**

| Item | Spec |
|------|------|
| Grass + stones layer | **Height: 4 cm** |
| Stones | Small gravel (e.g. 4–10 mm), real |
| Grass | Real (sod / turf / seeded), your choice |

---

## 4. Home print setup — what you need

| Need | Details |
|------|--------|
| **Printer** | FDM (e.g. PLA, PETG, wood-PLA) or resin (for finer detail on covers if desired). |
| **Files** | STL (and optionally STEP) for: (1) plastic grate, (2) wood-style covers, (3) optional base/tray. |
| **Slicer** | Cura, PrusaSlicer, or similar; standard settings for PLA/PETG. |
| **Material** | PLA or PETG for grate; wood-PLA or standard PLA for “wood” covers. |
| **Post-print** | Optional: sand/paint wood-style covers; assemble grate + covers; add real grass + stones to 4 cm. |

---

## 5. Suggested repo/folder structure (for you or your designer)

```
stage-two-3d-print/
├── README.md                 # Print instructions, dimensions, assembly
├── stl/
│   ├── grate.stl             # Plastic grate
│   ├── cover-wood-style.stl # Wood-look cover(s)
│   └── base-tray.stl         # Optional base/tray
├── step/                     # Optional, for editing
│   ├── grate.step
│   ├── cover-wood-style.step
│   └── base-tray.step
└── SPEC.md                   # This spec: grass + stones 4 cm, materials
```

---

## 6. Copy for “what you get” (UX wording)

- **3D printable set:** Plastic grate + wood-style covers (and optional base) as STL files for home printing.
- **Real-world layer:** Spec for adding real grass and stones on top of the grate, **4 cm high**, for a real-life Stage Two testing setup.

If you tell me the exact dimensions (e.g. grate size, cover count, and whether you already have a base design), the next step is to either (1) add a short “dimensions & assembly” section into this doc, or (2) outline the geometry for the grate and wood-style covers so someone can model them in Blender/Fusion 360 and export STL/STEP.
