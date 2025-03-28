
import { defineStore } from 'pinia'


export const use{{cookiecutter.project_slug.capitalize()}}Store = defineStore('{{cookiecutter.project_slug}}', () => {


  function initStore() {
    console.debug('Init {{cookiecutter.project_slug}} Store')
  }



  return {

    initStore

  }
})
