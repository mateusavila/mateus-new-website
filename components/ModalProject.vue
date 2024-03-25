<script lang="ts" setup>
import type { ProjectsInterface } from '~/types'

const { project } = defineProps<{
  project: ProjectsInterface
}>()
</script>

<template>
  <div class="w-full">
    <h2 class="xl:text-48px mxd:text-32px sm:text-24px color-#333 font-800 m-0">{{
      project.title }}</h2>
    <div class="w-full mt-10px p-10px lh-140p font-300 color-#434343 bg-#fafafa">
      <a :href="project.acf.url"
        target="_blank"
        class="no-underline hover:bdb-1-#cccccc bdb-1-#ffffff color-#565656 transition-.2 font-300"
        rel="noopener noreferrer">website</a>
    </div>
    <div class="w-full p-20-0 lh-140p font-300 color-#434343 content-box"
      v-html="project.content"></div>
  </div>
</template>

<style lang="sass">
  .content-box
    a
      text-decoration: none
      color: #565656
      font-weight: 600
      border-bottom: 1px solid transparent
      &:hover
        border-bottom: 1px solid #565656

</style>