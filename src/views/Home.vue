<template>
  <v-carousel 
  hide-delimiters 
  cycle
  :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      background-size: contain
      height="auto"
      width="100vw"
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
            src: 'https://i.pinimg.com/originals/32/48/c5/3248c50441c49565f92188a1f18691f4.jpg',
          },
          {
            src: 'https://images.fineartamerica.com/images-medium-large-5/skateboarding-at-venice-beach-mgs.jpg',
          },
          {
            src: 'https://i.pinimg.com/originals/ff/6b/e3/ff6be37e7d6b7b81e072764ce37d0683.jpg',
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
.v-carousel .v-window-item {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>