<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i class="iconfont icon-shouye" slot="item-icon"></i>
      <i class="iconfont icon-cuiban" slot="item-icon-active"></i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i class="iconfont icon-gouwuche" slot="item-icon"></i>
      <i class="iconfont icon-chaosong" slot="item-icon-active"></i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/classify">
      <i class="iconfont icon-icon04" slot="item-icon"></i>
      <i class="iconfont icon-shouye" slot="item-icon-active"></i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i class="iconfont icon-dengluyemianyonghuming" slot="item-icon"></i>
      <i class="iconfont icon-icon04" slot="item-icon-active"></i>
      <div slot="item-text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBarItem from "components/common/tabBar/tabBarItem.vue";
import tabBar from "components/common/tabBar/tabBar.vue";
export default {
  name: "mainTabBar",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style>
</style>