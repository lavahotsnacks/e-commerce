<template>
    <main>
        <section class="bg-[#d7cee8]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-1 order-2 lg:order-1 text-center">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                        Browse products with this cute colored website: An alternative to browsing your usual e-commerce sites.
                    </h1>
                    <p class="text-xl lg:text-2xl mb-8 text-balance">
                        Discover new products with my own personal algorithm (no algorithm yet).
                    </p>
                    <NuxtLink to="/products">
                        <button class="px-4 py-2 text-white self-start bg-pink-800 rounded-md text-lg cursor-pointer">
                            Browse Products
                        </button>
                    </NuxtLink>
                </div>
                <div class="flex-1 order-1 lg:order-2">
                    <NuxtImg
                        src="/new-product.png"
                        sizes="xs:100vw sm:200vw md:300vw lg:400vw xl:512vw"
                        format="webp"
                        densities="x1"
                        alt=""
                    />
                </div>
            </div>
        </section>

        <section class="py-20 container">
            <h2 class="text-3xl lg:text-5xl mb-2">The goods</h2>
            <p class="text-lg lg:text-xl mb-8">Check out our most popular products!</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <div
                    v-for="product in data?.products || []"
                    :key="product.id"
                    class="flex flex-col shadow rounded-md p-4 bg-white"
                >
                    <NuxtImg 
                        :src="product.thumbnail"
                        sizes="xs: 50vw, sm: 100vw, lg: 200px"
                        :format="'webp'"
                        :densities="'x1'"
                        alt="Product image"
                        class="rounded-t-md"
                    />
                    <h3 class="text-pink-600 font-bold text-xl mb-2">{{ product.title }}</h3>
                    <p class="text-purple-800 mb-2">{{ product.description }}</p>
                    <span class="text-pink-800 font-semibold mb-4">${{ product.price }}</span>
                    <NuxtLink
                    :to="`/products/${product.id}`"
                    class="mt-auto px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
                        View Product
                    </NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { type ProductResponse } from "../types/types";
const { data, error } = await useFetch<ProductResponse>('https://dummyjson.com/products?limit=12');
</script>