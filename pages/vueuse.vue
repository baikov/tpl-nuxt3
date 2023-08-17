<script setup lang="ts">
import { ref } from 'vue'
import { useDraggable, useClipboard } from '@vueuse/core'
const toast = useToast()

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 140 }
})

const input = ref('')

const { text, isSupported, copy } = useClipboard()
</script>

<template>
  <UContainer class="flex items-center justify-center">
    <div ref="el" :style="style" style="position: fixed" class="bg-primary-600 cursor-move text-gray-200">
      Drag me! I am at <br>{{ x }}, {{ y }}
    </div>
    <div v-if="isSupported">
      <p>
        Current copied: <code>{{ text || 'none' }}</code>
      </p>
      <UInput v-model="input" />
      <UButton label="Copy!" @click="copy(input);toast.add({ title: 'Copied!' })" />
    </div>
    <p v-else>
      Your browser does not support Clipboard API
    </p>
  </UContainer>
</template>
