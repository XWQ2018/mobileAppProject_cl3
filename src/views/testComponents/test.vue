<!--
 * @Description: $listeners  $attrr测试隔代传值
 * @Author: xwq
 * @Date: 2019-08-21 17:28:35
 * @LastEditTime: 2019-09-07 18:25:46
 -->
<template>
    <div class="page">
        <div class="test">
            <aComponent :a="a" :b="b" :c="c" @upBackInfo="upBackInfoHandle" />
        </div>
        <div class="container">
            <ul class="content" ref="content" :style="moveStyle">
                <li class="content-item">1</li>
                <li class="content-item">2</li>
                <li class="content-item">3</li>
                <li class="content-item">4</li>
                <li class="content-item">5</li>
                <li class="content-item">6</li>
                <li class="content-item">7</li>
                <li class="content-item">8</li>
                <li class="content-item">9</li>
            </ul>
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
            value: "",
            contentWidth: "",
            startX: "",
            endX: "",
            moveStyle: {
                transform: "translate3d(0px, 0px, 0px)"
            },
            startVal: 55
        };
    },
    created() {},
    mounted() {
        this.init();
    },
    methods: {
        upBackInfoHandle(index) {
            this.a++;
            this.b--;
            console.log("$listeners成功", index);
        },
        init() {
            this.$nextTick(() => {
                let ul = this.$refs.content;
                // let ul = document.querySelector(".content");
                let contentWidth = getComputedStyle(ul).width;
                console.log(contentWidth);

                document.addEventListener("touchstart", e => {
                    console.log(e.target.innerText);
                    console.log("touchstart", e.targetTouches[0].pageX);
                    this.startX = e.targetTouches[0].pageX;
                });
                document.addEventListener("touchmove", e => {
                    console.log("touchmove", e.targetTouches[0].pageX);
                    this.endX = e.targetTouches[0].pageX;
                    let moveDistance = this.endX - this.startX;
                    console.log(moveDistance); /* startVal */
                    /*  if (moveDistance > 0) {
                        this.moveStyle = {
                            transform: `translate3d(${this.startVal}px,0px, 0px)`
                        };
                    } else {
                        this.moveStyle = {
                            transform: `translate3d(-${this.startVal}px,0px, 0px)`
                        };
                    } */
                    this.moveStyle = {
                        transform: `translate3d(${moveDistance}px,0px, 0px)`
                    };
                });
                document.addEventListener("touchend", e => {
                    /* "transition-duration": "200ms" */
                    console.log("touchend", e);
                });
            });
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .container {
        margin-top: 50px;
        overflow: hidden;
        user-select: none;
        .content {
            width: 2000px;
            height: 50px;
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0ms;
            .content-item {
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                line-height: 50px;
                float: left;
            }
        }
    }
}
</style>
