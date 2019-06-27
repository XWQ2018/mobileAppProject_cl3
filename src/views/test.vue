<template>
    <div class="page">
        <ul>
            <li>{{list.name}}</li>
            <li>{{list.age}}</li>
            <li>{{list.nickName}}</li>
        </ul>
        <van-button @click="submit">提交</van-button>
    </div>
</template>
<script>
import loginApi from "@/api/login/login";
export default {
    props: {},
    components: {},
    data() {
        return {
            title: "",
            list: ""
        };
    },
    created() {},
    mounted() {},
    methods: {
        submit() {
            loginApi
                .getLoginInfo()
                .then(res => {
                    if (res.code == 20000) {
                        this.list = res.data;
                        console.log(this.list.name);
                    }
                })
                .catch(error => {
                    console.log(error, "===========");
                });
        }
    }
};
</script>
<style lang='less' scoped>
.page {
}
</style>
