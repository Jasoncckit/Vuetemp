import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'
import { createLocalVue, mount } from '@vue/test-utils'

const localVue = createLocalVue()

describe('HelloWorld.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = options => {
    return mount(HelloWorld, {
      localVue,
      vuetify,
      ...options
    })
  }

  it('renders props.source when passed', () => {
    const source = 'Foobar'
    const wrapper = mountFunction({
      propsData: { source }
    })
    expect(wrapper.find('.fill-height').text()).toBe(source)
  })
})
