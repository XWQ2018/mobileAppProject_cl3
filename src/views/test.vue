<!--
 * @Description: $listeners  $attrr测试隔代传值
 * @Author: xwq
 * @Date: 2019-08-21 17:28:35
 * @LastEditTime: 2019-09-07 16:56:10
 -->
<template>
    <div class="tag">
        <div class="test">
            <aComponent :a="a" :b="b" :c="c" @upBackInfo="upBackInfoHandle" />
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
            a: 10,
            b: 20,
            c: 80,
            value: ""
        };
    },
    created() {},
    mounted() {},
    methods: {
        upBackInfoHandle() {
            this.a++;
            this.b--;
            console.log("$listeners成功");
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
