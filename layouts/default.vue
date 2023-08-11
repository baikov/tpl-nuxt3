<script lang="ts" setup>
</script>

<template>
  <div class="flex min-h-screen flex-col dark:bg-dark-800 dark:text-light-200 antialiased transition-colors duration-300">
    <DefaultHeader />
    <div class="flex w-full flex-1 flex-col">
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>
