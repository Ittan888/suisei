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
              <g-link to="/">
                <img src="/ttl02_01.png" alt="">
              </g-link>
            </li>
            <li>
              <g-link to="/">
                <img src="/ttl02_03.png" alt="">
              </g-link>
            </li>
            <li>
              <g-link to="/youtube">
                <img src="/ttl02_04.png" alt="">
              </g-link>
            </li>
            <li>
              <g-link to="/">
                <img src="/ttl02_05.png" alt="">
              </g-link>
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

    <vueper-slides
      fade
      slide-content-outside="top"
      slide-content-outside-class="max-widthed"
      :touchable="true"
      :slide-ratio="0.35"
      :arrows="false"
      :bullets="false"
      :autoplay="true"
      :speed="7000"
      :transitionSpeed="3000"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :contnt="slide.content"
        >
        </vueper-slide>
    </vueper-slides>
    
    <v-content style="padding: 0;">
      <v-container grid-list-xl>
        <slot />
      </v-container>
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
      slides:[
        { image: '/header_main01.jpg', content: '' },
        { image: '/header_main02.jpg', content: '' },
        { image: '/header_main03.jpg', content: '' },
        { image: '/header_main04.jpg', content: '' },
        { image: '/header_main05.jpg', content: '' }
      ],
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
  // .inner_container
  .logo
    width 75px
    height 52px
    img
      width 100%
  .ttl02
    text-align center
    img
      width 20rem
      display inline-block

  
      
  .desktop_header_nav
    display flex
    width 60rem
    @media screen and (max-width: 1000px)
      width 40rem
    li
      margin-left 4.5rem
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
