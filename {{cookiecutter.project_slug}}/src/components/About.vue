<script setup lang="ts">

</script>

<template>
  <div class="greetings">
    <h1 class="green">About</h1>
    <h3> This is a project template for Vue 3 with Vite, Tailwind CSS, and TypeScript. </h3>
      <hr>

      <ul>
       <li>Comes with default Login component, has a default session timeout of 1 hour. </li>
       <li>Contains default pinia store for state management.</li>
      <li>Component Unit test with Vitest</li>
      <li>E2E test with Playwright</li>
       <li>Custom alert and confirm dialog components.</li>
       <li>Sample GraphQL setup.</li>
      </ul>
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a> +
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a> +
      <a href="https://pinia.esm.dev/" target="_blank" rel="noopener">Pinia</a> +
      <a href="https://www.graphql.com/" target="_blank" rel="noopener">GraphQL </a> +
      <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a> +
      <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>

      <div class="grid grid-rows-2 grid-flow-col gap-4 justify-center items-center w-96  ">
        <a href="https://vite.dev/" target="_blank" rel="noopener"> <img src="https://vite.dev/logo.svg" alt="Vite Logo" /></a> 
        <a href="https://vuejs.org/" target="_blank" rel="noopener"> <img src="https://vuejs.org/logo.svg" alt="Vue Logo" /></a> 
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener"> <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" alt="Tailwind Logo" /> </a> 
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener"> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="TypeScript Logo" /></a> 
        <a href="https://pinia.esm.dev/" target="_blank" rel="noopener"> <img src="https://pinia.esm.dev/logo.svg" alt="Pinia Logo" /> </a> 
        <a href="https://www.graphql.com/" target="_blank" rel="noopener"> <img src="https://graphql.org/_next/static/media/logo.ad338028.svg" alt="GraphQL Logo" /> </a> 
        <a href="https://vitest.dev/" target="_blank" rel="noopener"> <img src="https://vitest.dev/logo.svg" alt="Vitest Logo" /> </a> 
        <a href="https://playwright.dev/" target="_blank" rel="noopener"> <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" /> </a>
      </div>


  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
