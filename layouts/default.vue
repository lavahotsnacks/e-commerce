<template>
    <div class="bg-candy-300 min-h-screen">
        <header class="shadow-sm bg-white">
            <nav class="bg-candy-200 mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="mangorangca font-bold">Mangorangca</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
// This can be empty, but ensures proper SFC structure
</script>

<style scoped>
    .router-link-exact-active {
        color: pink
    }
    .mangorangca {
        color: palevioletred
    }
</style>