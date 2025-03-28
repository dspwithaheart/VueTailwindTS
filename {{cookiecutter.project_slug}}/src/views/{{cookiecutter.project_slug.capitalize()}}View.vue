<script setup lang="ts">
import { useLoginStore } from '@/stores/login'

import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'

const tabs: { [key: string]: any } = {
  'Hello World': HelloWorld,
  About: About,
}

const loginStore = useLoginStore()


function setCurrentTab(tab: any) {
  loginStore.currentTab = tab
}
</script>

<template>
  <div class="relative container mx-auto">
    <nav class="flex flex-row bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['routerLinkTab', { active: loginStore.currentTab === tab }]"
        @click="(event) => setCurrentTab(tab)"
      >
        {{ '{{ tab }}' }}
      </button>
    </nav>

    <component :is="tabs[loginStore.currentTab]"></component>

  </div>
</template>
