<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Mangorangca</NuxtLink>
                <ul class="flex gap-4">
                     <!-- instead of anchor tag like <a href=""></a>, we use nuxt component called nuxt link -->
                    <!-- we use nuxtlink instead of anchor tag to be more efficient, so it would act like a SPA, no requests to the server-->
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
            <!-- slot is a built in Nuxt component, this is where page content will go -->
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: red;
    }
</style>