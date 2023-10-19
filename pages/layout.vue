<template>
    <nuxt-layout name="default">
        <div class="use-layout">use-layout</div>
        <nuxt-link to="/">index</nuxt-link>
    </nuxt-layout>
</template>

<script setup>
    import {} from 'vue';
    definePageMeta({
        middleware: ['default']
    });
    useHead({
        title: '布局',
        viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
        charset: "utf-8",
        meta: [
            {
                name: 'keywords',
                content: '测试,nuxt3,服务端渲染,布局'
            },
            {
                name: 'description',
                content: '用于测试nutx3服务端渲染布局'
            }
        ]
    });
</script>

<style scoped></style>
