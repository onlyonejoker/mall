<template>
  <div id="collect">
    <div class="total-price">
      <div class="checkbox" :class="{checked:this.$store.state.checked&&this.$store.state.checkedAll}" @click="checked">✔</div>
      <div>全选</div>
      <div class="price">合计￥{{this.$store.state.price}}.00</div>
    </div>
    <div class="collect">去结算({{this.$store.state.collect}})</div>
  </div>
</template>

<script>
export default {
  name: "collect",
  data() {
    return {};
  },
  methods: {
    checked() {
      this.$store.commit("checked");
    },
  },
};
</script>

<style scoped>
  #collect {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: rgb(129, 129, 129, 0.3);
    border-top: 1px solid rgb(129, 129, 129, 0.5);
  }
  .collect {
    width: 30%;
    font-size: 20px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    background-color: orangered;
    color: #fff;
  }
  .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    font-size: 18px;
  }
  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 20px 20px;
    margin-right: 20px;
    color: transparent;
  }
  .checked {
    background-color: #ff5777;
    border: 1px solid #ff5777;
    color: #fff;
  }
  .price {
    margin-left: 20px;
  }
</style>