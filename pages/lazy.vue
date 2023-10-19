<template>
    <div class="lazy">
        aaaaaaaa
        <!-- 注意：引用懒加载组建 lazy 必须小写，且后续单词首字母大写 -->
        <lazyText />
    </div>
</template>

<script setup>
    import {} from 'vue';
    useHead({
        title: '懒加载',
        viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
        charset: "utf-8",
        meta: [
            {
                name: 'keywords',
                content: '测试,nuxt3,服务端渲染,懒加载'
            },
            {
                name: 'description',
                content: '用于测试nutx3服务端渲染懒加载'
            }
        ]
    });
</script>

<style scoped></style>
