<template>
    <div class="headOne">
        <van-nav-bar
            :title="title"
            :isFixed="isFixed"
            left-text
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon v-show="rightIcon" name="shop-collect-o" slot="right"/>
        </van-nav-bar>
    </div>
</template>

<script>
import { NavBar } from "vant";
export default {
    name: "headOne",
    // props: ["title", "isFixed", "leftArrow"],
    props: {
        title: {
            type: String,
            default: ""
        },
        isFixed: {
            type: Boolean,
            default: false
        },
        leftArrow: {
            type: Boolean,
            default: false
        },
        rightIcon: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};
    },
    components: {
        vanNavBar: NavBar
    },
    created() {},
    mounted() {},
    methods: {
        onClickLeft() {
            this.$emit("onClickLeft");
        },
        onClickRight() {
            this.$emit("onClickRight");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.headOne {
    /deep/ .van-nav-bar {
        background-color: #f2f2f2;
    }
    /deep/ .van-nav-bar__title {
        font-size: 24px;
    }
    /deep/ .van-icon {
        font-size: 24px;
    }
}
</style>
