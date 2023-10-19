<template>
    <div class="index">
        index
        {{ time }}
        <!-- 多层级组建引用时需要把文件夹名加上 -->
        <!-- wrapper 为文件夹名，print 为文件名 -->
        <wrapper-print />
        <nuxt-link to="/page1">page1</nuxt-link>
        <br>
        <nuxt-link to="/param-5">id: 5</nuxt-link>
        <br>
        <nuxt-link to="/multi-param-aaa/param-11">id: 11, name: aaa</nuxt-link>
        <br>
        <nuxt-link to="/parent/child1">parent</nuxt-link>
        <br>
        <nuxt-link to="/layout">layout</nuxt-link>
        <br>
        <nuxt-link to="/multi-slots">multi-slots</nuxt-link>
        <br>
        <nuxt-link to="/lazy">懒加载</nuxt-link>
        <br>
        <nuxt-link to="/request">请求</nuxt-link>
        <br>
        <nuxt-link to="/cookie">cookie</nuxt-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    useHead({
        title: '测试',
        viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
        charset: "utf-8",
        meta: [
            {
                name: 'keywords',
                content: '测试,nuxt3,服务端渲染'
            },
            {
                name: 'description',
                content: '用于测试nutx3服务端渲染'
            }
        ]
    });
    const time = ref(now());
</script>

<style scoped></style>
