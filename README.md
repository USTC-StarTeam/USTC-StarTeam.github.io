# USTC Star-Team Organization Homepage

This repository contains the static GitHub Pages site for the USTC Star-Team organization.

The site integrates public information from the USTC faculty page of Prof. Hao Wang and the public repositories under the USTC-StarTeam GitHub organization. It is designed as an organization introduction page covering research directions, representative成果, publications, funded projects, open-source repositories, awards, teaching, academic service, and recruitment information.

## Local Preview

```bash
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

## Validation

```bash
node --test tests/smoke.test.mjs
node --check script.js
```

## Deployment

For the organization GitHub Pages site, publish this repository as `USTC-StarTeam/USTC-StarTeam.github.io` and serve from the `main` branch root.
