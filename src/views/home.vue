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
        <VheaderLeftMenu
            positionInfo="left"
            :styleInfo="{width:'70%',height:'100%'}"
            :listInfo="listInfo"
        />
        <div class="main-container">
            <Vbanner :imgList="imgList" />
            <VlistInfo :listArray="listArray" />
            <p class="statement-bottom">本软件由雲亿科技提供.备案号-粤88AG9</p>
        </div>
    </div>
</template>
<script>
import eventVue from "@/untils/eventVue"; //引入vue的构造函数
import headOne from "@/components/headOne";
import background from "@/components/background";
import banner from "@/components/banner";
import listInfo from "@/components/listInfo";
import headerLeftMenu from "@/components/headerLeftMenu";
import { dateTimeFormate } from "@/untils/commonJs";
export default {
    components: {
        headOne,
        background,
        Vbanner: banner,
        VlistInfo: listInfo,
        VheaderLeftMenu: headerLeftMenu
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
            ],
            listInfo: [
                {
                    title: "个人中心",
                    iconName: "user-circle-o"
                },
                {
                    title: "我的钱包",
                    iconName: "balance-o"
                },
                {
                    title: "修改密码",
                    iconName: "edit"
                },
                {
                    title: "关于协议",
                    iconName: "description"
                },
                {
                    title: "退出",
                    iconName: "friends-o"
                }
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
        /**
         * @Description: 左侧菜单,事件监听
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-13 10:39:39
         */
        leftMenuHandle() {
            /* 发送侧边栏弹出的信号 */
            eventVue.$emit("menuStatus", true);

            /* 
            监听左侧边栏列表点击跳转事件
             */
            eventVue.$on("menuListHandle", item => {
                this.$toast("即将跳转->" + item.title);
                setTimeout(() => {
                    this.$toast.clear();
                }, 2000);
            });
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
