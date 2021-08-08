<template>
  <div id="goods">
    <slot />
  </div>
</template>

<script>
export default {
  mame: "goodsList",
};
</script>

<style scoped>
  #goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
</style>