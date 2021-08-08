<template>
  <div>
    <p>回到顶部</p>
  </div>
</template>

<script>
export default {
  name: "backTop",
  methods: {},
};
</script>

<style scoped>
  div {
    width: 50px;
    height: 50px;
    background-color: #ff5777;
    position: fixed;
    bottom: 64px;
    right: 20px;
    border-radius: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 40px;
    height: 40px;
    color: #000;
    text-align: center;
    line-height: 20px;
  }
</style>