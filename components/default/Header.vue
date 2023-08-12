<script lang="ts" setup>
</script>

<template>
  <header
    class="sticky h-16 flex top-0 z-40 border-b border-primary-600 bg-gradient-to-r from-primary-900 to-primary-700 text-light-200"
  >
    <div class="mx-auto flex items-center flex-1 max-w-7xl px-4">
      <DefaultLogo />
      <nav class="md:flex hidden flex-1 items-center justify-center px-4">
      <!-- <Menu /> -->
      </nav>
      <div class="flex items-center md:flex-initial">
        <NuxtLink to="https://github.com/baikov/tpl-traefik">
          <Icon name="mdi:github" class="h-8 w-8" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style>
.slide-fade-from-left-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-left-enter-from,
.slide-fade-from-left-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}
</style>
