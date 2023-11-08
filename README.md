# SponsorHub

[![NPM version](https://img.shields.io/npm/v/sponsorhub?color=a1b858&label=)](https://www.npmjs.com/package/sponsorhub)

Toolkit for generating sponsors images. Supports **GitHub Sponsors**, **Patreon**, **OpenCollective** and **Afdian**.

## Usage

Create `.env` file with:

```ini
; GitHub provider.
; Token requires the `read:user` and `read:org` scopes.
SPONSORHUB_GITHUB_TOKEN=
SPONSORHUB_GITHUB_LOGIN=

; Patreon provider.
; Create v2 API key at https://www.patreon.com/portal/registration/register-clients
; and use the "Creator’s Access Token".
SPONSORHUB_PATREON_TOKEN=

; OpenCollective provider.
; Create an API key at https://opencollective.com/applications
SPONSORHUB_OPENCOLLECTIVE_KEY=
; and provide the ID, slug or GitHub handle of your account.
SPONSORHUB_OPENCOLLECTIVE_ID=
; or
SPONSORHUB_OPENCOLLECTIVE_SLUG=
; or
SPONSORHUB_OPENCOLLECTIVE_GH_HANDLE=
; If it is a personal account, set it to `person`. Otherwise not set or set to `collective`
SPONSORHUB_OPENCOLLECTIVE_TYPE=

; Afdian provider.
; Get user_id at https://afdian.net/dashboard/dev
SPONSORHUB_AFDIAN_USER_ID=
; Create token at https://afdian.net/dashboard/dev
SPONSORHUB_AFDIAN_TOKEN=
```

> Only one provider is required to be configured.

Run:

```base
npx SPONSORHUB
```

[Example Setup](./example/) | [GitHub Actions Setup](https://github.com/nyxb/static/blob/master/.github/workflows/scheduler.yml) | [Generated SVG](https://cdn.jsdelivr.net/gh/nyxb/static/sponsors.svg)

## Configurations

Create `sponsorhub.config.js` file with:

```ts
import { defineConfig, presets } from 'SPONSORHUB'

export default defineConfig({
   // Providers configs
   github: {
      login: 'nyxb',
      type: 'user',
   },
   opencollective: {
      // ...
   },
   patreon: {
      // ...
   },
   afdian: {
      // ...
   },

   // Rendering configs
   width: 800,
   formats: ['json', 'svg', 'png'],
   tiers: [
      // Past sponsors, currently only supports GitHub
      {
         title: 'Past Sponsors',
         monthlyDollars: -1,
         preset: presets.xs,
      },
      // Default tier
      {
         title: 'Backers',
         preset: presets.base,
      },
      {
         title: 'Sponsors',
         monthlyDollars: 10,
         preset: presets.medium,
      },
      {
         title: 'Silver Sponsors',
         monthlyDollars: 50,
         preset: presets.large,
      },
      {
         title: 'Gold Sponsors',
         monthlyDollars: 100,
         preset: presets.xl,
      },
   ],
})
```

Also check [the example](./example/).

## Utils

You can also use SponsorHub programmatically:

```ts
import { fetchSponsors } from 'sponsorhub'

const sponsors = await fetchSponsors(token, login)
```

Check the type definition or source code for more utils available.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/nyxb/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/nyxb/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023 [Dennis Ollhoff aka nyxb](https://nyxb.nexus)
