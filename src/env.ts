import process from 'node:process'
import dotenv from 'dotenv'
import type { SponsorhubConfig } from './types'

function getDeprecatedEnv(name: string, replacement: string) {
   const value = process.env[name]
   if (value)
      console.warn(`[sponsorhub] env.${name} is deprecated, use env.${replacement} instead`)
   return value
}

export function loadEnv(): Partial<SponsorhubConfig> {
   dotenv.config()

   const config: Partial<SponsorhubConfig> = {
      github: {
         login: process.env.SPONSORHUB_GITHUB_LOGIN || process.env.GITHUB_LOGIN || getDeprecatedEnv('SPONSORHUB_LOGIN', 'SPONSORHUB_GITHUB_LOGIN'),
         token: process.env.SPONSORHUB_GITHUB_TOKEN || process.env.GITHUB_TOKEN || getDeprecatedEnv('SPONSORHUB_TOKEN', 'SPONSORHUB_GITHUB_TOKEN'),
         type: process.env.SPONSORHUB_GITHUB_TYPE || process.env.GITHUB_TYPE,
      },
      patreon: {
         token: process.env.SPONSORHUB_PATREON_TOKEN || process.env.PATREON_TOKEN,
      },
      opencollective: {
         key: process.env.SPONSORHUB_OPENCOLLECTIVE_KEY || process.env.OPENCOLLECTIVE_KEY,
         id: process.env.SPONSORHUB_OPENCOLLECTIVE_ID || process.env.OPENCOLLECTIVE_ID,
         slug: process.env.SPONSORHUB_OPENCOLLECTIVE_SLUG || process.env.OPENCOLLECTIVE_SLUG,
         githubHandle: process.env.SPONSORHUB_OPENCOLLECTIVE_GH_HANDLE || process.env.OPENCOLLECTIVE_GH_HANDLE,
         type: process.env.SPONSORHUB_OPENCOLLECTIVE_TYPE || process.env.OPENCOLLECTIVE_TYPE,
      },
      outputDir: process.env.SPONSORHUB_DIR,
   }

   // remove undefined keys
   return JSON.parse(JSON.stringify(config))
}
