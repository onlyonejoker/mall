<template>
  <div id="fashion">
    <p>本周推荐</p>
    <div v-for="(item,index) in dataItem" :key="index" class="fashionItem">
      <a :href="item.link">
        <div><img :src="item.image" alt="img"></div>
        <p>{{item.words}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "fashion",
  props: { keywordsItem: Array },
  data() {
    return {
      dataItem: null,
    };
  },
  watch: {
    keywordsItem(newdata) {
      this.dataItem = newdata;
    },
  },
};
</script>

<style scoped>
  #fashion {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    border-top: 20px solid rgb(184, 179, 179, 0.3);
    border-bottom: 20px solid rgb(184, 179, 179, 0.3);
  }
  #fashion > p {
    width: 100%;
    font-size: 20px;
    text-align: center;
    padding: 20px 0;
  }
  .fashionItem {
    width: 25%;
    height: 70px;
  }
  img {
    width: 69px;
    height: 69px;
    vertical-align: middle;
    margin-bottom: 10px;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }
</style>