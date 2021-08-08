<template>
  <div id="merchant" v-if="isLoad">
    <div id="merchantName">
      <img :src="text.shopInfo.shopLogo" alt="img" class="log">
      <span>{{text.shopInfo.name}}</span>
    </div>

    <div id="information">
      <div>
        <div>
          <span v-if="text.shopInfo.cFans>10000">{{Math.floor(text.shopInfo.cFans/1000)/10 }}W</span>
          <span v-else>{{text.shopInfo.cFans}}</span>
          <span>关注</span>
        </div>
        <div>
          <span v-if="text.shopInfo.cGoods>10000">{{Math.floor(text.shopInfo.cGoods/100)/100 }}W</span>
          <span v-else>{{text.shopInfo.cGoods}}</span>
          <span>宝贝</span>
        </div>
        <div>
          <span v-if="text.shopInfo.cSells>10000">{{Math.floor(text.shopInfo.cSells/1000)/10 }}W</span>
          <span v-else>{{text.shopInfo.cSells}}</span>
          <span>销量</span>
        </div>
      </div>
      <div>
        <p v-for="(item,index) in text.shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span class="evaluate" :class="{Better:item.isBetter}">{{item.score}}</span>
          <span class="evaluates" :class="{Betters:item.isBetter}" v-if="item.isBetter">高</span>
          <span class="evaluates" :class="{Betters:item.isBetter}" v-else>低</span>
        </p>
      </div>
    </div>

    <div id="linkMerchant"><a :href="text.shopInfo.shopUrl">进店逛逛</a></div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "merchant",
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
  #merchant {
    width: 100%;
    height: 30vh;
    margin: 30px 0;
  }
  .log {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin: 0 20px;
  }
  #merchantName span {
    font-size: 18px;
    font-weight: 700;
    vertical-align: middle;
  }
  #information {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  #information > div {
    width: 50%;
    display: flex;
  }
  #information > div:nth-child(1) {
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
  }
  #information > div:nth-child(1) span {
    display: block;
    line-height: 44px;
    font-size: 16px;
    text-align: center;
  }
  #information > div:nth-child(1) span:nth-child(1) {
    font-size: 18px;
  }
  #information > div:nth-child(2) {
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  }
  #information > div:nth-child(2) p {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .Better {
    color: red !important;
  }
  .Betters {
    background-color: red !important;
  }
  .evaluate {
    color: green;
  }
  .evaluates {
    background-color: green;
    color: #fff;
  }
  #linkMerchant a {
    display: block;
    width: 30%;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    margin: 0 auto;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 30px 30px;
  }
</style>