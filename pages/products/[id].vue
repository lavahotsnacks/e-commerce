<template>
    <div>
        <p>Product details for {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    // Special composable function from Nuxt called definePageMeta
    definePageMeta({
        layout: 'products',
    })
</script>

<style scoped>

</style>