<template>
  <v-app dark class="default">
    
    <v-toolbar color="accent" dark fixed app>
      <!-- <v-toolbar-title>キャスト予約</v-toolbar-title> -->
      <v-layout align-center>
        <h1 class="logo ml-5"><img src="/siteid.png" alt=""></h1>
      </v-layout>
      <v-spacer></v-spacer>
      <show-at :breakpoints="breakpoints" breakpoint="small">
        <v-toolbar-side-icon @click.stop="drawer.isOpen = !drawer.isOpen"></v-toolbar-side-icon>
      </show-at>
    </v-toolbar>
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <slot />
          </v-flex>
        </v-layout>
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
</style>
