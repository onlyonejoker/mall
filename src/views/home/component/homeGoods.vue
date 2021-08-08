<template>
  <goods-list>
    <goods-item v-for="(item, index) in data" :key="index" :goodsData="item"></goods-item>
  </goods-list>
</template>

<script>
import goodsItem from "components/content/goods/goodsItem.vue";
import goodsList from "components/content/goods/goodsList.vue";

export default {
  name: "homeGoods",
  components: {
    goodsList,
    goodsItem,
  },
  props: { res: Object },
  data() {
    return {
      data: null,
    };
  },
  watch: {
    res(n) {
      this.data = n.list;
    },
  },
  mounted() {
    this.data = this.res.list;
  },
};
</script>

<style scoped>
</style>