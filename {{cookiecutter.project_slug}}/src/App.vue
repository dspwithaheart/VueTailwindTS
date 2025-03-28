<script setup lang="ts">
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

import { useLoginStore } from '@/stores/login'

const store = useLoginStore()
</script>

<template>
  <div class="container mx-auto px-4">
    <HomeView v-if="store.loggedin" />
    <LoginView v-else />
  </div>
</template>

<style>
@reference "tailwindcss";

a {
  @apply text-{{cookiecutter.theme_color}}-600 hover:text-{{cookiecutter.theme_color}}-800;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav button:last-of-type {
  border: 0;
}

.routerLinkView {
  @apply border-r-2 basis-1/4 hover:underline text-{{cookiecutter.theme_color}}-500 bg-zinc-200 p-2 text-xs font-bold font-extralight;
}

.routerLinkView.active {
  @apply bg-{{cookiecutter.theme_color}}-700 text-white;
}

.routerLinkTab {
  @apply border-r-2 basis-1/4 hover:underline text-{{cookiecutter.theme_color}}-500;
}

.routerLinkTab.active {
  @apply bg-{{cookiecutter.theme_color}}-50;
}

.a-2-col-box {
  @apply grid grid-cols-[minmax(150px,_1fr)_minmax(250px,_2fr)] gap-4 bg-transparent border border-sky-100 rounded p-8;
}

.a-2-col-box-gray {
  @apply grid grid-cols-[minmax(150px,_1fr)_minmax(250px,_2fr)] gap-4 bg-gray-50 border border-sky-100 rounded px-8 py-3;
}

.a-2-col-box-gray-2 {
  @apply grid grid-cols-[minmax(150px,_1fr)_minmax(250px,_2fr)] gap-4 bg-orange-50/25 border border-sky-100 rounded px-8 py-3;
}

.a-IRR-header {
  /* background-color: #dbebf4; */
  border-color: #c1c3c5;
  border-style: solid;
  border-width: 1px;
  /* color: ;
    font-size:;
    font-weight: ;
    height: ;
    line-height: ;
    padding: 0;
    vertical-align: middle; */
}

.a-IRR-table {
  @apply w-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse;
}

.a-IRR-table td {
  -webkit-padding-start: var(--a-gv-cell-padding-x, 8px);
  -webkit-padding-end: var(--a-gv-cell-padding-x, 8px);
  -webkit-padding-before: var(--a-gv-cell-padding-y, 4px);
  -webkit-padding-after: var(--a-gv-cell-padding-y, 4px);
  border-color: var(--a-gv-cell-border-color, grey);
  border-style: solid;
  border-width: var(--a-gv-cell-border-width, 1px);
  height: var(--a-gv-cell-height, 32px);
  padding-block-end: var(--a-gv-cell-padding-y, 4px);
  padding-block-start: var(--a-gv-cell-padding-y, 4px);
  padding-inline-end: var(--a-gv-cell-padding-x, 8px);
  padding-inline-start: var(--a-gv-cell-padding-x, 8px);
  @apply border align-top;
}

.a-PCF-table {
  @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;
}

.a-PCF-table td {
  border-color: var(--a-gv-cell-border-color, grey);
  border-style: none;
  border-width: var(--a-gv-cell-border-width, 1px);
  height: var(--a-gv-cell-height, 32px);
  padding-block-end: var(--a-gv-cell-padding-y, 4px);
  padding-block-start: var(--a-gv-cell-padding-y, 4px);
  padding-inline-end: var(--a-gv-cell-padding-x, 8px);
  padding-inline-start: var(--a-gv-cell-padding-x, 8px);
  @apply border align-top;
}

.disabled {
  @apply bg-slate-300;
}

.loginInputFeield {
  @apply block w-full border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-{{cookiecutter.theme_color}}-600 sm:text-sm sm:leading-6;
}

.inputField {
  @apply border justify-self-stretch text-black px-1;
}

.inputFieldReadOnly {
  @apply w-full border justify-self-stretch text-black px-1 bg-gray-100;
}

.number {
  @apply min-w-20 px-1 text-{{cookiecutter.theme_color}}-900;
}

.inputFieldTable {
  @apply min-w-20 px-1 text-{{cookiecutter.theme_color}}-900 border justify-self-stretch text-black my-4;
}

.loadFileButton {
  @apply text-white text-xs whitespace-nowrap;
}

.patternButton {
  @apply bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm my-2;
}

.closeButton {
  @apply bg-slate-200 hover:bg-gray-300 text-black py-1 px-2 absolute top-1 right-1;
}

.closeButtonEdit {
  @apply w-full bg-slate-200 hover:bg-gray-300 text-black py-1 px-2 text-xs rounded-e-sm font-extralight;
}

.addButton {
  @apply bg-slate-200 hover:bg-gray-300 text-black py-1 px-2 absolute top-1 left-1;
}

.addButtonEdit {
  @apply bg-slate-200 hover:bg-gray-300 text-black py-1 px-2 top-1 left-1;
}
.debug {
  @apply bg-red-500 hidden;
}

.processing {
  @apply h-5 w-5 mx-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4;
}

.processingDark {
  @apply h-5 w-5 mx-5 border-t-transparent border-solid animate-spin rounded-full border-{{cookiecutter.theme_color}}-600 border-4;
}
</style>
