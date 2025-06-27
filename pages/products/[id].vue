<template>
    <div>
        <p>Product details for {{ id }}</p>
    </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params
    // Special composable function, or a macro, from Nuxt called definePageMeta
    definePageMeta({
        layout: 'products',
    })
</script>