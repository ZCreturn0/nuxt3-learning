<template>
    <div>
        <div class="parent">parent</div>
        <nuxt-page />
        <nuxt-link to="/">index</nuxt-link>
        <br>
        <nuxt-link to="/parent/child1">/parent/child1</nuxt-link>
        <nuxt-link to="/parent/child2">/parent/child2</nuxt-link>
    </div>
</template>

<script setup>
    /**
     * 嵌套路由，父组建的组件名与子组建的文件夹名一致
     */
    import {} from 'vue'
</script>

<style scoped></style>
