<!--
 * @Description: 热销产品区
 * @Author: xwq
 * @Date: 2019-07-13 16:13:22
 -->
<template>
    <div class="page">
        <VheadOne
            :title="title"
            :isFixed="isFixed"
            :leftArrowStatus="leftArrowStatus"
            :onClickLeftStatus="onClickLeftStatus"
            @leftMenuHandle="back"
        />
        <div class="main-container">
            <h3>热销商品</h3>
        </div>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
export default {
    components: {
        VheadOne: headOne
    },
    data() {
        return {
            title: this.$route.meta.title,
            isFixed: true,
            onClickLeftStatus: true,
            leftArrowStatus: true
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log(vm, "8888===");
        });
    },
    created() {},
    mounted() {},
    methods: {
        /* 返回 */
        back() {
            this.$router.back();
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .main-container {
        h3 {
            padding: 10px;
            font-size: 14px;
        }
    }
}
</style>
