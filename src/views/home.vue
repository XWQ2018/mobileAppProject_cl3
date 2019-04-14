<template>
    <div class="homePage">
        <headOne
            :title="title"
            :isFixed="isFixed"
            :leftArrow="leftArrow"
            :rightIcon="rightIcon"
            @onClickLeft="back"
            @onClickRight="clickMenu"
        />
    </div>
</template>
<script>
import headOne from "@/components/headOne";
export default {
    data() {
        return {
            title: "首页",
            isFixed: false,
            leftArrow: false,
            rightIcon: true
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        // this.title = "8888";
        next(vm => {
            console.log(vm, "8888===");
        });
    },
    components: {
        headOne
    },
    created() {},
    mounted() {},
    methods: {
        back() {
            console.log("返回");
        },
        clickMenu() {
            console.log("菜单");
        }
    }
};
</script>
<style lang='less' scoped>
.homePage {
    /*   /deep/ .van-col--10 {
        color: #fff;
    } */
    /* /deep/ .van-icon {
        line-height: 25px;
    }
    /deep/ .van-row :first-child {
        text-align: left;
    }
    /deep/ .van-row :last-child {
        text-align: right;
    }
    font-size: 20px;
    padding: 10px;
    background-color: #f2f2f2;
    box-sizing: border-box; */
}
</style>
