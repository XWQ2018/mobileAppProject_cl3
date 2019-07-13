<!--
 * @Description: 头部组件
 * @Author: xwq
 * @Date: 2019-04-18 09:41:51
 -->
<template>
    <div class="headOne">
        <van-nav-bar
            :title="title"
            :isFixed="isFixed"
            :left-text="leftText"
            :right-text="rightText"
            :left-arrow="leftArrowStatus"
            :class="{backgroundTransparent:transparentStatus,'head-fixed':isFixed}"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon v-if="leftIcon" :name="leftIconName" slot="left" />
            <van-icon v-if="rightIcon" :name="rightIconName" slot="right" />
        </van-nav-bar>
        <van-row span="24" v-if="isFixed" class="fix-chunk"></van-row>
    </div>
</template>

<script>
import { NavBar } from "vant";
export default {
    name: "headOne",
    props: {
        title: {
            type: String,
            default: ""
        },
        isFixed: {
            type: Boolean,
            default: false
        },
        leftText: {
            type: String,
            default: ""
        },
        rightText: {
            type: String,
            default: ""
        },
        leftArrowStatus: {
            type: Boolean,
            default: false
        },
        leftIcon: {
            type: Boolean,
            default: false
        },
        rightIcon: {
            type: Boolean,
            default: false
        },
        leftIconName: {
            type: String,
            default: "bars"
        },
        rightIconName: {
            type: String,
            default: "shop-collect-o"
        },
        onClickLeftStatus: {
            type: Boolean
        },
        onClickRightStatus: {
            type: Boolean
        },
        isTransparent: {
            type: Boolean,
            default: false
        }
    },
    components: {
        [NavBar.name]: NavBar
    },
    data() {
        return {
            transparentStatus: false,
            backgroundTransparent: "background-transparent"
        };
    },
    created() {},
    mounted() {
        if (this.isTransparent) {
            this.transparentStatus = this.isTransparent;
        }
    },
    methods: {
        onClickLeft() {
            if (this.onClickLeftStatus) {
                this.$emit("leftMenuHandle");
            } else {
                this.$router.back();
            }
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
        background-color: #fff;
    }
    /deep/ .van-nav-bar__title {
        font-size: 18px;
    }
    /deep/ .van-icon {
        font-size: 20px;
    }
    .background-transparent {
        background-color: rgba(255, 255, 255, 0);
    }
    .head-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
    .fix-chunk {
        margin-top: 46px;
    }
}
</style>
