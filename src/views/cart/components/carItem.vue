<template>
  <div id="shop">
    <div class="shopItem" v-for="(item,index) in shop" :key="index">
      <div class="checked" @click="checkedFn(index)" :class="{isChecked:checkeds[index]}">
        ✔
      </div>

      <div class="carInfo">
        <div class="carImg">
          <img :src="item.shopCar.img[0].image" alt="img">
        </div>
        <div class="carContent">
          <p class="carTitle">{{item.shopCar.text.itemInfo.title}}</p>
          <p class="carText">{{item.shopCar.text.itemInfo.desc}}</p>
          <p class="carPrice">
            <span>￥{{item.shopCar.text.itemInfo.lowNowPrice}}</span>
            <span>X{{item.num}}</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "carItem",
  data() {
    return {
      shop: [],
      mark: 0,
      checkeds: [],
      collect: 0,
      trues: 0,
    };
  },
  computed: {
    checkAll() {
      return this.$store.state.checked;
    },
  },
  watch: {
    //全选
    checkAll(n) {
      let checkedsCopy = this.checkeds.splice(0, this.checkeds.length);
      if (n) {
        this.$store.commit("collect", this.shop.length);
        checkedsCopy.forEach((e, i) => {
          this.checkeds.push(n);
          let price =
            this.shop[i].shopCar.text.itemInfo.lowNowPrice * this.shop[i].num;
          this.$store.commit("price", price);
        });
      } else {
        this.$store.commit("collect", 0);
        this.$store.commit("priceReset");
        checkedsCopy.forEach(() => {
          this.checkeds.push(n);
        });
      }
    },
  },
  methods: {
    //全选
    checkedFn(i) {
      this.mark = i;
      this.$store.commit("priceReset");
      this.checkeds.splice(i, 1, !this.checkeds[i]);
      this.trues = 0;

      this.checkeds.forEach((e, i) => {
        if (e) {
          this.trues++;
          let price =
            this.shop[i].shopCar.text.itemInfo.lowNowPrice * this.shop[i].num;
          this.$store.commit("price", price);
        }
      });

      if (this.trues >= this.checkeds.length) {
        this.$store.commit("checkedT");
        this.$store.commit("checkedAllT");
      } else if (this.trues < this.checkeds.length) {
        this.$store.commit("checkedF");
      }
      this.$store.commit("collect", this.trues);
    },
    init() {
      this.shop = this.$store.state.addShopCar;
      this.$store.commit("priceReset");
      if (this.shop.length == 0) {
        this.$store.commit("checkedF");
      } else {
        this.$store.commit("checkedT");
        this.$store.commit("checkedAllT");
      }

      this.shop.forEach((e) => {
        this.checkeds.push(true);
        let price = e.shopCar.text.itemInfo.lowNowPrice * e.num;
        this.$store.commit("price", price);
      });
      this.$store.commit("collect", this.shop.length);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped>
  #shop {
    border-top: 1px solid transparent;
  }
  .shopItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    margin-bottom: 20px;
    height: 120px;
    border-bottom: 2px solid rgb(7, 7, 7, 0.5);
    box-shadow: 0 3px 5px 1px gray;
  }
  .checked {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 20px 20px;
    line-height: 20px;
    text-align: center;
    color: #fff;
  }
  .isChecked {
    background-color: #ff5777;
    border: 1px solid #ff5777;
  }
  .carInfo {
    width: calc(100% - 20px);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
  }
  .carImg {
    width: 30%;
    height: 100%;
    border-radius: 10px 10px 10px 10px;
    overflow: hidden;
    margin-right: 5%;
  }
  .carImg img {
    width: 100%;
    height: 100%;
  }
  .carContent {
    width: 70%;
    height: 100%;
  }
  .carContent p {
    width: 100%;
    height: 33%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 33px;
  }
  .carPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .carPrice span:nth-child(2) {
    margin-right: 20px;
  }
  .carPrice span:nth-child(1) {
    color: orangered;
  }
</style>