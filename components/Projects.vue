<script setup lang="ts">
import type { ProjectsInterface } from '~/types'

defineProps<{
  projects: ProjectsInterface[] | undefined
  pending: boolean
}>()
const emit = defineEmits<{
  action: [project: ProjectsInterface]
}>()

const action = (project: ProjectsInterface) => {
  emit("action", toRaw(project))
}
</script>

<template>
  <div
    class="w-full bg-#fafafa flex items-center content-center sm:pl-50px sm:pr-50px pl-20px pr-20px pb-50px pt-50px flex-wrap">
    <h2 class="font-300 fzr-24 w-full flex items-center gap-10px">Projects</h2>
    <div v-if="pending"
      class="w-full grid lg:grid-cols-4 3xl:grid-cols-6 md:grid-cols-2 gap-10px">
      <div class="pulse w-full pb-120p relative rd-6px"
        v-for="index in 9"
        :key="index"></div>
    </div>

    <div v-if="!pending"
      class="w-full grid lg:grid-cols-4 3xl:grid-cols-6 md:grid-cols-2 gap-10px">
      <div @click="action(project)"
        role="button"
        aria-pressed="false"
        class="w-full h-auto relative overflow-hidden rd-6px block cursor-pointer group"
        v-for="project, index in projects"
        :key="index">
        <picture class="w-full">
          <source :srcset="project.acf.images.image_avif.url"
            type="image/avif" />
          <source :srcset="project.acf.images.image_webp.url"
            type="image/webp" />
          <img :src="project.acf.images.image.url"
            :alt="project.title"
            class="w-full h-full bg-cover rd-6px  group-hover:scale-120 grayscale-100 group-hover:grayscale-0 cubic-transition-.9-43-56-0-100 opacity-20 group-hover:opacity-100" />
        </picture>
        <div
          class="absolute z-10 translate-y-80px bottom-0 left-0 p-10px w-full bg-#000000 rd-b-6px group-hover:translate-y-0 cubic-transition-.9-43-56-0-100">
          <p class="m-0 color-#fff truncate text-14px"
            v-html="project.title"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@keyframes shimmer
  to
    transform: translateX(100%)
.pulse
  overflow: hidden
  background: rgba(198, 221, 136, 0.4)
  &:after
    content: ''
    animation: shimmer 2s infinite
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 100
    height: 100%
    transform: translateX(-100%)
    background: linear-gradient(90deg, rgba(198, 221, 136, 0.2) 0, rgba(198, 221, 136, 0.3) 20%, rgba(198, 221, 136, 0.4) 60%, rgba(198, 221, 136, 0.2))
</style>