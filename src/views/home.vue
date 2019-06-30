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
            :leftArrow="leftArrow"
            :rightIcon="rightIcon"
            :leftText="leftText"
            :rightText="rightText"
            :onClickLeftStatus="onClickLeftStatus"
            @onClickLeft="back"
            @onClickRight="clickMenu"
        />
        <background/>
        <div class="main-container">
            <van-row span="24" class="desc-info margin-bottom">
                <van-col span="24" tag="h3" class="text-left">标题描述</van-col>
                <van-col tag="ul" span="24" class="desc-list-info text-left">
                    <van-col tag="li" span="24" v-for="(item,key) in listInfo" :key="key">{{item}}</van-col>
                </van-col>
            </van-row>
            <van-row span="24" class="desc-info margin-bottom">
                <van-col span="24" tag="h3" class="text-left">方案描述</van-col>
                <van-col tag="ul" span="24" class="desc-list-info text-left">
                    <van-col tag="li" span="24" v-for="(item,key) in listInfo" :key="key">{{item}}</van-col>
                </van-col>
            </van-row>
            <van-row span="24" class="desc-info margin-bottom">
                <van-col span="24" tag="h3" class="text-left">结论描述</van-col>
                <van-col tag="ul" span="24" class="desc-list-info text-left">
                    <van-col tag="li" span="24" v-for="(item,key) in listInfo" :key="key">{{item}}</van-col>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<script>
import headOne from "@/components/headOne";
import background from "@/components/background";
import { dateTimeFormate } from "@/untils/commonJs";
export default {
    components: {
        headOne,
        background
    },
    data() {
        return {
            title: "首页菜单",
            isFixed: true,
            leftArrow: true,
            rightIcon: false,
            leftText: "",
            rightText: "图表",
            onClickLeftStatus: true,
            listInfo: [
                "1、和覅哦我i换肤iohfhwofhow哈佛王红",
                "2、凤凰网iofhifgwif凤凰网iugf服务管理",
                "3、gfiwgfoifegf股份我广佛唔复古舞igf",
                "4、符合我国igfiowweohqw分红文化宫ih"
            ]
        };
    },
    //不能直接访问this，需要传入函数
    beforeRouteEnter(to, from, next) {
        // this.title = "8888";
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
        .desc-info {
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
            > h3 {
                padding-top: 10px;
                font-weight: bold;
                font-size: 20px;
            }
            .desc-list-info {
                & > li {
                    font-size: 16px;
                    line-height: 26px;
                    padding: 10px 0 10px 10px;
                }
            }
        }
    }
}
</style>
