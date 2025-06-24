<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">E-commerce</NuxtLink>
                <ul>
                    <p>These links are NuxtLinks, less traffic on Network (no requests to the server)</p>
                     <!-- instead of anchor tag like <a href=""></a>, we use nuxt component called nuxt link -->
                    <!-- we use nuxtlink instead of anchor tag to be more efficient, so it would act like a SPA, no requests to the server-->
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <!-- No need to import it as Nuxt does it automatically -->
                    <!-- prop "to" -->
                </ul>
                <a href="/about">normal link - about page</a>
            </nav>
        </header>
        <h1>About</h1>
        <p>This page contains nothing</p>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>