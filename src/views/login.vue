<template>
    <div class="page">
        <!-- <background/> -->
        <div class="main-container">
            <van-row class="login-info text-left">
                <van-row tag="h1">登入</van-row>
                <van-row>
                    <van-cell-group>
                        <van-col tag="h5" class="title-h5" span="24">手机号</van-col>
                        <van-field
                            v-model="tellPhone"
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
import loginApi from "@/api/login/login";
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
            tellPhone: "",
            password: "",
            remenb: {
                radioGroupVal: false,
                radioVal: true,
                selectVal: false
            },
            agreement: {
                radioGroupVal: true,
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
            let params = {
                tellPhone: this.tellPhone,
                password: this.password
            };
            for (let k in params) {
                if (!params[k]) {
                    this.ruleInput(k);
                    return;
                }
            }
            this.ruletellphone(this.tellPhone);
            loginApi
                .getLoginInfo({
                    username: this.tellPhone,
                    password: this.password
                })
                .then(res => {
                    if (res.code == 20000) {
                        this.$toast(res.msg);
                        this.$router.push({
                            name: "home"
                        });
                    }
                });
        },

        //验证输入框是否为空
        ruleInput(val) {
            switch (val) {
                case "tellPhone":
                    this.$toast("手机号不能为空");
                    break;
                case "password":
                    this.$toast("密码不能为空");
                    break;
                case "tellPhoneIllegal":
                    this.$toast("手机号不合法");
                    break;
                default:
                    break;
            }
        },
        //验证手机号的合法性
        ruletellphone(val) {
            let Reg = /^[1][3,4,5,7,8][\d]{9}$/;
            if (!Reg.test(val)) {
                this.ruleInput("tellPhoneIllegal");
                return;
            }
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
