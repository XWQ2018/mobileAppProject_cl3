<template>
    <div class="page">
        <!-- <background/> -->
        <div class="main-container">
            <!-- <div class="login-info">
                <h1>LOGIN SYSTEM</h1>
                <van-cell-group>
                    <van-field
                        v-model="username"
                        clearable
                        left-icon="contact"
                        label="用户名"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                        maxlength="12"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        left-icon="contact"
                        maxlength="12"
                    />
                    <van-button type="primary" class="btnSubmit" size="large" @click="btnLogin">登入</van-button>
                </van-cell-group>
            </div>-->
            <van-row class="login-info text-left">
                <van-row tag="h1">登入</van-row>
                <van-row>
                    <van-cell-group>
                        <van-col tag="h5" class="title-h5" span="24">手机号</van-col>
                        <van-field
                            v-model="username"
                            type="number"
                            maxlength="11"
                            clearable
                            required
                            placeholder="请输入11位手机号"
                        />
                        <van-col tag="h5" class="title-h5" span="24">密码</van-col>
                        <van-field
                            v-model="password"
                            clearable
                            type="password"
                            maxlength="20"
                            required
                            placeholder="请输入密码"
                        />
                        <van-radio-group v-model="remenb.radioGroupVal">
                            <van-radio
                                :name="remenb.radioVal"
                                icon-size="16"
                                shape="square"
                                @click="clickRemenb"
                            >记住密码</van-radio>
                        </van-radio-group>
                    </van-cell-group>
                </van-row>
                <Vbutton buttonText="登录" @clickButton="submit"/>
                <div class="agreement">
                    <van-radio-group v-model="agreement.radioGroupVal">
                        <van-radio
                            :name="agreement.radioVal"
                            icon-size="16"
                            shape="square"
                            @click="clickAgreement"
                        >已阅读相关协议说明>></van-radio>
                        <a href="javascript:void(0)" @click="agreementInfo">协议内容</a>
                    </van-radio-group>
                </div>
            </van-row>
        </div>
    </div>
</template>
<script>
import { Field, RadioGroup, Radio } from "vant";
import button from "@/components/button";
export default {
    components: {
        [Field.name]: Field,
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio,
        Vbutton: button
    },
    data() {
        return {
            username: "",
            password: "",
            remenb: {
                radioGroupVal: false,
                radioVal: true,
                selectVal: false
            },
            agreement: {
                radioGroupVal: false,
                radioVal: true,
                selectVal: false
            }
        };
    },
    beforeRouteLeave(to, from, next) {
        // console.log(from, to);
        next();
    },
    created() {},
    mounted() {},
    methods: {
        //记住密码选择
        clickRemenb(e) {
            this.remenb.selectVal = !this.remenb.selectVal;
            this.remenb.radioGroupVal = this.remenb.selectVal ? true : false;
        },

        //协议内容勾选
        clickAgreement() {
            this.agreement.selectVal = !this.agreement.selectVal;
            this.agreement.radioGroupVal = this.agreement.selectVal
                ? true
                : false;
        },
        //协议信息
        agreementInfo() {
            alert(8888);
        },
        //登录
        submit() {
            console.log("submit");
            /* if (this.username && this.password) {
                this.$toast("登入成功。。。");
                this.$router.push({
                    name: "home"
                });
            } else {
                this.$toast("请输入用户名或密码!");
            }
            setTimeout(() => {
                this.$toast.clear();
            }, 1000); */
        }
    }
};
</script>
<style lang='less' scoped>
.page {
    .main-container {
        .login-info {
            margin-top: 80px;
            padding: 0 10px;
            > h1 {
                font-size: 26px;
                padding: 10px 0;
                margin-bottom: 20px;
            }
            .title-h5 {
                font-size: 16px;
                padding: 10px 0;
            }
            /deep/ .van-cell {
                background-color: #f2f2f2;
            }
            .van-radio-group {
                margin: 5px 0 10px 0;
                padding: 0 10px;
            }
            /deep/ .van-radio__label {
                font-size: 16px;
                color: #666;
            }
            .agreement {
                /deep/ .van-radio {
                    display: inline-block;
                }
                /deep/ .van-radio-group {
                    > a {
                        font-size: 16px;
                        vertical-align: middle;
                        line-height: 20px;
                        display: inline-block;
                        padding-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>
