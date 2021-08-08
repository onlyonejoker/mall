<template>
  <div>
    <top-bar class="detailNav">
      <div slot="left" @click="backHome" class="back">◁</div>
      <detailTopNav slot="center" :switch="['商品','参数','评论','推荐']" :cut="cut" @anchorNav="anchorNav" />
    </top-bar>

    <scroll class="scroll" ref="scroll" @contentScroll="contentScroll">
      <div ref="cargo" id="101">
        <slide-show :banner="banner" class="swipe" />
        <detail-text :text="text" />
        <merchant :text="text" />
        <detailImage :text="text" @loadFinish="loadFinish" />
      </div>
      <itemParams :text="text" ref="arguments" />
      <detailrate :text="text" ref="comment" />
      <recommend ref="recommend" />
    </scroll>
    <backTop @click.native="backClick" v-show="isBlock" />
    <buttonBar :shopCar="shopCars" />
  </div>
</template>

<script>
import { getdetailGoods } from "request/homeRequest";

import scroll from "components/common/scroll/scroll.vue";
import topBar from "components/common/topBar/topBar.vue";
import slideShow from "components/common/slideshow/slideShow.vue";

import backTop from "components/content/backTop/backTop.vue";

import detailTopNav from "./component/detailTopNav.vue";
import detailText from "./component/detailText.vue";
import merchant from "./component/merchant.vue";
import detailImage from "./component/detailImage.vue";
import itemParams from "./component/itemParams.vue";
import detailrate from "./component/detailrate.vue";
import recommend from "./component/detailrec.vue";
import buttonBar from "./component/button-bar.vue";
export default {
  name: "detail",
  components: {
    topBar,
    scroll,
    slideShow,
    detailTopNav,
    detailText,
    merchant,
    detailImage,
    itemParams,
    detailrate,
    recommend,
    backTop,
    buttonBar,
  },
  data() {
    return {
      banner: [],
      text: {},
      isBlock: false,
      cut: 0,
      cargo: 0,
      arguments: 0,
      comment: 0,
    };
  },
  props: {},
  computed: {
    bs() {
      return this.$refs.scroll.scroll;
    },
    shopCars() {
      return {
        img: this.banner,
        iid: this.$route.query.iid,
        text: this.text,
      };
    },
  },
  methods: {
    /*
     *事件相关
     */
    backHome() {
      this.$router.replace("/home");
    },
    loadFinish() {
      this.cargo = this.$refs.cargo.offsetHeight;
      this.arguments = this.$refs.arguments.$el.offsetHeight + this.cargo;
      this.comment = this.arguments + this.$refs.comment.$el.offsetHeight;
    },
    contentScroll(position) {
      if (position.y > -800) {
        this.isBlock = false;
      } else {
        this.isBlock = true;
      }

      if (position.y > -this.cargo) {
        this.cut = 1;
      } else if (position.y > -this.arguments) {
        this.cut = 2;
      } else if (position.y > -this.comment) {
        this.cut = 3;
      } else if (position.y < -this.comment) {
        this.cut = 4;
      }
    },
    backClick() {
      this.bs.scrollTo(0, 0, 500);
    },
    anchorNav(i) {
      switch (i) {
        case 0:
          this.bs.scrollTo(0, 0, 2000);
          break;
        case 1:
          this.bs.scrollTo(0, -this.cargo, 2000);
          break;
        case 2:
          this.bs.scrollTo(0, -this.arguments, 500);
          break;
        case 3:
          this.bs.scrollTo(0, -this.comment, 500);
          break;
      }
    },
    /*
     *数据请求相关
     */
    install(query) {
      getdetailGoods(query).then((res) => {
        res.result.itemInfo.topImages.forEach((value) => {
          let data = {
            image: value,
          };
          this.banner.push(data);
        });
        this.text = {
          itemInfo: res.result.itemInfo,
          columns: res.result.columns,
          shopInfo: res.result.shopInfo,
          detailInfo: res.result.detailInfo,
          skuInfo: res.result.skuInfo,
          itemParams: res.result.itemParams,
          rate: res.result.rate.list,
        };
      });
    },
  },

  created() {
    let iid = this.$route.query.iid;
    this.install(iid);
  },
  mounted() {},
};
</script>

<style scopen>
  .detailNav {
    text-align: center;
  }
  .back {
    font-size: 25px;
  }
  .swipe {
    height: 500px;
  }
  .scroll {
    height: calc(100vh - 98px);
    overflow: hidden;
  }
</style>