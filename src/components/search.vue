<template>
    <div class="search">
        <van-cell-group>
            <van-field
                v-model="inputVal"
                center
                clearable
                left-icon="search"
                :laceholder="placeholderText"
                @focus="focusHandle"
            >
                <van-button
                    slot="button"
                    size="small"
                    type="primary"
                    @click="searchClick"
                >{{buttonText}}</van-button>
            </van-field>
        </van-cell-group>
        <div class="list-info" v-if="inputInfoStatus">
            <van-cell
                :title="item"
                is-link
                v-for="(item,key) in inputInfo"
                :key="key"
                @click="listInfoClick(item)"
            />
        </div>
    </div>
</template>
<script>
import { Field } from "vant";
import eventVue from "@/untils/eventVue"; //引入vue的构造函数
export default {
    props: {
        buttonText: {
            type: String,
            default: "搜索"
        },
        placeholderText: {
            type: String,
            default: "请输入搜索内容"
        }
    },
    components: {
        [Field.name]: Field
    },
    data() {
        return {
            inputVal: "",
            inputInfo: [],
            inputInfoStatus: false
        };
    },
    created() {},
    mounted() {},
    methods: {
        /**
         * @Description: 输入框获得焦点时展示历史记录
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-12 13:57:22
         */
        focusHandle() {
            this.inputInfoStatus = this.inputInfo ? true : false;
        },

        /**
         * @Description:
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-12 14:11:38
         */
        listInfoClick(item) {
            this.inputVal = item;
            this.inputInfoStatus = false;
        },

        /**
         * @Description: 搜索
         * @Param:
         * @Author: xwq
         * @LastEditors: xwq
         * @LastEditTime: Do not edit
         * @return:
         * @Date: 2019-07-12 11:42:48
         */
        searchClick() {
            if (!this.inputVal) return;
            eventVue.$emit("searchButton", this.inputVal);
            this.inputInfo.push(this.inputVal);
            this.inputInfoStatus = false;
        }
    }
};
</script>
<style lang="less" scoped>
.search {
}
</style>
