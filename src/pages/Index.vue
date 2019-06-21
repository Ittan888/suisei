<template>
  <Layout>

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

    
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Hello, world!aaaaaaaaaaaaaaaaaaa</h1>
   
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data(){
    return {
      slides:[
        { image: '/header_main01.jpg', content: '' },
        { image: '/header_main02.jpg', content: '' },
        { image: '/header_main03.jpg', content: '' },
        { image: '/header_main04.jpg', content: '' },
        { image: '/header_main05.jpg', content: '' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.home-links a
  margin-right 1rem
.vueperslide, .vueperslide__image
  background-position 0 0
</style>
