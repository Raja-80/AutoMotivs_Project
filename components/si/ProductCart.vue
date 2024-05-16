<template>
    <div>
        <div class="flex flex-col items-center">
            <div>
                <nuxt-img :src="item.images[0]" alt="Piece Image"
                    class="w-46 h-46 object-contain mr-4 border border-gray-200" />
            </div>
            <div class="flex flex-col items-start">
                <div class="font-semibold">{{ item.descriptions }}</div>
                <div class="font-light text-gray-400">{{ item.brand.name }}</div>
                <div class="font-light text-gray-400">Ref: {{ item.reference }}</div>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <span v-for="star in Math.floor(item.review.rating)" class="text-yellow-400">★</span>
                        <span v-if="item.review.rating % 1 !== 0" class="text-yellow-400">½</span>
                    </div>
                    <div class="ml-2">{{ item.review.rating }}</div>
                    <div class="ml-2">{{ item.review.reviews.length }} reviews</div>
                </div>
                <div class="text-sm">{{ item.price.salePrice }} {{ $store.state.currency.symbol }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {


    },
}
</script>

<style></style>