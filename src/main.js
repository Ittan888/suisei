// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import {showAt, hideAt} from 'vue-breakpoints'

import 'reset-css/reset.css'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '~/assets/app.styl'
import '~/assets/variables.styl'
import '~/assets/common.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })

  Vue.use(Vuetify, {
    iconfont: 'fa',
    theme: {
      primary: colors.grey.darken4,
      accent: colors.shades.black,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  })

  Vue.component('Layout', DefaultLayout)
  Vue.component('show-at', showAt)
  Vue.component('hide-at', hideAt)

}
