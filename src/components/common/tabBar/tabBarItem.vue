<template>
  <div class="tabBarItem" @click="activeFn">
    <div class="item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="itemText" :style="isActiveColor">
      <slot name="item-text"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    isActiveColor() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    activeFn() {
      if (this.path !== this.$route.path) {
        this.$router.replace(this.path); //防止重复点击
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
  .tabBarItem {
    flex: 1;
    text-align: center;
  }
  .tabBarNav .itemIcon {
    display: block;
    width: 100%;
    height: 25px;
    line-height: 25px;
  }
  .tabBarNav .itemText {
    width: 100%;
    height: 50%;
    font-size: 16px;
  }
  /*  .activeText {
                      color: red;
                    } */
</style>