<template>
    <nuxt-layout name="slots">
        <template #one>
            aaaaaaaaa
        </template>
        <template #two>
            bbbbbbbbbb
            <nuxt-link to="/">index</nuxt-link>
        </template>
    </nuxt-layout>
</template>

<script setup>
    import {} from 'vue';
    useHead({
        title: '多插槽',
        viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
        charset: "utf-8",
        meta: [
            {
                name: 'keywords',
                content: '测试,nuxt3,服务端渲染,多插槽'
            },
            {
                name: 'description',
                content: '用于测试nutx3服务端渲染多插槽'
            }
        ]
    });
</script>

<style scoped></style>
