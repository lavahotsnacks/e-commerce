<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="bg-candy-200 mx-auto p-4 flex justify-between">
                <NuxtLink to="/" :class="[Mangorangca, hoverNavClass]">Mangorangca</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" :class="hoverNavClass" :exact-active-class="activeNavClass">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" :class="hoverNavClass" :exact-active-class="activeNavClass">About</NuxtLink></li>
                    <li><NuxtLink to="/products" :class="hoverNavClass" :exact-active-class="activeNavClass">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
const activeNavClass = 'text-pink-400 font-bold'
const Mangorangca = 'text-pink-800 font-bold'
const hoverNavClass = 'hover:text-pink-600'
</script>