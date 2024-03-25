<script setup lang="ts">
const a = 1
const b = ref<number>(2)

defineExpose<{
  a: number
  b: globalThis.Ref<number>
}>({
  a,
  b
})
</script>

<template>
  <div class="w-full">meu componente {{ a }} {{ b }}</div>
</template>