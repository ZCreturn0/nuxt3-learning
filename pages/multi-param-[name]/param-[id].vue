<template>
    <div class="multi">
        <div>name: {{ $route.params.name }}</div>
        <div>id: {{ $route.params.id }}</div>
        <br>
        <nuxt-link to="/">index</nuxt-link>
    </div>
</template>

<script setup>
    import {} from 'vue'
</script>

<style scoped></style>
