import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import NestedRoute from '@components/NestedRoute.vue'
import routes from '@routes/index.ts'
import { describe } from 'vitest'

jest.mock('@components/NestedRoute.vue', async () => ({
  name: 'NestedRoute',
  template: '<div />'
}))

describe('App', () => {
  it('renders a child component via routing', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes
    })
    await router.push('/nestedRoute')
    router.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
  })
})
