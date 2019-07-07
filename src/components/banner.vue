<template>
    <div class="page">
        <div class="banner">
            <van-swipe>
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-row span="24" class="fix-chunk"></van-row>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
    props: {
        list: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    data() {
        return {
            images: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg"
            ]
        };
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang="less" scoped>
.page {
    .banner {
        width: 100%;
        height: 200px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        /deep/ .van-swipe-item {
            & > img {
                height: 200px;
            }
        }
        &:after {
            content: "6666";
            display: block;
            width: 100%;
            visibility: hidden;
            margin-bottom: 10px;
        }
    }
    // .fix-chunk {
    // margin-top: 200px;
    // }
}
</style>
