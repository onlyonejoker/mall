<template>
  <div id="goodsItem" @click="linkDetails">
    <div id="goodsItemImg"><img :src="goodsData.show.img" alt="img" @load="imgLoad"></div>
    <div id="goodsItemText">
      <p>{{goodsData.title}}</p>
      <p>
        <span id="goodsItemPrice">{{goodsData.price}}</span>
        <span>☆{{goodsData.sale}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsItem",
  props: { goodsData: Object },
  data() {
    return {};
  },
  watch: {
    goodsData(n) {
      console.log(n);
      this.$bus.$emit("sss");
    },
  },
  methods: {
    imgLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("sss"); //发射事件到事件总线，因为事件总线式一个vue实例，所以也具有vue的一切特征，包括发射事件
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("sss"); //发射事件到事件总线，因为事件总线式一个vue实例，所以也具有vue的一切特征，包括发射事件
      }
    },
    linkDetails() {
      this.$router.replace({
        path: "/detail",
        query: { iid: this.goodsData.iid },
      });
    },
  },
};
</script>

<style csoped>
  #goodsItem {
    width: 45%;
    /* height: 300px; */
  }
  #goodsItemImg {
    width: 100%;
    height: 80%;
  }
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  #goodsItemText {
    height: 14%;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
  #goodsItemText p:nth-child(1) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 10px;
  }
  #goodsItemText p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #goodsItemPrice {
    color: var(--color-high-text);
  }
  a {
    display: block;
  }
  p span {
    padding: 0 5px;
  }
</style>