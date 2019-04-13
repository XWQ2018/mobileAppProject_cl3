<template>
    <div class="homePage">
        <h3>首页</h3>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to, from, "index");
        next();
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang='less' scoped>
.indexPage {
}
</style>
