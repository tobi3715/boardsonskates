<template>
  <v-carousel 
    hide-delimiters 
    cycle
    :show-arrows="false"
    height="88vh"
    width="100vw"
  >
  <v-carousel-item
    v-for="(item,i) in items"
    :key="i"
    :src="item.src"
    background-size: cover
   ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://kidventure.com/blog/wp-content/uploads/2019/07/action-dawn-leisure-700953.jpg',
          },
          {
            src: 'https://avitaltours.com/los-angeles/wp-content/uploads/sites/2/2016/07/Fun-things-to-do-in-Venice-Beach-skatepark.jpg',
          },
          {
            src: 'https://cdn.wallpapersafari.com/31/94/wKNoYh.jpg',
          },
          {
            src: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?ixlib=rb-1.2.1&w=1000&q=80',
          },
          {
            src: 'https://pixnio.com/free-images/2017/08/30/2017-08-30-07-11-15-1000x667.jpg',
          },
          {
            src: 'https://cdn.hipwallpaper.com/i/30/59/hultOJ.jpg',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
main {
  background-color: #121212;
  background-image: none;
}
</style>