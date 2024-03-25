<script setup lang="ts">
import type { ResponseWP, ProjectsInterface } from '~/types'

useHead({
  title: 'Mateus Ávila - Front-end Developer',
})
useSeoMeta({
  title: 'Mateus Ávila - Front-end Developer',
  ogTitle: 'Mateus Ávila - Front-end Developer',
  description: 'Hello World! I\'m Mateus Ávila, a dedicated front-end developer with expertise in Vue.js, TypeScript, and WordPress. Let\'s craft exceptional digital experiences together!',
  ogDescription: 'Hello World! I\'m Mateus Ávila, a dedicated front-end developer with expertise in Vue.js, TypeScript, and WordPress. Let\'s craft exceptional digital experiences together!',
  ogImage: 'https://wp.mateusavila.com.br/wp-content/uploads/2023/09/share-site.jpg',
  twitterCard: 'summary_large_image',
})

const projectsCrud = useCrud()
const project = ref<ProjectsInterface>()
const { openModal, closeModal } = useModal()

const { data, pending } = await projectsCrud.getData<ResponseWP>({
  url: '/api/home?lang=en'
})

const openProject = (p: ProjectsInterface) => {
  project.value = p
  setTimeout(() => openModal('modal'), 200)
}
</script>

<template>
  <div class="w-full">
    <Navigation />
    <main>
      <Hero />
      <Projects :pending="pending"
        :projects="data?.data.projects"
        @action="openProject" />
    </main>
    <Modal id="modal"
      @close="closeModal('modal')"
      v-if="project">
      <ModalProject :project="project" />
    </Modal>
    <Skills />
  </div>
</template>
