<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { clearLS } from '@/lib/Init'

const store = useLoginStore()
// User authentication
function login(e: Event) {
  e.preventDefault()

  const emailInput = document.getElementById('email') as HTMLInputElement
  const passwordInput = document.getElementById('password') as HTMLInputElement

  const data = new URLSearchParams({
    username: emailInput.value || '',
    password: passwordInput.value || '',
  })

  fetch('/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        unLock()
      } else {
        alert('Login failed!')
      }
    })
    .catch((error) => {
      console.error('Login Error:', error)
    })
}

function unLock() {
  console.debug('Login successful')
  store.loggedin = true
  clearLS()
}

</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <h1 class="text-3xl font-bold text-center">{{cookiecutter.project_slug.upper()}}</h1>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input id="email" required class="loginInputFeield" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input id="password" type="password" required class="loginInputFeield" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-{{cookiecutter.theme_color}}-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-{{cookiecutter.theme_color}}-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{{cookiecutter.theme_color}}-600"
          >
            Log in
          </button>
        </div>
      </form>

      <input
        type="checkbox"
        id="enableLDAP"
        name="enableLDAP"
        @change="unLock"
        class="absolute -bottom-3 -left-2 hover:bottom-0 hover:left-0 opacity-0 hover:opacity-100"
      />
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
