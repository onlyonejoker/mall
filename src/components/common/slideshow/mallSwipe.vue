/* API: 
timeout:播放间隔，可选，默认2000
indicatorItemSize：指示器大小，可选，默认12
swipeImgHeight：图片大小，可选，默认移动端适配
swipeImgWidth：图片大小，可选，默认移动端适配
imgs：图片，必选
swipeLink：图片链接，必选
*/
<template>
  <div id="swipe">
    <div id="swipeBox" :style="{
    width:(dataImgs.length+2)*100+'%',
    transition:Transition,
    left:Left+'px'
    }" @transitionend="transitionend" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">

      <div class="swipe-item">
        <img :src="dataImgs[dataImgs.length-1]" alt="img" :style="{
          width:imgWidth+'px',
          height:imgHeight+'px'
        }">
      </div>

      <div class="swipe-item" v-for="(item,index) in dataImgs" :key="index+'item'">
        <img :src="item" alt="img" :style="{
          width:imgWidth+'px',
          height:imgHeight+'px'
        }" @click="Link(index)">
      </div>

      <div class="swipe-item">
        <img :src="dataImgs[0]" alt="img" :style="{
          width:imgWidth+'px',
          height:imgHeight+'px'
        }">
      </div>

    </div>

    <div id="indicator" :style="{
      width:(dataImgs.length*2)*dataIndicatorItemSize+'px'
      }">
      <div v-for="(item,index) in dataImgs" :key="index" class="indicator-item" :class="{active:isActive===index}" :style="{
          width:dataIndicatorItemSize+'px',
          height:dataIndicatorItemSize+'px',
          borderRadius:dataIndicatorItemSize+'px'}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swipe",
  data() {
    return {
      flag: true,
      debounce: null,
      swipeWidth: 0,
      Left: 0,
      sign: 1,
      Transition: "all .3s",
      timer: "",
      startX: 0,
      moveX: 0,
      isActive: 0,
      dataImgs: null,
      dataTimeout: 0,
      dataIndicatorItemSize: 0,
      imgHeight: 0,
      imgWidth: 0,
      link: null,
    };
  },
  props: {
    timeout: {
      type: Number,
      default() {
        return 2000;
      },
    },
    indicatorItemSize: {
      type: Number,
      default() {
        return 12;
      },
    },
    swipeImgHeight: {
      type: Number,
      default() {
        return 375;
      },
    },
    swipeImgWidth: {
      type: Number,
      default() {
        return 195;
      },
    },
    imgs: { type: Array },
    swipeLink: { type: Array },
  },
  methods: {
    // eslint-disable-next-line vue/no-dupe-keys
    Link(i) {
      open(this.link[i], "_self");
    },
    Swipe() {
      //指示器
      this.isActive++;
      this.isActive == this.dataImgs.length
        ? (this.isActive = 0)
        : this.isActive;
      this.flag = true;
      this.sign++;
      //从第三张图开始执行过渡
      this.Left = -this.sign * this.swipeWidth;
      //每次平移一张图的左偏移
      this.Transition = "all .3s";
      //当从第一张图片开始时、打开过渡
    },
    transitionend() {
      //过渡事件
      if (this.sign >= this.dataImgs.length) {
        //当轮播图播到最后一个图片时
        this.sign = 0;
        //重置记录
        this.Transition = "none";
        //并且及时清除过渡
        this.Left = 0;
        //瞬间回到第二张图片
      } else if (this.sign <= 0) {
        //瞬间回到最后一张图
        this.sign = this.dataImgs.length;
      }
    },
    touchstart(e) {
      //点击时清除定时器预过渡
      this.startX = e.changedTouches[0].pageX;
      this.Transition = "none";
      clearInterval(this.timer);
      this.flag = false;
    },
    touchmove(e) {
      //移动时移动距离
      this.moveX = e.changedTouches[0].pageX - this.startX;
      this.Left = -this.sign * this.swipeWidth + this.moveX;
    },
    touchend() {
      //离开触摸时判断是左滑动还是有滑动
      //滑动的距离大于0为有做滑动
      if (Math.abs(this.moveX) > 50) {
        if (this.moveX > 0) {
          this.isActive--;
          this.isActive < 0
            ? (this.isActive = this.dataImgs.length - 1)
            : this.isActive;
          this.sign--;
        } else {
          this.isActive++;
          this.isActive == this.dataImgs.length
            ? (this.isActive = 0)
            : this.isActive;
          this.sign++;
        }
        //打开过渡，切换图片
        this.Transition = "all .3s";
        this.Left = -this.sign * this.swipeWidth;
      } else {
        //若果活动距离过小，不切换
        this.Transition = "all .1s";
        this.Left = -this.sign * this.swipeWidth;
      }
      //当2s之内没有触摸事件时，打开自动播放
      this.timer = setInterval(() => {
        this.Swipe();
      }, this.dataTimeout);
    },
  },
  mounted() {
    //自动播放
    this.swipeWidth = document.querySelector("#swipe").offsetWidth;
    this.Left = -this.swipeWidth;
    this.timer = setInterval(() => {
      this.Swipe();
    }, this.dataTimeout);
  },
  beforeUpdate() {
    this.dataImgs = this.imgs;
    this.imgHeight = this.swipeImgHeight;
    this.imgWidth = this.swipeImgWidth;
    this.link = this.swipeLink;
    //修复当滑块快速滑动时产生数据异常的BUG
    if (!this.flag) {
      if (this.moveX > 0) {
        if (this.sign == 0) {
          this.sign = this.dataImgs.length;
        }
      }
      if (this.moveX < 0) {
        if (this.sign == this.dataImgs.length) {
          this.sign = 0;
        }
      }
    }
  },
};
</script>

<style scoped>
  #swipe {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  #swipeBox {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
  }
  .swipe-item {
    width: 100%;
  }
  img {
    width: 100%;
    height: 30vh;
    vertical-align: middle;
  }
  #indicator {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .indicator-item {
    width: var(--indicator-item-size);
    height: var(--indicator-item-size);
    border-radius: var(--indicator-item-size) var(--indicator-item-size);
    border: 1px solid rgba(100, 100, 100, 0.8);
    transition: all 0.3s;
  }
  .active {
    width: 24px !important;
    background-color: var(--indicator-item-color);
  }
</style>