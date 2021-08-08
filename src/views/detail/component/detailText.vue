<template>
  <div id="detailText" v-if="isLoad">
    <p id="detailDesc">&nbsp;&nbsp;{{text.skuInfo.title}}</p>
    <p id="detailPrice">
      <span>{{text.itemInfo.price}}</span>
      <span>{{text.itemInfo.oldPrice}}</span>
      <span :style="{backgroundColor:text.itemInfo.discountBgColor}" v-if="text.itemInfo.discountDesc">
        {{text.itemInfo.discountDesc}}
      </span>
    </p>
    <p id="detailColumns">
      <span v-for="(item,index) in text.columns" :key="index">{{item}}</span>
    </p>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "detailText",
  props: { text: Object },
  data() {
    return {
      isLoad: false,
    };
  },
  watch: {
    text() {
      this.$nextTick(() => {
        this.isLoad = true;
        this.$bus.$emit("sss");
      });
    },
  },
};
</script>

<style scoped>
  span {
    display: block;
  }
  #detailDesc {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    color: #000;
    margin-top: 20px;
  }
  #detailPrice {
    display: flex;
    margin: 20px 0;
  }
  #detailPrice span:nth-child(1) {
    font-size: 25px;
    font-weight: 700;
    color: #ff5777;
    line-height: 30px;
    margin-right: 10px;
  }
  #detailPrice span:nth-child(2) {
    font-size: 16px;
    text-decoration: line-through;
    line-height: 30px;
    margin-right: 10px;
  }
  #detailPrice span:nth-child(3) {
    font-size: 20px;
    line-height: 30px;
    color: #fff;

    padding: 0 10px;
    border-radius: 30px 30px;
  }
  #detailColumns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
</style>