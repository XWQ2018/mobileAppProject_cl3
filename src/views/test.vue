<!--
 * @Description: 测试组件
 * @Author: xwq
 * @Date: 2019-08-21 17:28:35
 * @LastEditTime: 2019-09-07 11:41:49
 -->
<template>
    <div class="tag">
        <div class="test">
            <van-button type="primary" class="test-btn" @click="clickHandle">测试</van-button>
            <!-- <p class="desc-text">{{num}}</p> -->
            <aComponent :num="num" :a="a" :b="b" v-on="$listeners" />
            <input @input="input" v-model="value" placeholder="请输入内容" />
        </div>
    </div>
</template>
<script>
import checkComponent from "./a";
export default {
    components: {
        aComponent: checkComponent
    },
    data() {
        return {
            num: 0,
            a: 10,
            b: 20,
            value: ""
        };
    },
    created() {},
    mounted() {
        console.log(this);
    },
    methods: {
        test() {
            this.a++;
        },
        input() {
            console.log(this.value);
        },
        clickHandle() {
            this.a++;
            this.b--;
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
