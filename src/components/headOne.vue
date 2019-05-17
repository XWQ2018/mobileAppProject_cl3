<template>
    <div class="headOne">
        <van-nav-bar
            :title="title"
            :isFixed="isFixed"
            :left-text="leftText"
            :right-text="rightText"
            :left-arrow="leftArrow"
            :class="backgroundTransparent"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
            <van-icon v-show="rightIcon" :name="iconName?iconName:'shop-collect-o'" slot="right"/>
        </van-nav-bar>
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
        leftArrow: {
            type: Boolean,
            default: true
        },
        rightIcon: {
            type: Boolean,
            default: false
        },
        iconName: {
            type: String
        },
        onClickLeftStatus: {
            type: Boolean
        },
        onClickRightStatus: {
            type: Boolean
        },
        transparentStatus: {
            type: Boolean,
            default: false
        }
    },
    components: {
        [NavBar.name]: NavBar
    },
    data() {
        return {
            backgroundTransparent: "background-transparent"
        };
    },
    created() {},
    mounted() {
        if (this.transparentStatus) {
        }
    },
    methods: {
        onClickLeft() {
            if (this.onClickLeftStatus) {
                this.$emit("onClickLeft");
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
        font-size: 20px;
    }
    /deep/ .van-icon {
        font-size: 20px;
    }
    .background-transparent {
        background-color: rgba(255, 255, 255, 0);
    }
}
</style>
