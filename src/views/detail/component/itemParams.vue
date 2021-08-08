<template>
  <div id="itemParams" v-if="isLoad">
    <div class="rule">
      <p>{{text.itemParams.rule.key}}</p>
      <p>{{text.itemParams.rule.disclaimer}}</p>
      <div id="ruleTables">
        <div v-for="(items,index) in text.itemParams.rule.tables[0]" :key="index" class="ruleTablesRow">
          <div v-for="(item,index) in items" :key="index">
            {{item}}
            <span v-if="Number.isFinite(parseInt(item))">CM</span>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <p>{{text.itemParams.info.key}}</p>
      <div v-for="(items,index) in text.itemParams.info.set" :key="index" class="infoRow">
        <div>{{items.key}}</div>
        <div>{{items.value}}</div>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
export default {
  name: "itemParams",
  props: { text: Object },
  data() {
    return {
      isLoad: false,
    };
  },
  watch: {
    text() {
      this.$nextTick(() => {
        this.isLoad = true;
        this.$bus.$emit("sss");
      });
    },
  },
};
</script>

<style scoped>
  #itemParams {
    margin: 20px 0;
  }
  .rule p:nth-child(1) {
    font-size: 18px;
    color: #000;
    line-height: 24px;
    margin-bottom: 20px;
    padding: 0 20px;
  }
  .rule p:nth-child(2) {
    line-height: 22px;
    margin-bottom: 20px;
    padding: 0 20px;
  }
  .ruleTablesRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(7, 7, 7, 0.3);
    height: 50px;
  }
  .ruleTablesRow div {
    width: 22%;
    text-align: center;
  }
  .info p {
    font-size: 18px;
    color: #000;
    line-height: 24px;
    margin: 20px 0;
    padding: 0 20px;
  }
  .infoRow {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(7, 7, 7, 0.3);
    min-height: 50px;
  }
  .infoRow div:nth-child(1) {
    width: 50px;
    margin-right: 50px;
  }
</style>