<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t bg-dark-900 text-light-200 dark:border-dark-50/[0.2] lg:border-dark-900/10"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-4 sm:flex-row lg:px-8"
    >
      <div class="flex flex-col items-center sm:items-start">
        <span class="text-md font-bold">Nuxt 3 Template</span>
        <span>Frontend starterpack © {{ year }}</span>
      </div>
      <div class="flex flex-col items-center gap-2 sm:float-right sm:flex-row">
        <NuxtLink to="https://baikov.dev" class="text-sm font-bold">
          baikov<span class="text-red-500 dark:text-light-200 font-bold">.dev</span>
        </NuxtLink>
        <span class="block rounded bg-primary-500 dark:bg-light-200 dark:text-dark-900 px-1 py-0.5 text-xs text-light-200">
          v1.1.0
        </span>
      </div>
    </div>
  </footer>
</template>
