<!-- doesn't have to be called products, does not need to match the products pages, just it is more descriptive -->

<!-- instead of copy pasting the Nav bar on every page at the pages folder, because let's say whenever we have a change in the Nav bar, we'd have to change it on every pages in the pages folder that has it. -->

<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Mangorangca Merch</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div>
            <slot />
            <!-- slot is a built in Nuxt component, this is where page content will go -->
        </div>

        <footer>
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
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: red;
    }
</style>