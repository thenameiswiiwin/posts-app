import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import Home from '@pages/home/index.vue'
import Timeline from '@components/TimelineComponent.vue'

describe('Home', () => {
  it('find Timeline component', () => {
    const wrapper = mount(Home)

    expect(wrapper.findComponent(Timeline).exists()).toBe(true)
  })
})
