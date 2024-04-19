<template>


    <div class="container pb-20 ">

        <div class="flex flex-col justify-center items-start pb-16">


            <h1 class="text-black font-bold text-3xl text-center pb-16">
                LES PIECES LES PLUS RECHERCHEES
            </h1>

            <!-- Render selectionTitles -->
            <div class="flex">
                <div v-for="(item, index) in selectionTitles" :key="index" class="mr-4">
                    <div @click="selectTitle(index)"
                        :class="selectedIndex === index ? 'font-semibold text-black cursor-pointer' : 'font-normal text-gray-600 cursor-pointer'">
                        {{ item.title }}
                    </div>
                </div>
            </div>

            <!-- Render content based on selectedIndex -->
            <div class="mt-8">
                <div v-if="selectedIndex !== null">
                    <div class="flex flex-wrap">
                        <div v-for="piece in pieces[selectedIndex].items" :key="piece.reference"
                            class="w-1/5 px-4 mb-4">
                            <div class="flex items-center">
                                <div>
                                    <img :src="piece.image" alt="Piece Image" class="w-16 h-16 object-contain mr-4">
                                </div>
                                <div>
                                    <div class="font-semibold">{{ piece.brand }}</div>
                                    <div class="text-sm">{{ piece.price }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>



<script>

export default {
    data() {
        return {

            selectionTitles: [

                {
                    title: 'Moteur et Transmission',
                },
                {
                    title: 'Suspension et Direction',
                },
                {
                    title: 'Accessiores',
                },
                {
                    title: 'Électronique',
                },
                {
                    title: 'Freins & Roues',
                },
                {
                    title: 'Echappement',
                },
                {
                    title: 'Éclairage ',
                },
                {
                    title: 'Carrosserie et Intérieur',
                },
                {
                    title: 'Thermique & Cèlimatisation',
                },
                {
                    title: 'Roues & Pneus',
                },

            ],

            selectedIndex: 0,

            pieces: [
                {
                    title: 'Moteur et Transmission',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Suspension et Direction',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Accessiores',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Électronique',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Freins & Roues',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Echappement',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Éclairage',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Carrosserie et Intérieur',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Thermique & Cèlimatisation',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                },
                {
                    title: 'Roues & Pneus',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                    ]
                }

            ],

            // pieces: [

            //     {
            //         image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
            //         title: 'Moteur et Transmission',
            //         brand: 'jeep cherokee 11 PHASE 1',
            //         reference: 65479753222,
            //         review: {
            //             reviews: [
            //                 "65adf65163a3bd8a8785736e",
            //                 "65adf67463a3bd8a87857381"
            //             ],
            //             rating: 3.5
            //         },
            //         price: '1200.00 DH'

            //     },
            //     {
            //         image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
            //         title: 'Moteur et Transmission',
            //         brand: 'jeep cherokee 11 PHASE 1',
            //         reference: 65479753222,
            //         review: {
            //             reviews: [
            //                 "65adf65163a3bd8a8785736e",
            //                 "65adf67463a3bd8a87857381"
            //             ],
            //             rating: 3.5
            //         },
            //         price: '1200.00 DH'
            //     },
            //     {
            //         image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
            //         title: 'Moteur et Transmission',
            //         brand: 'jeep cherokee 11 PHASE 1',
            //         reference: 65479753222,
            //         review: {
            //             reviews: [
            //                 "65adf65163a3bd8a8785736e",
            //                 "65adf67463a3bd8a87857381"
            //             ],
            //             rating: 3.5
            //         },
            //         price: '1200.00 DH'
            //     },
            //     {
            //         image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
            //         title: 'Moteur et Transmission',
            //         brand: 'jeep cherokee 11 PHASE 1',
            //         reference: 65479753222,
            //         review: {
            //             reviews: [
            //                 "65adf65163a3bd8a8785736e",
            //                 "65adf67463a3bd8a87857381"
            //             ],
            //             rating: 3.5
            //         },
            //         price: '1200.00 DH'
            //     },
            // ]

        };
    },

}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>


<!-- 

    <template>
    <div v-if="fleets.active" class="container pb-40 pt-20 ">

        <div v-if="fleets.show_title" class="flex flex-col justify-center items-center lg:pb-28 lg:px-80 px-10">
            <h1 data-aos="fade-up" class="text-black font-semibold text-3xl text-center">
                {{ fleets.title }}
            </h1>

            <p data-aos="fade-up" v-if="fleets.show_under_title"
                class="text-gray-400 font-normal italic font-serif text-lg pb-8">
                {{ fleets.under_title }}
            </p>

            <p data-aos="fade-up" v-if="fleets.show_description"
                class="text-black text-center text-sm font-light leading-loose">
                {{ fleets.description }}
            </p>

        </div>


        <div v-if="fleets.cars"  data-aos-anchor-placement="bottom-bottom" >
            <si-carousel component="si-car" :list="fleets.cars"></si-carousel>
        </div>

    </div>
</template>
  
<script>

export default {
    data() {
        return {
            fleets: this.$settings.sections.fleets,
        };
    },

}
</script>
  
<style>
.bg {
    background-color: #f7f7f7;
}
</style>
  

 -->