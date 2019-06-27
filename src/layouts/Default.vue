<template>
  <v-app dark class="default">


    <hide-at :breakpoints="breakpoints" breakpoint="small">
      <v-toolbar color="accent" dark fixed app>
        <v-container class="margin_center" fill-height>
          <v-layout align-center>
            <h1 class="logo"><span>彗星</span>ミトコンドリア</h1>
          </v-layout>
          <v-spacer></v-spacer>
          <ul class="desktop_header_nav">
            <li>
              <g-link to="/">
                Top
              </g-link>
            </li>
            <li>
              <g-link to="/biography">
                Biography
              </g-link>
            </li>
            <li>
              <g-link to="/youtube">
                Youtube
              </g-link>
            </li>
            <li>
              <g-link to="/">
                Blog
              </g-link>
            </li>
          </ul>
        </v-container>
      </v-toolbar>
    </hide-at>

    <show-at :breakpoints="breakpoints" breakpoint="small">
      <v-toolbar class="header_nav" color="accent" dark fixed app>
        <v-layout justify-center>
          <h1 class="logo"><span>彗星</span>ミトコンドリア</h1>
        </v-layout>
        <v-toolbar-side-icon class="drawer_btn" @click.stop="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
      </v-toolbar>
    </show-at>

    <show-at :breakpoints="breakpoints" breakpoint="small">
      <transition name="fade">
        <div v-if="drawer.isOpen" class="mobile_header_nav">
          <v-btn small fab flat color="white" @click="drawer.isOpen = false"><v-icon>close</v-icon></v-btn>
          <ul>
            <li>
              <g-link to="/">
                Top
              </g-link>
            </li>
            <li>
              <g-link to="/biography">
                Biography
              </g-link>
            </li>
            <li>
              <g-link to="/youtube">
                Youtube
              </g-link>
            </li>
            <li>
              <g-link to="/">
                Blog
              </g-link>
            </li>
          </ul>
        </div>
      </transition>
    </show-at>

    <vueper-slides
      class="mt-5"
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

    <v-card>
      <footer>
        <v-container>
          <v-layout align-center justify-center>
            <p>Copyright (c)SuiseiMitokondoria CO.,LTD All rights reserved.</p>
          </v-layout>
        </v-container>
      </footer>
    </v-card>
    
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
  mounted(){

  },
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
        isOpen: false,
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
    
  },
  computed: {
    location(){
      return this.$route.path 
    }
  },
  watch: {
    location(value){
      this.drawer.isOpen = false
    }
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: "pigmo";
  src: url("/fonts/Pigmo-01.otf") format("opentype");
}
@font-face {
  font-family: "kaiso";
  src: url("/fonts/Kaiso-Next-B.otf") format("opentype");
}
.default
  background #212121 !important
  // .inner_container
  .logo
    font-family 'kaiso'
    text-align center
    font-size 1.1rem
    line-height 1.2
    span
      font-size 2.5rem
      font-family 'pigmo'
      display block

    img
      width 100%
  .ttl02
    font-family 'pigmo'
    font-size 4rem
    text-align center
    img
      width 20rem
      display inline-block

  
      
  .desktop_header_nav
    display flex
    justify-content flex-end
    width 60rem
    @media screen and (max-width: 1000px)
      width 40rem
    li
      margin-left 4.5rem
      a
        font-size 2.5rem
        font-family 'pigmo'
        text-decoration none
        color rgb(255,255,255)
  .header_nav
    // position relative
    .drawer_btn
      position absolute
      top 3px
      right 14px
  .margin_center
    margin-right auto !important
    margin-left auto !important
  .mobile_header_nav
    position fixed
    z-index 9999
    width 100vw
    height 100vh
    background rgba(0,0,0,.9)
    ul
      display flex
      flex-direction column
      justify-content center

      li
        text-align center
        margin-bottom 3rem
        display table
        a
          display block
          font-family 'pigmo'
          text-decoration none
          color rgb(255,255,255)
          font-size 2.5rem
  footer
    background rgb(0,0,0)
    position fixed
    bottom 0
    width 100%
    p
      text-align center
      font-size 1rem
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
</style>
