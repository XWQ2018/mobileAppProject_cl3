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
            :leftIcon="leftIcon"
            :onClickLeftStatus="onClickLeftStatus"
            @leftMenuHandle="leftMenuHandle"
        />
        <background />
        <div class="main-container">
            <Vbanner :imgList="imgList" />
            <VlistInfo :listArray="listArray" />
            <p class="statement-bottom">本软件由雲技科技提供.备案号-粤88AG9</p>
        </div>
    </div>
</template>
<script>
import eventVue from "@/untils/eventVue"; //引入vue的构造函数
import headOne from "@/components/headOne";
import background from "@/components/background";
import banner from "@/components/banner";
import listInfo from "@/components/listInfo";
import { dateTimeFormate } from "@/untils/commonJs";
export default {
    components: {
        headOne,
        background,
        Vbanner: banner,
        VlistInfo: listInfo
    },
    data() {
        return {
            title: this.$route.meta.title,
            isFixed: true,
            leftIcon: true,
            onClickLeftStatus: true,
            imgList: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                require("@image/1.jpg")
            ],
            listArray: [
                require("@assets/image/pic01.png"),
                require("@assets/image/pic02.png"),
                require("@assets/image/pic03.png"),
                require("@assets/image/pic04.png"),
                require("@assets/image/pic05.png"),
                require("@assets/image/pic06.png"),
                require("@assets/image/pic07.png"),
                require("@assets/image/pic08.png")
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
        this.getEmitValue();
    },
    methods: {
        /**
         * @Description: 左侧菜单
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-13 10:39:39
         */
        leftMenuHandle() {
            console.log(8888);
        },
        /**
         * @Description: 时间格式化
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-13 10:24:46
         */
        forMate() {
            let result = dateTimeFormate("2019-2-12", "YYYY-MM-dd-HH");
        },
        /**
         * @Description: 接收$emit发送的数据
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-13 10:24:55
         */

        getEmitValue() {
            //接收子组件$emit发送的消息
            eventVue.$on("searchButton", msg => {
                console.log(msg);
            });
        }
    }
};
</script>
<style lang='less' scoped>
.page {
    .main-container {
        .statement-bottom {
            padding: 10px;
            font-size: 14px;
            text-align: center;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 10px;
            color: #ccc;
        }
    }
}
</style>
