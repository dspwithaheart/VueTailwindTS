import { h, render, type VNode } from 'vue'
import ModalConfirm from '@/components/ModalConfirm.vue'

import { use{{cookiecutter.project_slug.capitalize()}}Store } from '@/stores/{{cookiecutter.project_slug}}'

export const clearLS = () => {
  const {{cookiecutter.project_slug}}Store = use{{cookiecutter.project_slug.capitalize()}}Store()
  try {
    {{cookiecutter.project_slug}}Store.initStore()
    localStorage.clear()
    window.location.reload()
  } catch (error) {
    console.error(error)
  }
}


export const asyncConfirm = async function (msg = 'Do you want to continue?') {
  const modalDiv: any = document.createElement('div')

  const vnode = h(ModalConfirm, msg)

  if (modalDiv) modalDiv.innerHTML = render(vnode, modalDiv)

  return await ret(vnode)
}

export async function ret(vnode: VNode) {
  return new Promise<boolean>((resolve) => {
    function waitForInput() {
      if (vnode?.component?.exposed?.open?.value) {
        setTimeout(waitForInput, 500) //wait 500 millisecnds then recheck
      } else {
        resolve(Boolean(vnode?.component?.exposed?.ret?.value))
      }
    }
    waitForInput()
  })
}

const prettyJson = (json: JSON) => {
  const jsonString = JSON.stringify(json, null, 2)
    .replace(/[[\]{}"]+/g, '')
    .trim()

  return jsonString
}

export const cleanJson = (object: object) =>
  JSON.parse(JSON.stringify(object, replaceUndefinedOrNullOrEmptyString))
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function replaceUndefinedOrNullOrEmptyString(key: any, value: any) {
  if (value === '' || value === undefined || value === null) {
    return 'NA'
  }

  return value
}

export const cleanNaN = (object: object) => JSON.parse(JSON.stringify(object, replaceNaN))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function replaceNaN(key: any, value: any) {
  if (Number.isNaN(value)) {
    return 'NaN'
  }

  return value
}