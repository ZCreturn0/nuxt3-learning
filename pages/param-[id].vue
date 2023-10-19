<template>
    <div class="param">
        id: {{ $route.params.id }}
        <nuxt-link to="/">index</nuxt-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    useHead({
        title: '路由传参',
        viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
        charset: "utf-8",
        meta: [
            {
                name: 'keywords',
                content: '测试,nuxt3,服务端渲染,路由传参'
            },
            {
                name: 'description',
                content: '用于测试nutx3服务端渲染路由传参'
            }
        ]
    });
    const route = useRoute();
    const id = ref(route.params.id);
    console.log(id.value);
</script>

<style scoped></style>
