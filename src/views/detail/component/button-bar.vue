<template>
  <div id="button-bar">
    <div class="detailButtonItem" @click="active(1)">
      <p v-if="isActive==1"><img src="@/assets/img/kefu.svg" alt="img"></p>
      <p v-else><img src="@/assets/img/客服.svg" alt="img"></p>
      <p>客服</p>
    </div>
    <div class="detailButtonItem" @click="active(2)">
      <p v-if="isActive==2"><img src="@/assets/img/dianpu.svg" alt="img"></p>
      <p v-else><img src="@/assets/img/店铺.svg" alt="img"></p>
      <p>店铺</p>
    </div>
    <div class="detailButtonItem" @click="active(3)">
      <p v-if="isCollect"><img src="@/assets/img/shoucang.svg" alt=""></p>
      <p v-else><img src="@/assets/img/shoucang1.svg" alt=""></p>
      <p>收藏</p>
    </div>
    <div class="addShopCar" type="primary" @click="drawer = true">加入购物车</div>
    <div class="buy">
      购买
    </div>
    <el-drawer title="amount" :visible.sync="drawer" :with-header="false" :size="'40%'" :direction="'btt'" :show-close="true" ref="elDrawer" @close="addShopCar">
      <span class="amountSpan">购买数量</span>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="999" label="购买数量"></el-input-number>
      <div @click="closeDrawer" id="close">×</div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "button-bar",
  data() {
    return {
      isActive: 0,
      isCollect: false,
      drawer: false,
      num: 1,
    };
  },
  props: { shopCar: Object },
  methods: {
    active(i) {
      if (i == 3) {
        this.isCollect = !this.isCollect;
        i = this.isActive;
      }
      this.isActive = i;
    },
    handleChange() {},
    closeDrawer() {
      this.$refs.elDrawer.closeDrawer();
    },
    addShopCar() {
      let value = {
        num: this.num,
        shopCar: this.shopCar,
      };
      this.$store.commit("addShopCar", value);
    },
  },
};
</script>

<style scoped>
  #button-bar {
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .detailButtonItem {
    height: 100%;
    width: 17%;
    padding: 5px 0 0 0;
  }
  .detailButtonItem p {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addShopCar {
    width: 23%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 232, 24);
    color: #000;
  }
  .buy {
    width: 26%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #f07fa5;
    font-size: 20px;
  }
  .el-input-number {
    margin-left: 50px;
  }
  .el-drawer {
    position: relative;
  }
  #close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    border: 1px solid gray;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 20px 20px;
  }
  .amountSpan {
    margin: 0 20px;
  }
</style>