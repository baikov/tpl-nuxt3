<script lang="ts" setup>
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <DefaultHeader />
    <div class="flex w-full flex-1 flex-col">
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>
