<!--
 * @Description: Description
 * @Author: xwq
 * @Date: 2019-08-21 17:28:35
 -->
<template>
    <div class="tag">
        <div class="test">
            <van-button type="primary" class="test-btn" @click="clickHandle">节流测试</van-button>
            <p class="desc-text">{{num}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0
        };
    },
    created() {},
    mounted() {},
    methods: {
        clickHandle() {
            setTimeout(() => {
                this.num++;
            }, 1000);
        }
    }
};
</script>
<style lang="less" scoped>
.tag {
    .test-btn {
        margin-top: 50px;
    }
    .desc-text {
        color: #f00;
        font-size: 26px;
        margin-top: 50px;
    }
}
</style>
