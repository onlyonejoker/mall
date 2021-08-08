<template>
  <div>
    <top-bar class="topbar">
      <div slot="center" class="topbarCenter">
        购物车({{this.$store.state.addShopCar.length}})
      </div>
    </top-bar>

    <scroll class="scroll" ref="scroll">
      <shop />
    </scroll>

    <collect />
    <tab-bar />
  </div>
</template>

<script>
import tabBar from "components/content/mainTabBar.vue";
import topBar from "../../components/common/topBar/topBar.vue";
import scroll from "../../components/common/scroll/scroll.vue";

import shop from "./components/carItem.vue";
import collect from "./components/collect.vue";
export default {
  name: "cart",
  components: {
    tabBar,
    topBar,
    scroll,
    shop,
    collect,
  },
  activated() {
    this.$bus.$emit("sss");
  },
};
</script>

<style scoped>
  .topbar {
    background-color: #ff5777;
  }
  .topbarCenter {
    color: #fff;
  }
  .scroll {
    height: calc(100vh - 133px);
    overflow: hidden;
  }
</style>