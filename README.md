# Monster Gym

A focused strength-training guide built around useful movement search, clear coaching cues and uncomplicated everyday fuel. The redesign preserves the connected exercise experience while giving the site a distinctive dark editorial identity.

## Features

- **Home:** Monster Gym hero, concise brand introduction and paths to training, tips and nutrition.
- **Training:** Starter movements, body-area filters, connected exercise search, detail pages, videos and related exercises.
- **Tips:** Ten concise training and recovery cues.
- **Nutrition:** A balanced-plate guide and simple client-side meal idea helper.
- **About:** The Monster Gym training approach and community story.
- **Navigation and motion:** Existing routes remain available, with the same page-entry transition and reduced-motion support.
- **Footer:** Professional service, nutrition, tips, contact and social-logo groups on Home and About only. Contact email: `info@monster-gym.tn`. The social marks remain unlinked until the gym's actual profile URLs are provided.

## Run locally

```bash
npm ci
npm start
```

The live exercise catalog uses the existing ExerciseDB RapidAPI integration. Add `REACT_APP_RAPID_API_KEY` to a local `.env` file to enable live search. Starter movements and a clear service-unavailable fallback remain available without it.

## Main routes

`/` · `/training` · `/tips` · `/nutrition` · `/about` · `/exercise/:id`
