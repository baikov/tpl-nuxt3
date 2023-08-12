<script setup lang="ts">
const color = useColorMode()
const isDark = useState('isDark', () => color.value === 'dark')
function toggleDark() {
  color.preference = isDark.value ? 'dark' : 'light'
}
watch(isDark, () => {
  toggleDark()
})
onMounted(() => {
  isDark.value = localStorage.getItem('nuxt-color-mode') === 'dark'
})
</script>

<template>
  <HeadlessSwitch
    v-model="isDark"
    class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
    :class="[isDark ? 'bg-dark-800' : 'bg-light-200']"
  >
    <ClientOnly>
      <template v-if="color.value">
        <span
          class="pointer-events-none relative inline-block h-5 w-5 rounded-full bg-primary-500 shadow transform ring-0 transition ease-in-out duration-200"
          :class="[isDark ? 'translate-x-5' : 'translate-x-0']"
        >
          <span
            class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            :class="[isDark ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200']"
            aria-hidden="true"
          >
            <Icon name="ph:sun-fill" class="h-4 w-4 text-light-200" />
          </span>
          <span
            class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            :class="[isDark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100']"
            aria-hidden="true"
          >
            <Icon name="ph:moon-fill" class="h-4 w-4 text-light-200" />
          </span>
        </span>
      </template>
      <template #fallback>
        <span
          class="pointer-events-none relative inline-block h-5 w-5 rounded-full bg-primary-500 shadow transform ring-0 transition ease-in-out duration-200 translate-x-2.5"
        >
          <span
            class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            aria-hidden="true"
          >
            <Icon name="tabler:sun-moon" class="h-4 w-4 text-light-200" />
          </span>
        </span>
      </template>
    </ClientOnly>
  </HeadlessSwitch>
</template>
