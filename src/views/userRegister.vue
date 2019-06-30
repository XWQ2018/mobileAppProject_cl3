<!--
 * @Description: 用户注册
 * @Author: xwq
 * @Date: 2019-06-30 14:09:25
 -->
<template>
    <div class="page">
        <Vbackground/>
        <div class="main-container">
            <!-- <h1 class="text-left margin-bottom">{{title}}>></h1> -->
            <div class="text-left margin-bottom">
                <span>{{title}}</span>
                <span @click="backLogin">登入>></span>
            </div>
            <div class="register-info border-radius">
                <van-cell-group>
                    <van-field
                        v-model="registerInfo.username"
                        required
                        clearable
                        type="number"
                        maxlength="11"
                        label="手机号"
                        placeholder="请输入11位手机号"
                        size="large"
                    />
                    <van-field
                        v-model="registerInfo.password"
                        type="password"
                        label="密码"
                        maxlength="20"
                        placeholder="请输入6-20位的密码"
                        required
                        clearable
                        size="large"
                    />
                    <van-field
                        v-model="registerInfo.email"
                        type="email"
                        label="邮箱号"
                        placeholder="请输入邮箱号"
                        clearable
                        size="large"
                    />
                </van-cell-group>
                <div class="check-radio">
                    <h3>性别：</h3>
                    <van-radio-group v-model="registerInfo.sex">
                        <van-radio name="男">男</van-radio>
                        <van-radio name="女">女</van-radio>
                    </van-radio-group>
                </div>
                <Vbutton @clickButton="submitRegister" buttonText="注册"/>
            </div>
        </div>
    </div>
</template>
<script>
import background from "@/components/background";
import button from "@/components/button";
import { Field, RadioGroup, Radio } from "vant";
export default {
    props: {},
    components: {
        [Field.name]: Field,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        Vbackground: background,
        Vbutton: button
    },
    data() {
        return {
            title: this.$route.meta.title,
            registerInfo: {
                username: "",
                password: "",
                sex: "男",
                email: ""
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * @Description:
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-06-30 15:22:39
         */

        submitRegister() {
            console.log("用户注册");
        },
        /**
         * @Description: 返回登入页
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-06-30 16:32:32
         */

        backLogin() {
            this.$router.push({ name: "login" });
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .main-container {
        .text-left {
            padding: 10px;
            margin: 20px 0 30px 0;
            display: flex;
            & > span {
                font-size: 20px;
                font-weight: bold;
                color: #1989fa;
                flex: 0.5;
                line-height: 29px;
            }
            span:last-child {
                color: rgba(18, 136, 165, 0.3);
                text-align: right;
                font-size: 16px;
                text-shadow: 2px 2px 5px #ccc;
            }
        }
        .register-info {
            background-color: #fff;
            padding: 10px 10px 30px 10px;
            .check-radio {
                display: flex;
                font-size: 16px;
                margin: 10px 0 50px 0;
                & > h3 {
                    flex: 0.6;
                }
                .van-radio-group {
                    flex: 1;
                    display: flex;
                    .van-radio {
                        flex: 0.5;
                    }
                }
            }
            .back-login {
                font-size: 16px;
                padding: 10px;
                color: #1989fa;
                background-color: #f2f2f2;
            }
        }
    }
}
</style>
