<script lang="ts" setup>
</script>

<template>
  <header
    class="border-primary-600 from-primary-900 to-primary-700 sticky top-0 z-40 flex h-16 border-b bg-gradient-to-r text-gray-200"
  >
    <UContainer class="flex flex-1 items-center">
      <DefaultLogo />
      <nav class="hidden flex-1 items-center justify-center px-4 md:flex">
      <!-- <Menu /> -->
      </nav>
      <div class="flex items-center md:flex-initial">
        <DefaultDarkToggleSwipe />
        <!-- <DefaultDarkToggle /> -->
        <NuxtLink to="https://github.com/baikov/tpl-traefik" class="ml-4">
          <UIcon name="i-mdi-github" class="h-8 w-8" />
        </NuxtLink>
      </div>
    </UContainer>
  </header>
</template>
