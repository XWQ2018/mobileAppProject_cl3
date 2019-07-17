<!--
 * @Description: 按钮组件
 * @Author: xwq
 * @Date: 2019-06-17 09:26:04
 -->
<template>
    <div class="page">
        <div class="main-container">
            <div :class="{fixed:isFixed}">
                <van-button
                    native-type="button"
                    :type="typeInfo"
                    :size="buttonSize"
                    :icon="leftIcon"
                    :text="buttonText"
                    :isFixed="isFixed"
                    :disabled="isDisabled"
                    @click="clickButton"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: "确定"
        },
        isFixed: {
            type: Boolean,
            default: false
        },
        buttonSize: {
            type: String,
            default: "large"
        },
        leftIcon: {
            type: String
        },
        typeInfo: {
            type: String,
            default: "info"
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    created() {},
    mouted() {},
    methods: {
        clickButton() {
            this.$emit("clickButton");
        }
    }
};
</script>
<style lang="less" scoped>
.page {
    .main-container {
        padding: 0;
        .fixed {
            position: fixed;
            right: 0;
            left: 0;
            bottom: 15px;
            padding: 20px;
        }
    }
}
</style>


