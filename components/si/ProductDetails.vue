<template>
    <div class="flex flex-row items-start my-4">
        <nuxt-link :to="`/products/${item.slug}`" class="w-1/4">
            <nuxt-link :to="`/products/${item.slug}`">
                <nuxt-img class="w-44 h-44 object-contain mr-4 border border-gray-200"
                    :src="item.images[0] != null ? item.images[0].src : 'https://storeno.b-cdn.net/stores/2-2024/1707849131189.png'"
                    alt="piece" />
            </nuxt-link>
            <!-- <img :src="item.images[0]" alt="item Image" class="w-44 h-44 object-contain mr-4 border border-gray-200"> -->
        </nuxt-link>
        <nuxt-link :to="`/products/${item.slug}`" class="flex flex-col items-start w-2/4">
            <div class="font-bold text-gray-900">{{ item.name }}</div>
            <div class="font-semibold">{{ item.descriptions }}</div>
            <div class="font-light text-gray-400">{{ item.brand.name }}</div>
            <div class="font-light text-gray-400">Ref: {{ item.reference }}</div>
            <div class="flex items-center">

                <div class="mr-2 text-gray-400">{{ item.review.rating }}</div>

                <div class="flex items-center mr-2">
                    <span v-for="star in Math.floor(item.review.rating)" class="text-yellow-400">★</span>
                    <span v-if="item.review.rating % 1 !== 0" class="text-yellow-400">½</span>
                </div>

                <div class="ml-2 text-gray-400">( {{ item.review.reviews.length }} )</div>
            </div>


        </nuxt-link>
        <div class="w-1/4">
            <div class="text-base font-bold text-center text-black">{{ item.price.salePrice }}</div>
            <div @click="addToCart"
                class="bg-red-500 text-white font-mesuim hover:bg-red-100 text-center cursor-pointer py-1 mt-3 font-meduim">
                Add To Cart
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    },

    data() {
        return {

        }
    },

    methods: {
        addToCart() {
            let item = {
                _id: this.item._id,
                quantity: this.quantity.value ? this.quantity.value : this.item.quantity.default,
                price: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                variant: this.variant ? { _id: this.variant._id } : null,
                upsell: this.upsell
            };
            this.$tools.call('ADD_TO_CART', item);
            this.$tools.toast(this.$settings.sections.alerts.added_to_cart);
            this.added = true;
            if (this.$settings.sections.products.add_to_cart_to_checkout) {
                setTimeout(() => {
                    window.location.href = '/checkout2';
                }, 500);
            }
            setTimeout(() => {
                this.added = false;
            }, 2000);
            this.$storeino.fbpx('AddToCart', {
                content_name: this.item.name,
                content_ids: [this.item._id],
                content_type: "product",
                value: this.variant ? this.variant.price.salePrice : this.item.price.salePrice,
                currency: this.$store.state.currency && this.$store.state.currency.code ? this.$store.state.currency.code : "USD"
            })
        },

    },
}
</script>

<style></style>