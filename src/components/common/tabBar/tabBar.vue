<template>
  <div id="tabBarBox">
    <slot></slot>
  </div>
</template>

<script>
//import tabBarItem from "./tabBarItem.vue";
export default {
  name: "tabBar",
  components: {
    //tabBarItem
  }
};
</script>

<style scoped>
  #tabBarBox {
    width: 100vw;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6ff;
    display: flex;
  }
</style>

