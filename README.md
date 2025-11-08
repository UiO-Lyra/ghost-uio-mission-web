# GHOST Mission – Single Page Landing Site

This repository hosts the public landing site for the **GHOST Mission** (Geospace High‑altitude Observation Satellite Technology) – a volunteer, student‑led atmospheric research initiative at the University of Oslo (Lyra nonprofit initiative).

## Vision
Lyra is a nonprofit of interdisciplinary student innovators who choose hard problems and build, voluntarily. GHOST proves that ambitious space systems and meaningful ionospheric science can be achieved by the next generation through collaboration, rigor, and persistence.

## Sections
Single-page anchored layout:
- Hero – mission essence & call to join
- Mission – purpose and scientific focus
- MUNIR‑3 Payload – platform & instruments
- Launch Campaign – Andøya & timeline
- Team – interdisciplinary structure
- Join – volunteer CTA
- Contact – how to reach us

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS (steel‑blue deep space palette)
- shadcn/ui primitives
- React Query (retained for future dynamic data)

## Development
```powershell
npm install
npm run dev
```
Navigate to: http://localhost:5173

## Docker (optional)
Dev (hot reload):
```powershell
docker compose --profile dev up --build
```
Prod build preview:
```powershell
docker compose --profile prod up --build
```

## Accessibility & Design
- High contrast palette (aiming ≥ WCAG AA)
- Single H1; logical heading hierarchy
- Smooth in‑page anchor scrolling

## Contributing
All work is voluntary. To get involved, email: `lyra@terraspace.no`.

### Potential Future Enhancements
- Intersection-based subtle animations
- Image optimization / responsive sources
- Internationalization (NO / EN)
- Press & media kit section
- Newsletter signup integration

## License
MIT
