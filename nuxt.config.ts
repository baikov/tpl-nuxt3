// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    server: {
      hmr: {
        protocol: process.env.COMPOSE_FILE === 'local.yml' || process.env.COMPOSE_FILE === 'local.traefik.yml' ? 'ws' : 'wss',
      }
    }
  }
})
