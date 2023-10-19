<template>
    <div class="cookie">
        <div>counter: {{ counter }}</div>
        <button @click="reset">reset</button>
        <button @click="add">add</button>
        <br>
        <nuxt-link to="/">index</nuxt-link>
    </div>
</template>

<script setup>
    import {} from 'vue';
    const counter = useCookie('counter');
    counter.value = counter.value || 0;
    function reset() {
        counter.value = 0;
    }
    function add() {
        counter.value += 1;
    }
</script>

<style scoped></style>
