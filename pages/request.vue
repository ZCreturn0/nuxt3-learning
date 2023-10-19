<template>
    <div class="request">
        <head>
            <title>{{ res.version }}</title>
            <meta name="description" :content="res.description" />
            <meta name="keywords" content="更新,信息,版本" />
        </head>
        请求
        <div>{{ res.description }}</div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    // const res = await useAsyncData('getVersion', () => {
    //     $fetch('https://2550505.com/version')
    // }, {
    //     lazy: true
    // });
    // console.log(res);
    const data = await useFetch('https://2550505.com/version');
    const res = ref(data.data._rawValue);
</script>

<style scoped></style>
