import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'

import { createPinia, setActivePinia } from 'pinia'

import HomeView from '@/views/HomeView.vue'
import LoginComponent from '@/components/LoginComponent.vue'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('renders properly', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('{{cookiecutter.project_slug.upper()}}')
  })
})

describe('LoginComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(LoginComponent)
    console.debug(wrapper.text())
    expect(wrapper.text()).toContain('Log in')
  })
})

