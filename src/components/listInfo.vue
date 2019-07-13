<template>
    <div class="listInfo">
        <van-row class="list-content" tag="ul">
            <van-col
                tag="li"
                class="list-content-children"
                v-for="(item,key) in listArray"
                :key="key"
                @click.native="listHandle(key)"
            >
                <img class="pic-info" v-lazy="item" @click.prevent />
                <p class="text-info">西红柿</p>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    props: {
        listArray: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        listHandle(k) {
            this.$emit("listHandle", k);
        }
    }
};
</script>
<style lang="less" scoped>
.listInfo {
    .list-content {
        // background-color: #0f0;
        padding: 5px;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        .list-content-children:nth-child(1),
        .list-content-children:nth-child(2),
        .list-content-children:nth-child(3),
        .list-content-children:nth-child(4) {
            margin-top: 5px;
        }
        .list-content-children {
            width: 24%;
            padding: 5px;
            border-radius: 10px;
            background-color: #fff;
            margin: 0 0px 5px 1px;
            box-sizing: border-box;
            .pic-info {
                display: inline-block;
                min-width: 30px;
                max-width: 100%;
                min-height: 30px;
                max-height: 60px;
                //filter  css3图像过滤器
                // filter: blur(5px);//图片高斯模糊
                filter: brightness(120%); //提高高亮
                filter: contrast(120%); //提高对比度
                filter: drop-shadow(
                    8px 8px 10px rgb(210, 243, 20)
                ); //设置阴影效果
            }
            .text-info {
                font-size: 14px;
            }
        }
    }
}
</style>
