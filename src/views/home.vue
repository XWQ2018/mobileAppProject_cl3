<!--
 * @Description: 首页
 * @Author: xwq
 * @Date: 2019-05-19 14:43:36
 -->
<template>
    <div class="page">
        <headOne
            :title="title"
            :isFixed="isFixed"
            :leftArrowStatus="leftArrowStatus"
            :rightIcon="rightIcon"
            :leftText="leftText"
            :rightText="rightText"
            :onClickLeftStatus="onClickLeftStatus"
            @onClickLeft="back"
            @onClickRight="clickMenu"
        />
        <background />
        <div class="main-container">
            <Vbanner :imgList="imgList" />
        </div>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
import background from "@/components/background";
import resultList from "@/components/resultList";
import banner from "@/components/banner";
import { dateTimeFormate } from "@/untils/commonJs";
export default {
    components: {
        headOne,
        background,
        VresultList: resultList,
        Vbanner: banner
    },
    data() {
        return {
            title: this.$route.meta.title,
            isFixed: true,
            leftArrowStatus: false,
            rightIcon: false,
            leftText: "",
            rightText: "图表",
            onClickLeftStatus: true,
            listInfo: "和覅哦我i换肤哈佛为符合哈佛王红",
            imgList: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                require("@image/1.jpg")
            ]
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log(vm, "8888===");
        });
    },
    created() {},
    mounted() {
        this.forMate();
    },
    methods: {
        forMate() {
            let result = dateTimeFormate("2019-2-12", "YYYY-MM-dd-HH");
        },
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
    .main-container {
    }
}
</style>
