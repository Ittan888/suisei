<template lang="html">

  <Layout class="biography">
    <h2 class="ttl02 mt-4 mb-3"><img src="/ttl02_03.png" alt=""></h2>

    <v-layout row wrap>
      <v-flex xs6 sm6 md4 lg3 xl2 v-for="(member, memberIndex) in members" :key="memberIndex">
        <v-card class="card" color="#fff">
          <img :src="member.image" alt="">
          <section>
            <h3 class="py-3">
              <span class="txt_prefix">{{member.part}}</span>
              <span class="txt_main">{{member.name}}</span>
              <span class="txt_sufix">{{member.howToRead}}</span>
            </h3>
          </section>
        </v-card>
      </v-flex>
    </v-layout>

  </Layout>

</template>

<script lang="js">
  export default  {
    name: 'biography',
    props: [],
    mounted() {

    },
    data() {
      return {
        members: [
          { image: '/member01.png', part: 'Gt / Vo', name: '游魚', howToRead: 'Yu Gyo' },
          { image: '/member02.png', part: 'Ba.', name: '哲太陽', howToRead: 'Te Sun' },
          { image: '/member03.png', part: 'Dr.', name: '一談', howToRead: 'Ittan' },
          { image: '/member04.png', part: 'Vo / Performance', name: 'あたしよしこ', howToRead: 'Atashi Yoshiko' },
          { image: '/member05.png', part: 'Sax', name: '伊藤 誠', howToRead: 'Ito Makoto' }
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
.biography
  .card
    color rgba(0,0,0,.5)
  h3
    text-align center
    span
      display block
  
</style>
