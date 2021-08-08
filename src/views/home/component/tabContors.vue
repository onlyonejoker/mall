<template>
  <div id="tabContors" ref="tabContors">
    <div v-for="(item,index) in dataTitle" :key="index" @click="tabContorsClick(index)" :class="{active:isActive==index}">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "tabContors",
  props: { titles: Array, cut: Number },
  data() {
    return {
      dataTitle: null,
      isActive: 0,
    };
  },
  watch: {
    cut(news) {
      this.isActive = news;
    },
  },
  methods: {
    tabContorsClick(i) {
      //this.isActive = i;
      this.$emit("cutHomeGoods", i);
    },
  },
  mounted() {
    this.dataTitle = this.titles;
  },
};
</script>

<style scoped>
  #tabContors {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 30px;
    padding: 10px 0;
    top: 44px;
    background-color: #fff;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>