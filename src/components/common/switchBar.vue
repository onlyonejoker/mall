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
  props: { switch: Array || Object },
  watch: {
    switch(n) {
      this.switchBarData = n;
    },
  },
  methods: {
    activeFn(i) {
      this.isActive = i;
    },
  },
  mounted() {
    this.switchBarData = this.switch;
    console.log(this.switch);
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
  }
  #switchBarItem {
    width: 100%;
    line-height: 100%;
    height: 100%;
  }
  .active {
    border-bottom: 1px solid #ff5777;
    color: #ff5777;
  }
</style>