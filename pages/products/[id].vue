<template>
  <div class="flex flex-col max-w-screen-lg container py-20">
    <!-- Header -->
    <div class="flex flex-col mb-6">
      <h2 class="text-5xl mb-4 font-semibold text-pink-700">{{ data?.title }}</h2>
      <div class="flex gap-4 text-xl mb-6">
        <div class="flex items-center gap-1">
          <span class="font-bold text-pink-700">Brand:</span>
          <span class="text-purple-800">{{ data?.brand }}</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="font-bold text-pink-700">Category:</span>
          <span class="text-purple-800">{{ data?.category }}</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="font-bold text-pink-700">Stock:</span>
          <span class="text-purple-800">{{ data?.stock }}</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="font-bold text-pink-700">Rating:</span>
          <span class="text-purple-800">{{ data?.rating }}</span>
        </div>
      </div>
      <hr />
    </div>

    <!-- Image Gallery -->
    <NuxtImg
      :src="data?.thumbnail"
      densities="x1"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-8"
      alt="Main product image"
    />
    <div class="flex gap-2 mb-12">
      <NuxtImg
        v-for="(img, i) in data?.images"
        :key="i"
        :src="img"
        densities="x1"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        class="w-20 h-20 object-cover rounded shadow"
        alt="Product gallery image"
      />
    </div>

    <!-- Product Details -->
    <div class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Description</h2>
      <p class="text-lg text-purple-800 mb-2">{{ data?.description }}</p>
      <div class="flex flex-wrap gap-4 mt-4">
        <span class="bg-pink-100 text-pink-700 px-2 py-1 rounded">SKU: {{ data?.sku }}</span>
        <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded">Price: ${{ data?.price }}</span>
        <span class="bg-green-100 text-green-700 px-2 py-1 rounded">Discount: {{ data?.discountPercentage }}%</span>
        <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Availability: {{ data?.availabilityStatus }}</span>
      </div>
    </div>

    <!-- Tags -->
    <div v-if="data?.tags?.length" class="mb-8">
      <h2 class="text-2xl font-semibold mb-2">Tags</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in data.tags" :key="tag" class="bg-gray-200 text-gray-700 px-2 py-1 rounded">{{ tag }}</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { type Product } from '../../types/types'
const { id } = useRoute().params

definePageMeta({
  layout: 'products',
})

const { data, error } = await useFetch<Product>(`https://dummyjson.com/products/${id}`)
</script>