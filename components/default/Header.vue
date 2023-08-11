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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" /></svg>
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
