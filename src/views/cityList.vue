<template>
    <div class="page">
        <VheadOne
            :title="title"
            :leftArrowStatus="leftArrowStatus"
            :isFixed="isFixed"
            :onClickLeftStatus="onClickLeftStatus"
            @leftMenuHandle="back"
        />
        <background />
        <div class="main-container">
            <h2>常用城市</h2>
        </div>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
import background from "@/components/background";
export default {
    components: {
        VheadOne: headOne,
        background
    },
    data() {
        return {
            title: this.$route.meta.title,
            isFixed: true,
            onClickLeftStatus: true,
            leftArrowStatus: true
        };
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * @Description: 返回
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-19 14:59:59
         */
        back() {
            this.$router.back();
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .container {
    }
}
</style>
