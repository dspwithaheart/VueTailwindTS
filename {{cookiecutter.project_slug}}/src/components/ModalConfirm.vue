<script setup lang="ts">
import { ref } from 'vue'

const open = ref(true)
const ret = ref(false)

defineExpose({
  open,
  ret
})

function _ok() {
  ret.value = true
  open.value = false
}

function _cancel() {
  ret.value = false
  open.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="w-full">
        <div class="flex flex-col p-5 rounded-lg shadow-2xl">
          <div class="flex flex-col items-center text-center">
            <div class="inline-block p-4 bg-amber-50 rounded-full">
              <svg
                class="w-12 h-12 fill-current text-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
                />
              </svg>
            </div>

            <p class="modalText">
              <slot />
            </p>
          </div>

          <div class="flex items-left mt-3 md:w-1/3 mx-auto">
            <button
              @click="_ok"
              class="flex-1 px-4 py-2 ml-2 bg-{{cookiecutter.theme_color}}-500 hover:bg-{{cookiecutter.theme_color}}-600 text-white text-sm font-medium rounded-md"
            >
              OK
            </button>

            <button
              @click="_cancel"
              class="flex-1 px-4 py-2 ml-2 bg-slate-500 hover:bg-slate-600 text-white text-sm font-medium rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@reference "tailwindcss";
.modal {
  transform: translate(-50%, -50%);
  @apply fixed top-1/3 left-1/2 w-1/2 overflow-auto
  bg-white gap-4 border border-slate-100 rounded-md drop-shadow-2xl border-spacing-2;
}
.modalText {
  @apply mt-2 text-pretty text-sm text-gray-600 leading-relaxed whitespace-pre-wrap text-left bg-white brightness-99 border-white  drop-shadow-xs rounded-xs p-1;
}
</style>
