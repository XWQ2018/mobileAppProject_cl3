<!--
 * @Description: $attrr测试
 * @Author: xwq
 * @Date: 2019-09-07 10:46:50
 * @LastEditTime: 2019-09-07 12:00:49
 -->
<template>
    <div class="page">
        <div>父组件的$attrs数据:{{$attrs}}</div>
        <div>{{$listeners}}</div>
    </div>
</template>
<script>
export default {
    components: {},
    props: ["num"],
    data() {
        return {};
    },
    created() {},
    mounted() {
        console.log(this.$attrs, "******");
    },
    methods: {}
};
</script>
<style lang="less" scoped>
.page {
    margin-top: 50px;
}
</style>