<template lang="html">

  <Layout class="youtube">
    <h2 class="ttl02 mt-5 mb-4"><img src="/ttl02_04.png" alt=""></h2>
    <v-layout wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="(movie, movieIndex) in movies" :key="movieIndex">
        <v-card class="card" color="#fff">
          <section>
            <h3 class="pa-3">{{movie.title}}</h3>
            <div class="card_inner pa-2">
              <iframe :src="movie.url" frameborder="0"></iframe>
            </div>
          </section>
        </v-card>
      </v-flex>
    </v-layout>
  </Layout>

</template>

<script lang="js">
  export default  {
    name: 'youtube',
    props: [],
    mounted() {

    },
    data() {
      return {
        movies: [
          { title: 'マリアの涙@京都夜想 1', url: 'https://www.youtube.com/embed/AlEARnMlDlw' },
          { title: 'マリアの涙@京都夜想 2', url: 'https://www.youtube.com/embed/jHlXD07-7ZI' },
          { title: '宇宙高速@梅田ハードレイン', url: 'https://www.youtube.com/embed/BuD2EJk1W3w' },
          { title: '蝶の夢@梅田ハードレイン', url: 'https://www.youtube.com/embed/aPhw54jLXhU' }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="stylus">
.youtube
  iframe
    width 100%
    height 40rem
    @media screen and (max-width 768px)
      height 20rem
  h3
    border-bottom 1px solid rgba(0,0,0,.5)
  .card
    color rgba(0,0,0,.5)
</style>
