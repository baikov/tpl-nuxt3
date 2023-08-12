<template>
  <section class="text-base-color">
    <div class="container max-w-7xl px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs tracking-widest font-medium mb-1">
          READY FOR QUICK START
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium mb-4 text-primary-400">
          Preconfigured Nuxt 3 with TailwindCSS
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Production-ready template ready to use as part of fullstack project.
        </p>
      </div>
      <div class="flex flex-wrap -m-4 justify-around">
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full ">
          <h2 class="font-medium tracking-widest mb-4 text-sm text-center sm:text-left text-primary-400">
            MODULES
          </h2>
          <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://tailwindcss.com/docs/installation"
                target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                TailwindCSS
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://color-mode.nuxtjs.org/" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                @nuxtjs/color-mode
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://vueuse.org/guide/" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                @vueuse/nuxt
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://github.com/nuxt-modules/icon" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                nuxt-icon
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://v1.image.nuxtjs.org/get-started" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                @nuxt/image-edge
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://google-fonts.nuxtjs.org/" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                @nuxtjs/google-fonts
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink
                to="https://pinia.vuejs.org/" target="_blank"
                class="border-b border-dotted border-primary-500 text-primary-500 hover:text-primary-700 hover:border-primary-700"
              >
                Pinia
              </NuxtLink>
            </div>
          </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
          <h2 class="font-medium tracking-widest mb-4 text-sm text-center sm:text-left text-primary-400">
            DEVELOPMENT
          </h2>
          <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>Full dockerized
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>GitHub dependantbot
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>GitHub CI
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>Default demo components, composables and stores
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>TypeScript with strict mode
            </div>
          </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
          <h2 class="font-medium tracking-widest mb-4 text-sm text-center sm:text-left text-primary-400">
            DOCKER COMPOSE MODES
          </h2>
          <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span><span class="font-bold">Mode 0:</span> As separate dev server on custom port
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span><span class="font-bold">Mode 1:</span> As dev server behind the Traefik with http
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span><span class="font-bold">Mode 2:</span> As dev server behind the Traefik + SSL and custom domain
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span><span class="font-bold">Mode 3:</span> For production as SSR with Node.js
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span><span class="font-bold">Mode 4:</span> For production as SPA with Nginx
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>Just create <span class="text-primary-400">.env</span> from <span class="text-primary-400">.env.example</span> and type <span class="text-primary-400">docker compose up -d</span>
            </div>
          </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
          <h2 class="font-medium tracking-widest mb-4 text-sm text-center sm:text-left text-primary-400">
            PART OF FULLSTACK APP
          </h2>
          <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink to="https://github.com/baikov/drf-tpl">
                Template for Django+DRF REST API backend
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>
              <NuxtLink to="https://github.com/baikov/tpl-traefik">
                Traefik with SSL as reverse-proxy for development and production
              </NuxtLink>
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>Users with registration/autentification API
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>SEO-friendly out of the box
            </div>
            <div>
              <span class="bg-primary-100 text-primary-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Icon name="mdi:check" class="h-3 w-3" />
              </span>and more...
            </div>
          </nav>
        </div>
      </div>
      <div class="flex mx-auto w-full justify-center mt-16">
        <NuxtLink
          to="https://github.com/baikov/tpl-nuxt3#readme"
          class="flex justify-center items-center text-light-200 bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg"
        >
          <Icon name="mdi:file-document" class="h-5 w-5" />
          <span class="pl-2">Documentation</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
