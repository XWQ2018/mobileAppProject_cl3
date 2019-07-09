<template>
    <div class="page">
        <van-row type="flex" span="24" justify="space-between">
            <van-col span="12">{{list.name}}</van-col>
            <van-col span="6">{{list.age}}</van-col>
            <van-col span="6">{{list.nickName}}</van-col>
        </van-row>
    </div>
</template>
<script>
import loginApi from "@/api/user/login";
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
    mounted() {
        this.getLoginInfo();
    },
    methods: {
        getLoginInfo() {
            loginApi.getLoginInfo().then(res => {
                if (res.code == 20000) {
                    // console.log(res.data.list);
                    this.list = res.data.list;
                }
            });
        }
    }
};
</script>
<style lang='less' scoped>
.page {
    font-size: 16px;
}
</style>
