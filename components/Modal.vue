<script lang="ts" setup>
const { id } = defineProps<{
  id: string
}>()

const emit = defineEmits<{
  close: []
}>()
const close = () => emit('close')
</script>

<template>
  <dialog
    class="modal-2 dialog p-20px bg-#ffffff max-w-800px wc-100-40 border-none rd-6px transition-.2"
    :id="id">
    <button @click="close"
      type="button"
      class="border-none w-32px h-32px absolute top-20px right-20px flex items-center justify-center bg-#fafafa rd-32px text-24px font-100 lh-32px cursor-pointer hover:bg-#f0f0f0 transition-.2">&times;</button>
    <slot />
  </dialog>
</template>

<style lang="sass">
@keyframes showDialog
  from
    opacity: 0
    transform: translateX(100%)
  to
    opacity: 1
    transform: translateX(0%)
@keyframes hideDialog
  to
    opacity: 0
    transform: translateX(100%)
@keyframes showBackdrop
  from
    opacity: 0
  to
    opacity: 1
@keyframes hideBackdrop
  to
    opacity: 0
.dialog[open]
  border: 1px solid rgba(0, 0, 0, 0.3)
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3)
.dialog
  border-radius: 6px
.dialog.right[open]
  border-radius: 0
  animation: showDialog .3s ease-in-out normal
.dialog.right.hide
  animation: hideDialog .3s ease-in-out normal
.dialog::backdrop
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0, 0, 0, .5)
  animation: none
.dialog[open]::backdrop
  animation: showBackdrop .5s ease-in-out normal
.dialog.hide::backdrop
  animation: hideBackdrop .5s ease-in-out normal
</style>