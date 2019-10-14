import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import './style.sass'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#e4a',
        secondary: '#424242',
        accent: '#82b1ff',
        error: '#ff5252',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#ffc107'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
