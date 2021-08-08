<template>
  <div id="switchBar">
    <div id="switchBarItem" v-for="(item,index) in switchBarData" :key="index" :class="{active:isActive==index}" @click="activeFn(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "switchBar",
  data() {
    return {
      isActive: 0,
      switchBarData: null,
    };
  },
  props: { switch: Array || Object, cut: Number },
  watch: {
    switch(n) {
      this.switchBarData = n;
    },
    cut(n) {
      this.isActive = n - 1;
    },
  },
  methods: {
    activeFn(i) {
      this.isActive = i;
      this.$emit("anchorNav", i);
    },
  },
  mounted() {
    this.switchBarData = this.switch;
  },
};
</script>

<style scoped>
  #switchBar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
  }
  #switchBarItem {
    line-height: 34px;
    height: 100%;
  }
  .active {
    border-bottom: 1px solid #ff5777;
    color: #ff5777;
  }
</style>