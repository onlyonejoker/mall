<template>
  <goods-list>
    <goods-item v-for="(item, index) in data" :key="index" :goodsData="item"></goods-item>
  </goods-list>
</template>

<script>
import { getRecommend } from "../../../request/homeRequest";

import goodsItem from "components/content/goods/goodsItem.vue";
import goodsList from "components/content/goods/goodsList.vue";

export default {
  name: "detailrec",
  components: {
    goodsList,
    goodsItem,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    install() {
      getRecommend().then((res) => {
        res.data.list.forEach((e) => {
          this.data.push({
            show: {
              img: e.image,
            },
            title: e.title,
            price: e.discountPrice,
            sale: e.itemSale,
            iid: e.item_id,
          });
        });
      });
    },
  },
  created() {
    this.install();
  },
  mounted() {},
};
</script>

<style scoped>
</style>