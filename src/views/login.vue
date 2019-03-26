<template>
    <div class="login">
        <h3>登入页面</h3>
        <van-button type="primary" size="large" @click="btnLogin">登入</van-button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        btnLogin() {
            this.$toast("登入成功。。。");
        }
    }
};
</script>
<style lang='less' scoped>
.login {
    h3 {
        font-size: 24px;
        color: #e4e4e4;
        background-color: #f00;
        padding: 20px 0;
    }
}
</style>
