<!--
 * @Description: 测试全局组件调用
 * @Author: xwq
 * @Date: 2020-03-27 16:48:55
 -->
<template>
  <div class="page">
    <HelloWorld />
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  render: function(createElement, context) {
    console.log(createElement);
  },
  created() {},
  mounted() {
    console.log(this.$children[0].init());
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.page {
}
</style>