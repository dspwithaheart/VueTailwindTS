<script setup lang="ts">
import {{cookiecutter.project_slug.capitalize()}}View from '@/views/{{cookiecutter.project_slug.capitalize()}}View.vue'

import { useLoginStore } from '@/stores/login'
import { asyncConfirm } from '@/lib/Init'

const loginStore = useLoginStore()

setInterval(loginStore.calculateSessionTimeout, 10000)

const _logout = async () => {
  if (await asyncConfirm('Are you sure you want to log out?')) loginStore.loggedin = false
}
</script>

<template>
  <div class="mb-6 h-1 w-full bg-transparent dark:bg-neutral-600">
    <div
      class="h-px bg-{{cookiecutter.theme_color}}-500 animate-pulse"
      :style="{
        width: loginStore.sessionTimeoutProgress,
        transition: `width ${loginStore.sessionTimeoutProgress}ms ease-in-out`
      }"
    ></div>
  </div>
  <div class="relative container mx-auto">
    <h1>{{cookiecutter.project_slug.upper()}}</h1>
    <button
      @click="_logout"
      class="absolute top-1 right-0 bg-orange-900 hover:bg-orange-700 text-white text-xs font-bold p-2 rounded-xs"
    >
      Log Out
    </button>

    <{{cookiecutter.project_slug.capitalize()}}View />
  </div>
</template>