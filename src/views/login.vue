<template>
    <div class="login">
        <div class="loginInfo">
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
        </div>
        <div class="back"></div>
    </div>
</template>
<script>
import { Field } from "vant";
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    components: {
        vanField: Field
    },
    beforeRouteLeave(to, from, next) {
        console.log(from, to);
        next();
    },
    created() {},
    mounted() {},
    methods: {
        btnLogin() {
            if (this.username && this.password) {
                this.$router.push({
                    name: "home"
                });
                this.$toast("登入成功。。。");
                console.log(location.hash);
            } else {
                this.$toast("请输入用户名或密码!");
            }
        }
    }
};
</script>
<style lang='less' scoped>
.login {
    /deep/ .van-field__control {
        border-bottom: 1px solid #ccc;
    }
    .loginInfo {
        width: 90%;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        box-shadow: 0px 10px 20px #ccc, 1px 2px 10px #0ff;
        h1 {
            font-size: 24px;
            padding: 20px 0;
        }
        .btnSubmit {
            border-radius: 10px;
            margin: 20px 0;
        }
    }
    .back {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: #f2f2f2;
        z-index: -1;
    }
}
</style>
