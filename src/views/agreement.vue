<!--
 * @Description: 协议内容
 * @Author: xwq
 * @Date: 2019-06-30 13:36:56
 -->
<template>
    <div class="page" v-once>
        <div class="main-container">
            <h1>
                {{title}}
                <van-icon name="cross" size="24px" @click="closeAgreement"></van-icon>
            </h1>
            <ul class="agreement-list text-left">
                <li v-for="(item,key) in agreementList" :key="key">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: this.$route.meta.title,
            agreementList: [
                "1、和覅哦我合肥发我哈覅哈佛王红封ip我该好好干",
                "2、凤凰网饿哦我和我改后为何篝火晚会购物给我个和我",
                "3、和范围广泛陪我发我发票我刚刚更换为评估和品位合格品位和",
                "4、排污管和我给我个物品更换为苹果给我个",
                "5、评估范围广为评估和物品更换为合格品味工行王红苹果"
            ]
        };
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * @Description: 关闭协议页面
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-06-30 14:01:27
         */

        closeAgreement() {
            this.$router.push({
                name: "login"
            });
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .main-container {
        & h1 {
            padding: 10px 0;
            font-size: 18px;
            font-weight: bold;
            position: relative;
            /deep/ .van-icon,
            .van-icon::before {
                position: absolute;
                right: 0;
                background-color: #f2f2f2;
            }
        }
        .agreement-list {
            & > li {
                padding: 10px;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
}
</style>
