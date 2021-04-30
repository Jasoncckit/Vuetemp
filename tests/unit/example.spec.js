import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'
import { createLocalVue, mount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders props.source when passed', () => {
    const source = 'Foobar'
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { source }
    })
    expect(wrapper.find('.fill-height').text()).toBe(source)
  })
})
