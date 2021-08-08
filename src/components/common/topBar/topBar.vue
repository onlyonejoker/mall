<template>
  <div class="topbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar",
};
</script>

<style scoped>
  .topbar {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
  }
  .left,
  .right {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    text-align: center;
  }
</style>