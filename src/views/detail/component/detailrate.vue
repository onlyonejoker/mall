<template>
  <div id="detailrate" v-if="isLoad">
    <p id="rateTitle">
      <span>用户评价</span>
      <span>更多</span>
    </p>
    <div>
      <div v-for="(item,index) in text.rate" :key="index">
        <div id="rateUser">
          <img :src="item.user.avatar" alt="userimg">
          <span>{{item.user.uname}}</span>
        </div>
        <div id="rate">{{item.content}}</div>
        <div id="rateInfo">
          <span></span>
          <span>{{item.style}}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "detailrate",
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
  #detailrate {
    padding: 0 20px;
    margin: 20px 0;
  }
  #detailrate > div {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }
  #rateTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #000;
  }
  #rateUser span {
    font-size: 20px;
    color: #000;
    line-height: 50px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px 50px;
    margin-right: 20px;
  }
  #rate {
    font-size: 16px;
    line-height: 20px;
    margin: 10px 0;
  }
</style>