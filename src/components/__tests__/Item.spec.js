import Item from '../Item.vue'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.url)
  })
})
