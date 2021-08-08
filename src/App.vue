<template>
  <div id="app">
    <keep-alive exclude="detail,cart">
      <router-view></router-view>
    </keep-alive>

    <!-- <img :src="img" alt=""> -->
  </div>
</template>

<script>
//import aaa from "assets/img/logo.png";
export default {
  name: "app",
  components: {},
  data() {
    return {
      //img: aaa,
    };
  },
};
</script>

<style scopen>
  #app {
    position: relative;
  }
  @import url(assets/css/base.css);
  @import url(assets/fonts/iconfont.css);
</style>
