<template>
  <div id="recommend">
    <div v-for="(item,index) in dataItem" :key="index" class="recommendItem" @click="linkDetails">
      <div><img :src="item.image" alt="img"></div>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: { recommendItem: Array },
  data() {
    return {
      dataItem: null,
      updata: 0,
    };
  },
  watch: {
    recommendItem(newdata) {
      this.dataItem = newdata;
    },
  },
  methods: {
    linkDetails() {
      this.$router.replace("/detail");
    },
  },
  mounted() {},
};
</script>

<style scoped>
  #recommend {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 69px;
    height: 69px;
    vertical-align: middle;
    margin-bottom: 10px;
  }
</style>