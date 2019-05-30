<template>
    <div class="page">
        <headOne
            :title="title"
            :isFixed="isFixed"
            :leftArrow="leftArrow"
            :rightIcon="rightIcon"
            :leftText="leftText"
            :rightText="rightText"
            :onClickLeftStatus="onClickLeftStatus"
            @onClickLeft="back"
            @onClickRight="clickMenu"
        />
        <background/>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
import background from "@/components/background";
export default {
    components: {
        headOne,
        background
    },
    data() {
        return {
            title: "首页菜单",
            isFixed: false,
            leftArrow: true,
            rightIcon: false,
            leftText: "",
            rightText: "图表",
            onClickLeftStatus: true
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        // this.title = "8888";
        next(vm => {
            console.log(vm, "8888===");
        });
    },
    created() {},
    mounted() {},
    methods: {
        back() {
            console.log("不能在返回了....");
        },
        clickMenu() {
            console.log("菜单");
        }
    }
};
</script>
<style lang='less' scoped>
.page {
}
</style>
