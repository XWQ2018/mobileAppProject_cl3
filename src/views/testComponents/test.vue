<!--
 * @Description: $listeners  $attrr测试隔代传值
 * @Author: xwq
 * @Date: 2019-08-21 17:28:35
 * @LastEditTime: 2019-09-09 10:48:14
 -->
<template>
    <div class="page">
        <div class="test">
            <aComponent :a="a" :b="b" :c="c" @upBackInfo="upBackInfoHandle" />
        </div>
        <div class="container">
            <div class="content-cntainer">
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
            currentMoveDistance: "",
            copyMoveDistance: 0,
            copyStartX: ""
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
                let count = 0;
                let contentWidth = getComputedStyle(ul).width;
                console.log(contentWidth);

                document.addEventListener("touchstart", e => {
                    console.log(e.target.innerText);
                    console.log("touchstart", e.targetTouches[0].pageX);
                    this.startX = e.targetTouches[0].pageX.toFixed(2);
                });
                document.addEventListener("touchmove", e => {
                    this.endX = e.targetTouches[0].pageX.toFixed(2);
                    this.currentMoveDistance = this.endX - this.startX;

                    if (this.currentMoveDistance > 0) {
                        this.moveStyle = {
                            transform: `translate3d(${this.copyMoveDistance +
                                this.currentMoveDistance}px,0px, 0px)`
                        };
                    } else {
                        this.moveStyle = {
                            transform: `translate3d(${this.currentMoveDistance}px,0px, 0px)`
                        };
                    }
                });
                document.addEventListener("touchend", e => {
                    /* "transition-duration": "200ms" */
                    let moveStatus =
                        this.currentMoveDistance > 0 ? true : false;
                    this.copyStartX = this.startX; //备份起点位置
                    this.copyMoveDistance =
                        this.copyMoveDistance + this.currentMoveDistance;
                    count++;
                    if (this.copyMoveDistance >= 180 && moveStatus) {
                        this.moveStyle = {
                            transform: `translate3d(180px,0px, 0px)`
                        };
                    } else {
                    }
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
        .content-cntainer {
            margin-top: 50px;
            overflow: hidden;
            user-select: none;
            .content {
                width: 2000px;
                height: 50px;
                transform: translate3d(0px, 0px, 0px);
                transition-duration: 0ms;
                transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
                -webkit-overflow-scrolling: touch;
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
}
</style>
