<template>
  <v-app dark class="default">


    <hide-at :breakpoints="breakpoints" breakpoint="small">
      <v-toolbar color="accent" dark fixed app>
        <v-container class="margin_center" fill-height>
          <v-layout align-center>
            <h1 class="logo"><img src="/siteid.png" alt=""></h1>
          </v-layout>
          <v-spacer></v-spacer>
          <ul class="desktop_header_nav">
            <li>
              <nuxt-link to="/">
                <img src="/ttl02_05.png" alt="">
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <img src="/ttl02_03.png" alt="">
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <img src="/ttl02_02.png" alt="">
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <img src="/ttl02_06.png" alt="">
              </nuxt-link>
            </li>
          </ul>
        </v-container>
      </v-toolbar>
    </hide-at>

    <show-at :breakpoints="breakpoints" breakpoint="small">
      <v-toolbar class="header_nav" color="accent" dark fixed app>
        <v-layout justify-center>
          <h1 class="logo"><img src="/siteid.png" alt=""></h1>
        </v-layout>
        <v-toolbar-side-icon class="drawer_btn" @click.stop="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
      </v-toolbar>
    </show-at>
    
    <v-content style="padding: 0;">
      <slot />
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      breakpoints: {
        small: 768,
        medium: Infinity,
        large: Infinity
      },
      clipped: false,
      fixed: false,
      drawer: {
        isOpen: true,
        items: [
          {
            icon: "create",
            title: "ダッシュボード",
            exact: true,
            to: "/"
          },
          {
            icon: "create",
            title: "seed",
            exact: true,
            to: "/seeds"
          }
        ]
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    }
  },
  methods: {
    
  }
};
</script>

<style lang="stylus">
.default
  background #212121 !important
  .logo
    width 75px
    height 52px
    img
      width 100%
  .desktop_header_nav
    display flex
    li
      margin-left 4rem
  .header_nav
    position relative
    .drawer_btn
      position absolute
      top 3px
      right 14px
  .margin_center
    margin-right auto !important
    margin-left auto !important
</style>
