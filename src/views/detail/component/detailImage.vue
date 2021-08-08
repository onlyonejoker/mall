<template>
  <div id="detailInfo" v-if="isLoad">
    <div class="detailInfo">
      <div class="lineLeft"></div>
      <p class="detailInfoText">&nbsp;&nbsp;{{text.detailInfo.desc}}</p>
      <div class="lineRight"></div>
      <p class="lineKey">{{text.detailInfo.detailImage[0].key}}</p>
    </div>
    <div>
      <div v-for="(item,index) in text.detailInfo.detailImage[0].list" :key="index" class="detailInfoimg">
        <img :src="item" alt="img" @load="imgLoad">
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "detailInfo",
  props: { text: Object },
  data() {
    return {
      isLoad: false,
      timer: null,
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
  methods: {
    imgLoad() {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$bus.$emit("sss");
        this.$emit("loadFinish", true);
      }, 500);
    },
  },
};
</script>

<style scoped>
  .detailInfo {
    padding: 0 10px;
  }
  .lineLeft {
    border-bottom: 1px solid black;
    width: 50%;
  }
  .lineLeft::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  .lineRight {
    border-bottom: 1px solid black;
    width: 50%;
    transform: translateX(100%);
    position: relative;
  }
  .lineRight::before {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: black;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .detailInfoText {
    margin: 20px 0;
    line-height: 20px;
  }
  .lineKey {
    font-size: 18px;
    line-height: 26px;
    color: #000;
  }
  .detailInfoimg {
    width: 100%;
  }
  img {
    width: 100%;
  }
</style>