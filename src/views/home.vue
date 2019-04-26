<template>
    <div class="homePage">
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
        <!--   <test #head>
            <span v-slot="head">666666</span>
        </test>-->
        <div>
            <Vpie :data="chartData" :settings="chartSettings"></Vpie>
        </div>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
import test from "@/views/test";
import Vpie from "v-charts/lib/pie";
import "v-charts/lib/style.css";
export default {
    data() {
        //设置饼图的大小
        /*  this.chartSettings = {
            radius: 100,
            offsetY: 200
        }; */
        return {
            title: "echarts",
            isFixed: false,
            leftArrow: true,
            rightIcon: true,
            leftText: "返回",
            rightText: "图表",
            onClickLeftStatus: true,
            //设置饼图的大小
            chartSettings: {
                radius: 70,
                offsetY: 200,
                labelLine: {
                    smooth: true
                },
                // dimension: "百分比"   设置指标
                legend: {
                    bottom: 10,
                    left: "center"
                },
                title: {
                    text: "统计图",
                    subtext: "虚构数据",
                    left: "center"
                }
            },
            chartData: {
                columns: ["百分比", "用户量", "金额"],
                rows: [
                    { 百分比: "17%", 用户量: 5000, 金额: 4500 },
                    { 百分比: "25%", 用户量: 7000, 金额: 6500 },
                    { 百分比: "10%", 用户量: 2923, 金额: 3200 },
                    { 百分比: "5%", 用户量: 1723, 金额: 2000 },
                    { 百分比: "15%", 用户量: 4500, 金额: 5000 },
                    { 百分比: "28%", 用户量: 8000, 金额: 9000 }
                ]
            }
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
        headOne,
        test,
        Vpie: Vpie
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
