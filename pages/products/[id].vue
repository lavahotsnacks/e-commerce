<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>`[id].vue` file</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>