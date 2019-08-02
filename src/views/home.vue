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
            :rightIcon="rightIcon"
            :golacationText="golacationText"
            rightColor="#f00"
            rightIconName="location-o"
            :onClickLeftStatus="onClickLeftStatus"
            @leftMenuHandle="leftMenuHandle"
            @rightMenuHandle="rightMenuHandle"
        />
        <background />
        <VheaderLeftMenu
            positionInfo="left"
            :styleInfo="{width:'70%',height:'100%'}"
            :listInfo="listInfo"
        />
        <Vbanner :imgList="imgList" />
        <div class="main-container">
            <!-- <VlistInfo :listArray="listArray" @listHandle="listMenuHandle" /> -->
            <p>原始数据：{{sourceInfo}}</p>
            <p>{{positionInfo}}</p>
            <van-cell title-class="title-style" title="推广渠道">
                <template slot="default">
                    <span @click="copylink">复制链接</span>
                </template>
            </van-cell>
            <QRCode :qrCodeLink="qrCodeLink" :titleStatus="false" :buttonStatus="false" />
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
import { getCurrentPosition } from "@/untils/getGolacation"; //引入Hbuilder打包定位的处理方法
import QRCode from "@/components/qrCode";
export default {
    components: {
        headOne,
        background,
        Vbanner: banner,
        VlistInfo: listInfo,
        VheaderLeftMenu: headerLeftMenu,
        QRCode
    },
    data() {
        return {
            title: this.$route.meta.title,
            isFixed: true,
            leftIcon: true,
            rightIcon: true,
            onClickLeftStatus: true,
            golacationText: "广州",
            sourceInfo: "",
            positionInfo: "",
            imgList: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                require("@image/1.jpg")
            ],
            listArray: [
                {
                    imgUrl: require("@assets/image/pic01.png"),
                    title: "热销商品"
                },
                {
                    imgUrl: require("@assets/image/pic02.png"),
                    title: "大杂烩"
                },
                {
                    imgUrl: require("@assets/image/pic03.png"),
                    title: "橙子"
                },
                {
                    imgUrl: require("@assets/image/pic04.png"),
                    title: "西红柿"
                },
                {
                    imgUrl: require("@assets/image/pic05.png"),
                    title: "肉类"
                },
                {
                    imgUrl: require("@assets/image/pic06.png"),
                    title: "海鲜类"
                },
                {
                    imgUrl: require("@assets/image/pic07.png"),
                    title: "营养类"
                },
                {
                    imgUrl: require("@assets/image/pic08.png"),
                    title: "零食"
                }
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
            ],
            qrCodeLink: "http://www.baidu.com"
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        next(vm => {
            // console.log(vm.$route.params, "8888===");
        });
    },
    beforeRouteLeave(to, from, next) {
        if (to.path === "/login") {
            return;
        }
        next();
    },
    beforeCreate() {
        /* document.addEventListener(
            "plusready",
            function() {
                let uuid = plus.device.uuid;
                alert(uuid, "=====");
            },
            false
        ); */
    },
    created() {
        // this.sourceInfo = getCurrentPosition();
        // this.positionInfo = JSON.parse(getCurrentPosition());
        let cityName = this.$route.query.cityName;
        if (cityName) {
            this.golacationText = cityName;
        }
    },
    mounted() {
        this.forMate();
    },
    methods: {
        /* 复制粘贴 */
        copylink() {
            this.$nextTick(() => {
                let oInput = document.createElement("input");
                oInput.value = this.qrCodeLink;
                oInput.className = "copy-input-style";
                oInput.setAttribute("readOnly", false);
                document.body.appendChild(oInput);
                oInput.select(); // 选择对象
                try {
                    if (document.execCommand("copy", false, null)) {
                        this.$toast("短链接已复制到手机剪切板");
                        setTimeout(() => {
                            this.$toast.clear();
                        }, 1500);
                    }
                } catch (err) {
                    console.log(err);
                }
            });
        },
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
         * @Description: 导航栏 右边按钮
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-19 14:47:19
         */

        rightMenuHandle() {
            this.$router.push({
                name: "cityList"
            });
        },

        /**
         * @Description:首页菜单跳转
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-13 15:59:37
         */
        listMenuHandle(item) {
            this.$toast("即将跳转->" + item.title);
            this.$router.push({
                name: "torch"
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
<style>
.copy-input-style {
    opacity: 0;
    cursor: default;
    width: 1px;
    height: 1px;
    position: absolute;
    top: -99999px;
    left: -99999px;
}
</style>
<style lang='less' scoped>
.page {
    .main-container {
        .statement-bottom {
            padding: 8px;
            font-size: 14px;
            text-align: center;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 5px;
            color: #ccc;
        }
    }
}
</style>
