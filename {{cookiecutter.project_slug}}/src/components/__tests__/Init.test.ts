import { ret } from '@/lib/Init'
import { h, render, type VNode } from 'vue'
import ModalConfirm from '@/components/ModalConfirm.vue'

import { describe, it, expect } from 'vitest'

describe('asyncConfirm ret function', () => {
  it('resolves when confirm dialog is closed and OK button is clicked', async () => {
    const vnode: VNode = h(ModalConfirm, 'test')
    const modalDiv: any = document.createElement('div')
    render(vnode, modalDiv)
    if (vnode.component && vnode.component.exposed) {
      vnode.component.exposed.open.value = false
      vnode.component.exposed.ret.value = true
    }
    const retValue = await ret(vnode)
    expect(retValue).toBe(true)
  })
  it('resolves with the correct value when confirm dialog is closed and Cancel button is clicked is false', async () => {
    const vnode: VNode = h(ModalConfirm, 'test')
    const retValue = await ret(vnode)
    expect(retValue).toBe(false)
  })
})