<template>
  <div class="home">

    <top-bar class="homeNav">
      <div slot="center">购物街</div>
    </top-bar>

    <tab-contors :titles=" ['流行' , '新款' , '精选' ]" :cut="cutGoods" @cutHomeGoods="cutHomeGoods" ref="tabContors1" v-show="!isFixed" />

    <scroll class="warpper" :init="requestOk" :updata="requestPage" ref="scroll" @contentScroll="contentScroll" @pullingUp="pullingUp">

      <slide-show :banner="banner" class="swipe">
      </slide-show>

      <recommend :recommendItem="recommends" />

      <fashion :keywordsItem="keywords" />

      <tab-contors :titles=" ['流行' , '新款' , '精选' ]" :cut="cutGoods" @cutHomeGoods="cutHomeGoods" ref="tabContors2" v-show="isFixed" />

      <goods-list :res="activeGoods" />
    </scroll>
    <backTop @click.native="backClick" v-show="isBlock" />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
//导入请求
import { getHomeData, getHomeGoods } from "request/homeRequest";

//导入公共组件
import scroll from "components/common/scroll/scroll.vue";
import topBar from "components/common/topBar/topBar.vue";
import slideShow from "components/common/slideshow/slideShow.vue";
import tabBar from "components/content/mainTabBar.vue";

//导入业务组件
import backTop from "components/content/backTop/backTop.vue";

//导入主页组件
import recommend from "./component/recommend.vue";
import fashion from "./component/fashion.vue";
import tabContors from "./component/tabContors.vue";
import goodsList from "./component/homeGoods.vue";
//import Vue from "vue";

export default {
  name: "Home",
  components: {
    topBar,
    slideShow,
    recommend,
    fashion,
    tabContors,
    goodsList,
    scroll,
    backTop,
    tabBar,
  },
  data() {
    return {
      banner: [], //轮播图数据
      recommends: [], //推荐数据
      keywords: [], //精选数据
      cutGoods: 0, //分类切换记录
      activeGoods: null, //活跃的分类数据
      isBlock: false, //回到顶部开关
      requestOk: false, //异步请求成功初始化btscroll
      requestPage: 0, //异步请求页码，刷新scroll用
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      }, //分类数据
      isFixed: true, //吸附分类栏开关
      debounce: null, //防抖
      saveY: 0,
    };
  },
  created() {
    //请求数据
    this.getHomeData();
    this.getHomeGoods("pop");
    this.activeGoods = this.goods.pop;
  },
  methods: {
    /*
     *请求数据相关
     */
    cutHomeGoods(item) {
      this.cutGoods = item;
      if (item === 0) {
        this.getHomeGoods("pop");
        this.activeGoods = this.goods.pop;
      } else if (item === 1) {
        this.getHomeGoods("new");
        this.activeGoods = this.goods.new;
      } else if (item === 2) {
        this.getHomeGoods("sell");
        this.activeGoods = this.goods.sell;
      }
    },
    getHomeData() {
      getHomeData().then((res) => {
        this.recommends = res.data.recommend.list;
        this.keywords = res.data.keywords.list;
        res.data.banner.list.forEach((value) => {
          let data = { image: value.image };
          this.banner.push(data);
        });
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.requestOk = true;
        this.requestPage++;
      });
    },
    /*
     *事件相关
     */
    contentScroll(position) {
      if (-539 < position.y) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
      if (position.y > -1000) {
        this.isBlock = false;
      } else {
        this.isBlock = true;
      }
    },
    pullingUp() {
      this.cutHomeGoods(this.cutGoods);
    },
    backClick() {
      let bs = this.$refs.scroll.scroll;
      bs.scrollTo(0, 0, 500);
    },
  },
  mounted() {},
  //beforeRouteEnter(to, from, next) {
  //  next((vm) => {
  //    vm;
  //  });
  //  //进入这个导航时重新加载滚动
  // },

  activated() {
    this.$bus.$emit("sss");
    let bs = this.$refs.scroll.scroll;
    //解决回弹BUG
    bs.refresh();
    bs.scrollTo(0, this.saveY, 0);
  },

  beforeRouteLeave(to, from, next) {
    next();
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style scoped>
  .home {
    min-height: calc(100vh - 49px);
  }
  .homeNav {
    background-color: var(--color-high-text);
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 3;
  }
  #slide-show {
    width: 100%;
    height: 195px;
    position: relative;
  }
  .warpper {
    height: calc(100vh - 98px);
    overflow: hidden;
  }
  .swipe {
    height: 195px;
  }
</style>
