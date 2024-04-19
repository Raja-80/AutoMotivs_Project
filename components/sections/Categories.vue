<template>
    <div class="container pb-20 ">

        <div data-aos="fade-up" class="flex flex-col justify-center items-start pb-16">
            <h1 class="text-black font-bold text-3xl text-center">
                LES CATEGORIES PLUS POPULAIRES
            </h1>
        </div>


        <div>

            <!-- Render selectionTitles -->
            <div class="flex">
                <div v-for="(item, index) in selectionTitles" :key="index" class="mr-4">
                    <div @click="selectTitle(index)"
                        :class="selectedIndex === index ? 'font-semibold text-black cursor-pointer' : 'font-normal text-gray-600 cursor-pointer'">
                        
                    </div>
                </div>
            </div>

            <!-- Render contentAreas based on selectedIndex -->
            <div class="mt-8 ">
                <div v-if="selectedIndex !== null">
                    <div v-for="(area, areaIndex) in selectionTitles[selectedIndex].contentAreas" :key="areaIndex">
                        <div v-if="areaIndex % 5 === 0" class="flex flex-wrap mb-4">
                            <div class="w-1/5 px-4" v-for="i in 5" :key="i + areaIndex">
                                <div v-if="selectionTitles[selectedIndex].contentAreas[areaIndex + i - 1]">
                                    <div class="flex items-center">
                                        <div>
                                            <img :src="selectionTitles[selectedIndex].contentAreas[areaIndex + i - 1].image"
                                                alt="Area Image" class="w-16 h-16 object-contain mr-4">
                                        </div>
                                        <div>
                                            <div class="font-semibold">{{
                                                selectionTitles[selectedIndex].contentAreas[areaIndex + i - 1].title }}
                                            </div>
                                            <div class="text-sm">{{
                                                selectionTitles[selectedIndex].contentAreas[areaIndex + i -
                                                    1].description }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-8">
                <div >
                    <div v-for="(item, index) in items" :key="index">
                        <div v-if="index % 5 === 0" class="flex flex-wrap mb-4">
                            <div class="w-1/5 px-4" v-for="i in 5" :key="i + index">
                                <div v-if="items[index + i - 1]">
                                    <div class="flex items-center">
                                        <div>
                                            <img :src="items[index + i - 1].image.src" alt="Area Image"
                                                class="w-16 h-16 object-contain mr-4">
                                        </div>
                                        <div>
                                            <div class="font-semibold">{{ items[index + i - 1].name }}</div>
                                            <div class="text-sm">{{ items[index + i - 1].description }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

        </div>

        <!-- <div class="flex flex-wrap justify-center ">

            <div class="flex items-center gap-3 lg:gap-5 w-full md:w-1/2 lg:w-1/4 lg:mx-4 my-4">

                <nuxt-img  class="h-20 mb-6 pl-4"
                    :src="$store.state.defaults.logo" alt="company logo" />

                <p class=" text-xl text-gray-400 pr-14">

                </p>

            </div>

        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectionTitles: [
                {
                    title: 'Voitures',
                    contentAreas: [
                        {
                            title: 'Accessiores',
                            description: '(28 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712327762938.png'
                        },
                        {
                            title: 'Électronique',
                            description: '(80 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712327762909.png'
                        },
                        {
                            title: 'Freins & Roues',
                            description: '(34 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png'
                        },
                        {
                            title: 'Echappement',
                            description: '(54 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325030646.png'
                        },
                        {
                            title: 'Éclairage ',
                            description: '(14 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325030621.png'

                        },
                        {
                            title: 'Moteur et Transmission',
                            description: '(34 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029775.png'
                        },
                        {
                            title: 'Suspension et Direction',
                            description: '(78 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712327762881.png'
                        },
                        {
                            title: 'Carrosserie et Intérieur',
                            description: '(55 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325030503.png'

                        },
                        {
                            title: 'Thermique & Cèlimatisation',
                            description: '(34 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712327762938.png'

                        },
                        {
                            title: 'Roues & Pneus',
                            description: '(87 Articles)',
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029704.png'

                        },

                    ],
                },
            ],

            selectedIndex: 0,
            items: this.$settings.sections.collections.items,
            collectionsItems: []
        };
    },

    methods: {
        selectTitle(index) {
            this.selectedIndex = index;
        }
    },

    async fetch() {
        try {
            const filter = {};
            if (this.$settings.sections.collections.items.length > 0) {
                this.collectionsItems = this.$settings.sections.collections.items;
            } else {
                const { data } = await this.$storeino.collections.search(filter)
                this.collectionsItems = data.results;
            }
        } catch (e) {
            console.log({ e });
        }
        this.loading = false;
    }
}
</script>

<style></style>