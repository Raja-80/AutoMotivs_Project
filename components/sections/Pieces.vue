<template>


    <div class="container pb-20 ">

        <div class="flex flex-col justify-center items-start pb-16">


            <h1 class="text-black font-bold text-3xl text-center pb-16">
                {{ products.title }}
            </h1>

            <!-- Render content based on selectedIndex -->
            <!-- <div class="mt-8">
                <div v-if="selectedIndex !== null">
                    <div class="flex flex-wrap">
                        <div v-for="piece in pieces[selectedIndex].items" :key="piece.reference"
                            class="w-1/4 px-4 mb-4">
                            <div class="flex flex-col items-center">
                                <div>
                                    <img :src="piece.image" alt="Piece Image" class="w-46 h-46 object-contain mr-4 border border-gray-200">
                                </div>
                                <div class="flex flex-col items-start">
                                    <div class="font-semibold">{{ piece.descriptions }}</div>
                                    <div class="font-light text-gray-400">{{ piece.brand }}</div>
                                    <div class="font-light text-gray-400">Ref: {{ piece.reference }}</div>
                                    <div class="flex items-center">
                                        <div class="flex items-center">
                                            <span v-for="star in Math.floor(piece.review.rating)"
                                                class="text-yellow-400">★</span>
                                            <span v-if="piece.review.rating % 1 !== 0" class="text-yellow-400">½</span>
                                        </div>
                                        <div class="ml-2">{{ piece.review.rating }}</div>
                                        <div class="ml-2">{{ piece.review.reviews.length }} reviews</div>
                                    </div>

                                    <div class="text-sm">{{ piece.price }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos-anchor-placement="bottom-bottom">
                    <si-carousel component="si-product" :list="items"></si-carousel>
                </div>
            </div> -->


            <!-- <div class="mt-8">
                
                <div v-if="selectedPieceIndex !== null" class="flex flex-wrap">
                    <div v-for="(item, itemIndex) in pieces[selectedPieceIndex].items" :key="itemIndex"
                        class="w-1/4 px-4 mb-4">
                        <div class="flex flex-col items-center">
                            <div>
                                <img :src="item.image" alt="Piece Image"
                                    class="w-46 h-46 object-contain mr-4 border border-gray-200">
                            </div>
                            <div class="flex flex-col items-start">
                                <div class="font-semibold">{{ item.descriptions }}</div>
                                <div class="font-light text-gray-400">{{ item.brand }}</div>
                                <div class="font-light text-gray-400">Ref: {{ item.reference }}</div>
                                <div class="flex items-center">
                                    <div class="flex items-center">
                                        <span v-for="star in Math.floor(item.review.rating)"
                                            class="text-yellow-400">★</span>
                                        <span v-if="item.review.rating % 1 !== 0" class="text-yellow-400">½</span>
                                    </div>
                                    <div class="ml-2">{{ item.review.rating }}</div>
                                    <div class="ml-2">{{ item.review.reviews.length }} reviews</div>
                                </div>
                                <div class="text-sm">{{ item.price }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos-anchor-placement="bottom-bottom">
                    <si-carousel component="si-product" :list="items"></si-carousel>
                </div>
            </div> -->

            <!-- <div>
                Display titles of selected collections
                <div v-for="collection in selectedCollections" :key="collection.slug">
                    <h2>{{ collection.name }}</h2>
                    Carousel for products of the selected collection
                    <div class="carousel">
                        <div class="carousel-item" v-for="(item, index) in getFilteredProducts(collection.slug)"
                            :key="index">
                            Display product info
                            <div class="w-1/4 px-4 mb-4">
                                <div class="flex flex-col items-center">
                                    <div>
                                        <img :src="item.image" alt="Piece Image"
                                            class="w-46 h-46 object-contain mr-4 border border-gray-200">
                                    </div>
                                    <div class="flex flex-col items-start">
                                        <div class="font-semibold">{{ item.descriptions }}</div>
                                        <div class="font-light text-gray-400">{{ item.brand }}</div>
                                        <div class="font-light text-gray-400">Ref: {{ item.reference }}</div>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <span v-for="star in Math.floor(item.review.rating)"
                                                    class="text-yellow-400">★</span>
                                                <span v-if="item.review.rating % 1 !== 0"
                                                    class="text-yellow-400">½</span>
                                            </div>
                                            <div class="ml-2">{{ item.review.rating }}</div>
                                            <div class="ml-2">{{ item.review.reviews.length }} reviews</div>
                                        </div>
                                        <div class="text-sm">{{ item.price }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->


            <!-- <div>
                <div class="flex">
                    <div v-for="collection in selectedCollections" :key="collection.slug"
                        @click="selectCollection(collection.slug)" class="cursor-pointer mx-2">
                        <h2>{{ collection.name }}</h2>
                    </div>
                </div>
                <div v-for="collection in selectedCollections" :key="collection.slug">
                    <h2 v-if="collection.slug === selectedCollectionSlug">{{ collection.name }}</h2>
                    <div v-if="collection.slug === selectedCollectionSlug">

                        <div>
                            <div data-aos-anchor-placement="bottom-bottom">
                                <si-carousel component="si-product-cart" :list="getFilteredProducts(selectedCollectionSlug)"></si-carousel>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div> -->

        </div>

    </div>
</template>



<script>

export default {
    data() {
        return {

            selectedCollectionSlug: null,
            productItems: [],
            products: this.$settings.sections.products_per_collections,
            selectedCollections: []
        };
    },
    methods: {

        getFilteredProducts(collectionSlug) {
            return this.productItems.filter(item => item.collections.some(collection => collection.slug === collectionSlug));
        },
        // Select a collection
        selectCollection(collectionSlug) {
            this.selectedCollectionSlug = collectionSlug;
        }
    },
    async fetch() {
        try {
            const filter = {};

            const { data } = await this.$storeino.products.search(filter)
            this.productItems = data.results;

            if (this.$settings.products_per_collections.collections.length > 0) {
                this.selectedCollections = this.$settings.sections.products_per_collections.collections;
            } else {
                const { data } = await this.$storeino.collections.search(filter)
                this.selectedCollections = data.results;
            }

        } catch (e) {
            console.log({ e });
        }
        this.loading = false;

    }

}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}

.carousel {
    display: flex;
    flex-wrap: wrap;
}

.carousel-item {
    flex: 0 0 25%;
    max-width: 25%;
}
</style>
