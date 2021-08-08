<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    updata: Number, //更新数据
    init: Boolean, //异步初始化
  },
  watch: {
    init() {
      this.scroll.refresh();
    },
    updata() {
      this.$nextTick(() => {
        //better-scroll数据更新
        this.scroll.refresh();
      });
    },
  },
  methods: {
    initScroll() {
      let wrapper = this.$refs.scroll;
      this.scroll = new BScroll(wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
        //scrollbar: true,
      });
      this.scroll.on("scroll", (position) => {
        this.$emit("contentScroll", position);
      });
      this.scroll.on("pullingUp", () => {
        this.scroll.finishPullUp();
        this.$emit("pullingUp");
      });
    },
  },
  mounted() {
    this.initScroll();

    let debounce = null;

    this.$bus.$on("sss", (/*a*/) => {
      if (debounce) clearTimeout(debounce); //防抖
      debounce = setTimeout(() => {
        //console.log(a); //参数传递
        this.scroll.refresh(); //监听事件总线的sss事件，与goodsItem联动
      }, 100);
    });
  },
};
</script>

<style  scoped>
</style>