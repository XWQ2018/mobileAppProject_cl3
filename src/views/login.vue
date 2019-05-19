<template>
    <div class="page">
        <background/>
        <div class="main-container">
            <div class="login-info">
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
        </div>
    </div>
</template>
<script>
import { Field } from "vant";
import background from "@/components/background";
export default {
    components: {
        [Field.name]: Field,
        background
    },
    data() {
        return {
            username: "",
            password: ""
        };
    },
    beforeRouteLeave(to, from, next) {
        // console.log(from, to);
        next();
    },
    created() {},
    mounted() {},
    methods: {
        btnLogin() {
            if (this.username && this.password) {
                this.$toast("登入成功。。。");
                this.$router.push({
                    name: "home"
                });
            } else {
                this.$toast("请输入用户名或密码!");
            }
            setTimeout(() => {
                this.$toast.clear();
            }, 1000);
        }
    }
};
</script>
<style lang='less' scoped>
.page {
    /deep/ .van-field__control {
        border-bottom: 1px solid #ccc;
    }
    .main-container {
        padding: 0;
        .login-info {
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
    }
}
</style>
