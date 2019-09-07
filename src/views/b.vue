<!--
 * @Description: $listeners  $attrr测试
 * @Author: xwq
 * @Date: 2019-09-07 10:46:50
 * @LastEditTime: 2019-09-07 16:56:26
 -->
<template>
    <div class="page">
        <div>a组件的$attrs数据:{{$attrs}}</div>
        <van-button type="primary" class="test-btn" @click="clickHandle">测试</van-button>
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
    methods: {
        clickHandle() {
            this.$emit("upBackInfo");
            console.log("componenetB");
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    margin-top: 50px;
}
</style>