<!-- <template>
    <div class="container pt-20 pb-20">
        <div class="w-full flex flex-row">
            <div class="w-1/3 flex flex-col">
                <div class="w-full border-1 border-gray-200">
                    <div>
                        <div
                            class=" px-2 flex lg:flex-row flex-col justify-around bg-white lg:items-center items-start w-full">
                            <button @click="changeTitle('Véhicle')" :class="{
                                'border-b-2 font-semibold border-black text-black ':
                                    selectedTitle === 'Véhicle',
                            }" class="hover:text-gray-300 text-black font-semibold py-5 px-4 ">
                                Pièce
                            </button>
                            <div class="border-r border-gray-300"></div>
                            <button @click="changeTitle('Référence')" :class="{
                                'border-b-2 font-semibold border-black text-black ':
                                    selectedTitle === 'Référence',
                            }" class="hover:text-gray-300 text-black font-semibold py-5 px-4">
                                Référence
                            </button>
                        </div>

                        <div class="w-full bg-white p-4 px-6">
                            <div v-if="selectedTitle === 'Véhicle'" class="">
                                <div>
                                    <form id="form" class=" flex flex-col justify-center items-Start">
                                        <div class="flex flex-col justify-start items-start">

                                            <div class="pb-5 w-full border-b border-gray-300 font-semibold text-sm">
                                                Rechercher une pièce
                                                <div
                                                    class="border border-gray-300 font-normal py-3 pl-2 text-gray-300 text-sm">
                                                    Example: Moteur, Port, Carrosserie...
                                                </div>

                                            </div>


                                            <div class="py-3 w-full">

                                                <div class="relative font-semibold text-sm">
                                                    Sélectionner votre pièce
                                                </div>

                                            </div>

                                            <div class="pb-6 w-full">

                                                <div class="relative ">
                                                    <select v-model="selectedCarBrands"
                                                        class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                        <option class="text-black">Marque</option>
                                                        <option v-for="(brand, i) in brands" :key="i" :id="brand.slug">
                                                            {{
                                                                brand.name
                                                            }}
                                                        </option>

                                                    </select>
                                                </div>

                                            </div>

                                            <div class="pb-6 w-full">

                                                <div class="w-full">
                                                    <select v-model="pickupAdresse"
                                                        class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                        <option>Modèle</option>
                                                        <option v-for="(brand, i) in brands" :key="i" :id="brand.slug">
                                                            {{
                                                                brand.name
                                                            }}
                                                        </option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div class="pb-6 w-full">

                                                <div class="relative ">
                                                    <select v-model="selectedCarBrands"
                                                        class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                        <option>Année</option>
                                                        <option v-for="(brand, i) in brands" :key="i" :id="brand.slug">
                                                            {{
                                                                brand.name
                                                            }}
                                                        </option>

                                                    </select>
                                                </div>

                                            </div>

                                            <div class="pb-4 w-full">
                                                <nuxt-link :to="`/cars`">
                                                    <button type="submit" @click="searchItems"
                                                        class="flex flex-row justify-center items-center py-3 text-sm text-white bg-black w-full">
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M13.3107 12.9837L15.5849 15.2568C15.691 15.3666 15.7497 15.5137 15.7483 15.6664C15.747 15.819 15.6858 15.9651 15.5778 16.073C15.4699 16.181 15.3238 16.2422 15.1712 16.2435C15.0185 16.2448 14.8714 16.1862 14.7616 16.0801L12.4874 13.8059C11.0012 15.0792 9.07965 15.7273 7.12588 15.6144C5.17211 15.5015 3.33803 14.6362 2.00848 13.2001C0.67893 11.7641 -0.0427312 9.86886 -0.00506618 7.91219C0.0325978 5.95552 0.82666 4.08949 2.21049 2.70566C3.59432 1.32183 5.46035 0.527773 7.41702 0.490108C9.37368 0.452444 11.2689 1.1741 12.705 2.50365C14.141 3.8332 15.0063 5.66729 15.1192 7.62106C15.2322 9.57483 14.584 11.4964 13.3107 12.9826V12.9837ZM7.56278 14.4626C9.26141 14.4626 10.8905 13.7879 12.0916 12.5867C13.2927 11.3856 13.9675 9.75658 13.9675 8.05796C13.9675 6.35933 13.2927 4.73028 12.0916 3.52917C10.8905 2.32806 9.26141 1.65328 7.56278 1.65328C5.86416 1.65328 4.2351 2.32806 3.034 3.52917C1.83289 4.73028 1.15811 6.35933 1.15811 8.05796C1.15811 9.75658 1.83289 11.3856 3.034 12.5867C4.2351 13.7879 5.86416 14.4626 7.56278 14.4626Z"
                                                                fill="white" />
                                                        </svg>
                                                        <div class="text-white ml-2">
                                                            Rechercher
                                                        </div>
                                                    </button>
                                                </nuxt-link>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div>
                        <div v-if="$settings.sections.shop.sidebar.collections.active" class="flex flex-col mb-2">
                            <div v-if="loading.collections" class="flex items-center justify-center my-5">
                                <si-loader></si-loader>
                            </div>
                            <div v-for="(item, i) in collections" :key="i" class="px-2">
                                <div class="flex items-center">
                                    <input v-if="item.childrens && item.childrens.length == 0" class="w-4 h-4 mx-1"
                                        :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0"
                                        :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)"
                                        type="checkbox" />
                                    <label @click="setActive(i + 'fit', i + 'ret')"
                                        v-if="item.childrens && item.childrens.length > 0"
                                        class="capitalize cursor-pointer collec-name" :for="item.slug">{{ item.name
                                        }}</label>
                                    <label v-if="item.childrens && item.childrens.length == 0"
                                        class="capitalize cursor-pointer collec-name" :for="item.slug">{{ item.name
                                        }}</label>
                                    <svg @click="setActive(i + 'fit', i + 'ret')" :id="i + 'ret'"
                                        v-if="item.childrens && item.childrens.length > 0"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="15" height="15" x="0"
                                        y="0" viewBox="0 0 451.847 451.847"
                                        style="enable-background:new 0 0 512 512 ; cursor:pointer;" xml:space="preserve"
                                        class="rotated">
                                        <g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                                    fill="#7a7575" data-original="#000000" style="" class="" />
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                            <g xmlns="http://www.w3.org/2000/svg">
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div :id="i + 'fit'" class="fit-collapsible"
                                    :class="item.childrens.length > 0 ? 'sub-collections' : ''">
                                    <ul class="list-sub-collections fit-collapsible-content"
                                        v-if="item.childrens && item.childrens.length > 0">
                                        <li v-for="(child, i) in item.childrens" :key="i">
                                            <input class="w-4 h-4 mx-1"
                                                :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0"
                                                :id="child.slug"
                                                @change="setParams($event, 'collections.slug-in', child.slug)"
                                                type="checkbox" />
                                            <label :for="child.slug" class="cursor-pointer c-p c-grey">{{ child.name
                                                }}</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div class="w-2/3 border-1 border-gray-200 flex flex-col justify-center items-center">
                <div class="flex flex-row justify-between w-full py-3 border-b border-gray-300">
                    <div class="pl-4 text-sm font-meduim text-gray-400">
                        Articles Founded
                    </div>
                    <div class="text-black text-sm font-semibold">
                        Sort by:
                    </div>
                </div>
                <div class="py-3">
                    <div class="flex flex-wrap w-full">
                        <div v-for="piece in pieces[selectedIndex].items" :key="piece.reference"
                            class="w-full px-4 mb-4">
                            <div class="flex flex-row items-start ">
                                <div class="w-1/4">
                                    <img :src="piece.image" alt="Piece Image"
                                        class="w-44 h-44 object-contain mr-4 border border-gray-200">
                                </div>
                                <div class="flex flex-col items-start w-2/4">
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


                                </div>
                                <div class="w-1/4">
                                    <div class="text-base font-bold text-center text-black">{{ piece.price }}</div>
                                    <div @click="addToCart"
                                        class="bg-red-500 text-white font-mesuim hover:bg-red-100 text-center cursor-pointer py-1 mt-3 font-meduim">
                                        Add To Cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos-anchor-placement="bottom-bottom">
                    <si-carousel component="si-product" :list="items"></si-carousel>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedTitle: "Véhicle",
            selectedIndex: 0,
            pieces: [
                {
                    title: 'Moteur et Transmission',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 5
                            },
                            price: '1999.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712666720767.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '4560.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712666721013.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 3.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712666721013.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381",
                                    "65adf67463a3bd8a87857381",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '1780.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712666720767.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: [
                                    "65adf65163a3bd8a8785736e",
                                    "65adf67463a3bd8a87857381"
                                ],
                                rating: 3.5
                            },
                            price: '4560.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 5
                            },
                            price: '1999.00 DH'
                        },
                    ]
                },
                {
                    title: 'Suspension et Direction',
                    items: [
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
                            reference: 65479753222,
                            review: {
                                reviews: ["65adf65163a3bd8a8785736e", "65adf67463a3bd8a87857381"],
                                rating: 4.5
                            },
                            price: '1200.00 DH'
                        },
                        {
                            image: 'https://storeno.b-cdn.net/stores/4-2024/1712325029829.png',
                            title: 'Moteur et Transmission',
                            brand: 'jeep cherokee 11 PHASE 1',
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
                            descriptions: 'Grand kit de frein système de freinage de voiture modifié 6 pistons étriers de frein pour jeep cherokee',
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
            collections:[],
            loading: {
                products: true,
                filters: true,
                collections: true,
                brands: true,
            },

        };
    },
    methods: {
        subCollections(){
            for(let itm of this.collections){
                if(itm.childrens && itm.childrens.length>0) itm.childrens = [];
            }
            for(let i=0; i<this.collections.length; i++){
                for(let j=0; j<this.collections.length; j++){
                    if(this.collections[i].parent == this.collections[j]._id ){
                    let childObject = this.collections[i];
                    this.collections[j].childrens.push(childObject);
                    this.collections.splice(i,1);
                        i--;
                    }
                }
            }
        },
        changeTitle(title) {
            this.selectedTitle = title;
        },
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
    }

}
</script> -->

<template>
    <div class="container">
        <div class="relative flex my-5 ">

<!-- {{ this.collections }} -->

            <transition name="slideleft">
                <div :class="showSideBar ? 'show' : 'hide'"
                    class="fixed top-0 bottom-0 z-20 hidden h-full bg-white w-80 md:w-1/4 md:block md:top-0 md:relative">
                    <!-- <div class="fixed inset-0 block bg-black bg-opacity-50 md:hidden" @click="showSideBar = false">
                    </div> -->
                    <div class="relative flex flex-col h-full bg-white border-2 mr-5">
                        <div class="w-full">

                            <div
                                class=" px-2 flex lg:flex-row flex-col justify-center bg-white lg:items-center items-start w-full">
                                <div
                                    class="hover:text-gray-300 text-black font-semibold py-5 px-4 border-b-3 border-black">
                                    {{ form.title }}
                                </div>

                            </div>

                            <div class="w-full bg-white p-4 px-6">
                                <div class="">
                                    <div>
                                        <form id="form" class=" flex flex-col justify-center items-Start">
                                            <div class="flex flex-col justify-start items-start">

                                                <div class="pb-5 w-full border-b border-gray-300 font-semibold text-sm">
                                                    {{ form.search_bar }}
                                                    <div
                                                        class="border border-gray-300 font-normal py-3 pl-2 text-gray-300 text-sm">
                                                        Example: Moteur, Port, Carrosserie...
                                                    </div>

                                                </div>


                                                <div class="py-3 w-full">

                                                    <div class="relative font-semibold text-sm">
                                                        {{ form.search_options }}
                                                    </div>

                                                </div>

                                                <div v-if="form.search_by_brand" class="pb-6 w-full">

                                                    <div class="relative ">
                                                        <select
                                                            class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                            <option class="text-black">Brand</option>
                                                            <option v-for="(brand, i) in brands" :key="i"
                                                                :id="brand.slug">
                                                                {{ brand.name }}
                                                            </option>

                                                        </select>
                                                    </div>

                                                </div>

                                                <div v-if="form.search_by_module" class="pb-6 w-full">

                                                    <div class="w-full">
                                                        <select
                                                            class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                            <option>Module</option>
                                                            <option v-for="(item, i) in chosenCollections" :key="i"
                                                                :id="items.slug">
                                                                {{ item.name }}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>

                                                <div v-if="form.search_by_tags" class="pb-6 w-full">

                                                    <div class="relative ">
                                                        <select
                                                            class="w-full cursor-pointer px-4 pr-8 py-2 text-black text-xs bg-transparent border border-gray-300 focus:border-blue-500 focus:shadow-outline outline-none">

                                                            <option>Production Year</option>
                                                            <option v-for="(year, i) in uniqueYearTags" :key="i"
                                                                :id="year">
                                                                {{ year }}
                                                            </option>

                                                        </select>
                                                    </div>

                                                </div>

                                                <div class="pb-4 w-full">
                                                    <nuxt-link :to="`/shop`">
                                                        <button type="submit"
                                                            class="flex flex-row justify-center items-center py-3 text-sm text-white bg-black w-full">
                                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M13.3107 12.9837L15.5849 15.2568C15.691 15.3666 15.7497 15.5137 15.7483 15.6664C15.747 15.819 15.6858 15.9651 15.5778 16.073C15.4699 16.181 15.3238 16.2422 15.1712 16.2435C15.0185 16.2448 14.8714 16.1862 14.7616 16.0801L12.4874 13.8059C11.0012 15.0792 9.07965 15.7273 7.12588 15.6144C5.17211 15.5015 3.33803 14.6362 2.00848 13.2001C0.67893 11.7641 -0.0427312 9.86886 -0.00506618 7.91219C0.0325978 5.95552 0.82666 4.08949 2.21049 2.70566C3.59432 1.32183 5.46035 0.527773 7.41702 0.490108C9.37368 0.452444 11.2689 1.1741 12.705 2.50365C14.141 3.8332 15.0063 5.66729 15.1192 7.62106C15.2322 9.57483 14.584 11.4964 13.3107 12.9826V12.9837ZM7.56278 14.4626C9.26141 14.4626 10.8905 13.7879 12.0916 12.5867C13.2927 11.3856 13.9675 9.75658 13.9675 8.05796C13.9675 6.35933 13.2927 4.73028 12.0916 3.52917C10.8905 2.32806 9.26141 1.65328 7.56278 1.65328C5.86416 1.65328 4.2351 2.32806 3.034 3.52917C1.83289 4.73028 1.15811 6.35933 1.15811 8.05796C1.15811 9.75658 1.83289 11.3856 3.034 12.5867C4.2351 13.7879 5.86416 14.4626 7.56278 14.4626Z"
                                                                    fill="white" />
                                                            </svg>
                                                            <div class="text-white ml-2">
                                                                {{ form.search_txt }}
                                                            </div>
                                                        </button>
                                                    </nuxt-link>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="flex justify-end w-full md:hidden">
                            <button @click="showSideBar = false" aria-label="Search button"
                                class="p-1 m-1 bg-gray-100 rounded-md item hover:bg-gray-200">
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5 translate">
                                    <path fill="currentColor"
                                        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                                        class=""></path>
                                </svg>
                            </button>
                        </div>

                        <div class="my-3 w-full">


                            <div class="flex items-center justify-between w-full px-2">
                                <h2 @click="setActive('reviewFit', 'reviewRet')"
                                    v-if="$settings.sections.shop.sidebar.prices.active" class=" text-xl px-2 mt-2">
                                    Client Reviews</h2>
                                <div v-if="loading.filters" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>
                                <svg @click="setActive('reviewFit', 'reviewRet')" :id="'reviewRet'"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 451.847 451.847"
                                    style="enable-background:new 0 0 512 512; cursor:pointer;" xml:space="preserve"
                                    class="rotated">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                            fill="#7a7575" data-original="#000000" style="" class="" />
                                    </g>
                                </svg>
                            </div>
                            <div :id="'reviewFit'" class="fit-collapsible pb-2 max-h-40 overflow-y-auto mx-3">
                                <ul class="list-sub-collections fit-collapsible-content">

                                </ul>
                            </div>
                        </div>
                        <hr v-if="$settings.sections.shop.sidebar.collections.active">


                        <div class="my-3 w-full">


                            <div class="flex items-center justify-between w-full px-2">


                                <h2 @click="setActive('collFit', 'collRet')"
                                    v-if="$settings.sections.shop.sidebar.collections.active" class="text-xl px-2">{{
                                        $settings.sections.shop.sidebar.collections.title }}</h2>

                                <div v-if="loading.filters" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>

                                <svg @click="setActive('collFit', 'collRet')" :id="'collRet'"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 451.847 451.847"
                                    style="enable-background:new 0 0 512 512; cursor:pointer;" xml:space="preserve"
                                    class="rotated">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                            fill="#7a7575" data-original="#000000" style="" class="" />
                                    </g>
                                </svg>
                            </div>
                            <div :id="'collFit'" class="fit-collapsible pb-2 max-h-400 overflow-y-auto mx-3">
                                <ul class="list-sub-collections fit-collapsible-content">
                                    <div v-if="$settings.sections.shop.sidebar.collections.active"
                                        class="flex flex-col mb-2 px-2">
                                        <div v-if="loading.collections" class="flex items-center justify-center my-5">
                                            <si-loader></si-loader>
                                        </div>
                                        <div v-for="(item, i) in collections" :key="i" class="px-2">
                                            <div class="flex items-center">
                                                <input v-if="item.childrens && item.childrens.length == 0"
                                                    class="w-4 h-4 mx-1"
                                                    :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0"
                                                    :id="item.slug"
                                                    @change="setParams($event, 'collections.slug-in', item.slug)"
                                                    type="checkbox" />
                                                <label @click="setActive(i + 'fit', i + 'ret')"
                                                    v-if="item.childrens && item.childrens.length > 0"
                                                    class="capitalize cursor-pointer collec-name" :for="item.slug">
                                                    {{ item.name }}
                                                </label>
                                                <label v-if="item.childrens && item.childrens.length == 0"
                                                    class="capitalize cursor-pointer collec-name" :for="item.slug">
                                                    {{ item.name }}
                                                </label>
                                                <svg @click="setActive(i + 'fit', i + 'ret')" :id="i + 'ret'"
                                                    v-if="item.childrens && item.childrens.length > 0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="15"
                                                    height="15" x="0" y="0" viewBox="0 0 451.847 451.847"
                                                    style="enable-background:new 0 0 512 512 ; cursor:pointer;"
                                                    xml:space="preserve" class="rotated">
                                                    <g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                                                fill="#7a7575" data-original="#000000" style=""
                                                                class="" />
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                        <g xmlns="http://www.w3.org/2000/svg">
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div :id="i + 'fit'" class="fit-collapsible"
                                                :class="item.childrens.length > 0 ? 'sub-collections' : ''">
                                                <ul class="list-sub-collections fit-collapsible-content"
                                                    v-if="item.childrens && item.childrens.length > 0">
                                                    <li v-for="(child, i) in item.childrens" :key="i">
                                                        <input class="w-4 h-4 mx-1"
                                                            :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0"
                                                            :id="child.slug"
                                                            @change="setParams($event, 'collections.slug-in', child.slug)"
                                                            type="checkbox" />
                                                        <label :for="child.slug" class="cursor-pointer c-p c-grey">
                                                            {{ child.name }}
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <hr v-if="$settings.sections.shop.sidebar.collections.active">

                        <div class="my-3 w-full">


                            <div class="flex items-center justify-between w-full px-2">
                                <h2 @click="setActive('priceFit', 'priceRet')"
                                    v-if="$settings.sections.shop.sidebar.prices.active" class=" text-xl px-2 mt-2">{{
                                        $settings.sections.shop.sidebar.prices.title }}</h2>
                                <div v-if="loading.filters" class="flex items-center justify-center my-5">
                                    <si-loader></si-loader>
                                </div>
                                <svg @click="setActive('priceFit', 'priceRet')" :id="'priceRet'"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 451.847 451.847"
                                    style="enable-background:new 0 0 512 512; cursor:pointer;" xml:space="preserve"
                                    class="rotated">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                                            fill="#7a7575" data-original="#000000" style="" class="" />
                                    </g>
                                </svg>
                            </div>
                            <div :id="'priceFit'" class="fit-collapsible max-h-32 overflow-y-auto mx-3">
                                <ul class="list-sub-collections fit-collapsible-content">
                                    <div v-if="$settings.sections.shop.sidebar.prices.active && filters"
                                        class="flex flex-col my-5 mx-5" dir="ltr">
                                        <si-price-range @change="setParams" :min="filters.prices.min"
                                            :max="filters.prices.max" />
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <!-- Collections title -->
                        <!-- <div v-show="$settings.sections.shop.sidebar.collections.title.length > 0" class="flex mb-5">
                            <h2 class="font-semibold tracking-normal uppercase text-sml dosis-font">{{
                                $settings.sections.shop.sidebar.collections.title }}</h2>
                        </div>
                        Collections title
                        collections name
                        <div class="flex flex-col gap-3">
                            parent collections
                            <div v-for="(item, i) in collections" :key="i">
                                Parent Collction
                                <div class="flex items-center justify-between w-full cursor-pointer"
                                    v-show="item.childrens && item.childrens.length > 0">
                                    <label class="relative flex items-center w-full gap-4 cursor-pointer collec-hover">
                                        <input hidden type="checkbox" class="absolute top-0 left-0 form-checkbox"
                                            style="z-index: -1"
                                            :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0"
                                            :id="item.slug"
                                            @change="setParams($event, 'collections.slug-in', item.slug)">
                                        <div
                                            class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                            <svg class="hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <label class="capitalize cursor-pointer text-xsl primary-gray-text"
                                            :for="item.slug">{{ item.name }}</label>
                                    </label>
                                    <div class="transition-all svg-display" @click="setActive(i + 'fit', i + 'ret')"
                                        :id="i + 'ret'">
                                        <div class="transition-all plus">
                                            <svg class="w-4 h-4" aria-label="plus icon" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div class="hidden transition-all minus">
                                            <svg class="w-4 h-4" aria-label="minus icon" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.5 9.45h-11a.55.55 0 000 1.1h11a.55.55 0 000-1.1z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                Parent Collction
                                childe collection
                                <div :id="i + 'fit'" class="relative overflow-hidden transition-all max-h-0"
                                    v-show="item.childrens && item.childrens.length > 0">
                                    <div class="flex flex-col gap-3 mt-3 ml-8">
                                        <div v-for="(child, key) in item.childrens" :key="key">
                                            <div class="flex items-center justify-between w-full cursor-pointer"
                                                v-show="child.childrens && child.childrens.length > 0">
                                                <label
                                                    class="relative flex items-center w-full gap-4 cursor-pointer collec-hover">
                                                    <input hidden type="checkbox"
                                                        class="absolute top-0 left-0 form-checkbox" style="z-index: -1"
                                                        :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0"
                                                        :id="child.slug"
                                                        @change="setParams($event, 'collections.slug-in', child.slug)">
                                                    <div
                                                        class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                                        <svg class="hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20">
                                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </div>
                                                    <label class="capitalize cursor-pointer text-xsl primary-gray-text"
                                                        :for="child.slug">{{ child.name }}</label>
                                                </label>
                                                <div class="transition-all svg-display"
                                                    @click="setActive(key + `fiti-${i}`, key + `reti-${i}`)"
                                                    :id="key + `reti-${i}`">
                                                    <div class="transition-all plus">
                                                        <svg class="w-4 h-4" aria-label="plus icon" width="20"
                                                            height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div class="hidden transition-all minus">
                                                        <svg class="w-4 h-4" aria-label="minus icon" width="20"
                                                            height="20" viewBox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.5 9.45h-11a.55.55 0 000 1.1h11a.55.55 0 000-1.1z"
                                                                fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            Simple Collction
                                            <label
                                                class="relative flex items-center w-full gap-4 cursor-pointer collec-hover"
                                                v-show="child.childrens && child.childrens.length == 0">
                                                <input hidden type="checkbox"
                                                    class="absolute top-0 left-0 form-checkbox" style="z-index: -1"
                                                    :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(child.slug) >= 0"
                                                    :id="child.slug"
                                                    @change="setParams($event, 'collections.slug-in', child.slug)">
                                                <div
                                                    class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                                    <svg class="hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20">
                                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <label class="capitalize cursor-pointer text-xsl primary-gray-text"
                                                    :for="child.slug">{{ child.name }}</label>
                                            </label>
                                            Simple Collction
                                            <div :id="key + `fiti-${i}`"
                                                class="relative overflow-hidden transition-all max-h-0"
                                                v-show="item.childrens && item.childrens.length > 0">
                                                <div class="flex flex-col gap-3 mt-3 ml-8">
                                                    <div v-for="(childe, ind) in child.childrens" :key="ind">
                                                        <div class="flex items-center justify-between w-full cursor-pointer"
                                                            v-show="childe.childrens && childe.childrens.length > 0">
                                                            <label
                                                                class="relative flex items-center w-full gap-4 cursor-pointer collec-hover">
                                                                <input hidden type="checkbox"
                                                                    class="absolute top-0 left-0 form-checkbox"
                                                                    style="z-index: -1"
                                                                    :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(childe.slug) >= 0"
                                                                    :id="childe.slug"
                                                                    @change="setParams($event, 'collections.slug-in', childe.slug)">
                                                                <div
                                                                    class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                                                    <svg class="hidden w-2.5 h-2.5 text-white"
                                                                        viewBox="0 0 20 20">
                                                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </div>
                                                                <label
                                                                    class="capitalize cursor-pointer text-xsl primary-gray-text"
                                                                    :for="childe.slug">{{ childe.name }}</label>
                                                            </label>
                                                            <div class="transition-all svg-display"
                                                                @click="setActive(ind + i + 'fite', ind + i + 'rete')"
                                                                :id="ind + i + 'rete'">
                                                                <div class="transition-all plus">
                                                                    <svg class="w-4 h-4" aria-label="plus icon"
                                                                        width="20" height="20" viewBox="0 0 20 20"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M15.5 9.4h-4.9V4.5a.6.6 0 10-1.2 0v4.9H4.5a.6.6 0 000 1.2h4.9v4.9a.6.6 0 001.2 0v-4.9h4.9a.6.6 0 100-1.2z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                                <div class="hidden transition-all minus">
                                                                    <svg class="w-4 h-4" aria-label="minus icon"
                                                                        width="20" height="20" viewBox="0 0 20 20"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M15.5 9.45h-11a.55.55 0 000 1.1h11a.55.55 0 000-1.1z"
                                                                            fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        Simple Collction
                                                        <label
                                                            class="relative flex items-center w-full gap-4 cursor-pointer collec-hover"
                                                            v-show="childe.childrens && childe.childrens.length == 0">
                                                            <input hidden type="checkbox"
                                                                class="absolute top-0 left-0 form-checkbox"
                                                                style="z-index: -1"
                                                                :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(childe.slug) >= 0"
                                                                :id="childe.slug"
                                                                @change="setParams($event, 'collections.slug-in', childe.slug)">
                                                            <div
                                                                class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                                                <svg class="hidden w-2.5 h-2.5 text-white"
                                                                    viewBox="0 0 20 20">
                                                                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                                                                        fill="currentColor" />
                                                                </svg>
                                                            </div>
                                                            <label
                                                                class="capitalize cursor-pointer text-xsl primary-gray-text"
                                                                :for="childe.slug">{{ childe.name }}</label>
                                                        </label>
                                                        Simple Collction
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                childe collection
                                Simple Collction
                                <label class="relative flex items-center w-full gap-4 cursor-pointer collec-hover"
                                    v-show="item.childrens && item.childrens.length == 0">
                                    <input hidden type="checkbox" class="absolute top-0 left-0 form-checkbox"
                                        style="z-index: -1"
                                        :checked="params['collections.slug-in'] && params['collections.slug-in'].indexOf(item.slug) >= 0"
                                        :id="item.slug" @change="setParams($event, 'collections.slug-in', item.slug)">
                                    <div
                                        class="w-3.5 h-3.5 flex justify-center items-center bg-white border border-primary-color rounded-sm">
                                        <svg class="hidden w-2.5 h-2.5 text-white" viewBox="0 0 20 20">
                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <label class="capitalize cursor-pointer text-xsl primary-gray-text"
                                        :for="item.slug">{{ item.name }}</label>
                                </label>
                                Simple Collction
                            </div>
                        </div> -->
                        <!-- collections name -->
                    </div>
                    <!-- Collections -->


                </div>

            </transition>
            <div class="w-full md:w-3/4 ">
                <div class="bg-white">
                    <div class="border-b">
                        <div class="flex flex-row items-center justify-between p-2">

                            <div class="pl-4 text-sm font-meduim text-gray-400">
                                {{ productsNumber() }} Articles Founded
                            </div>

                            <select class="p-2 bg-white text-sm font-meduim " v-model="params.sort">
                                <option v-for="(sort, i) in sorts" :key="i" :value="sort.field">{{ sort.name }}</option>
                            </select>

                        </div>
                    </div>
                    <div v-if="loading.products" class="flex items-center justify-center my-5">
                        <si-loader></si-loader>
                    </div>
                    <div v-if="!loading.products && items.length == 0" class="flex items-center justify-center my-5">
                        <h1 class="py-3">{{ $settings.sections.shop.empty_text }}</h1>
                    </div>

                    <div class="flex flex-col justify-around items-center ">
                        <div data-aos="fade-up" v-for="item in items" :key="item._id" class="w-full border-b">

                            <si-product-details :item="item"></si-product-details>

                        </div>
                    </div>

                    <div v-if="items.length > 0" class="flex items-center justify-center w-full p-2 bg-white border-t">
                        <button class="flex items-center py-2 px-3  border-2 border-gray-200 rounded-full"
                            @click="getItems(paginate.current_page - 1)">
                            <svg class="h-4 translate" aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
                                </path>
                            </svg>
                        </button>
                        <span>&ensp;</span>
                        <span class="text-gray-700">{{ paginate.last_page }}</span>
                        <span>&ensp;</span>
                        <button class="flex items-center py-2 px-3 border-2 border-gray-200 rounded-full"
                            @click="getItems(paginate.current_page + 1)">

                            <svg class="h-4 translate" aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="#000000"
                                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                </path>
                            </svg>
                        </button>
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
            form: this.$settings.sections.form,
            chosenCollections: [],
            loading: {
                products: true,
                filters: true,
                collections: true,
                brands: true,
            },
            query: {},
            param: [],
            filters: null,
            showSideBar: false,
            gridClass: this.$settings.sections.shop.products ? this.$settings.sections.shop.products.default_size : 'w-full md:w-1/2 lg:w-1/3',
            items: [],
            collections: [],
            brands: [],
            paginate: { page: 1, limit: this.$settings.sections.shop.pagination.limit, total: 12 },
            params: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            lastParams: { page: 1, search: this.$route.query.search, limit: this.$settings.sections.shop.pagination.limit, 'collections.slug-in': [], sort: { createdAt: -1 } },
            sorts: [
                { field: { 'price.salePrice': 1 }, name: this.$settings.sections.shop.sorts.price_asc },
                { field: { 'price.salePrice': -1 }, name: this.$settings.sections.shop.sorts.price_desc },
                { field: { 'review.rating': -1 }, name: this.$settings.sections.shop.sorts.rating_desc },
                { field: { 'review.rating': 1 }, name: this.$settings.sections.shop.sorts.rating_asc },
                { field: { 'name': 1 }, name: this.$settings.sections.shop.sorts.name_asc },
                { field: { 'name': -1 }, name: this.$settings.sections.shop.sorts.name_desc },
                { field: { createdAt: -1 }, name: this.$settings.sections.shop.sorts.newest },
                { field: { createdAt: 1 }, name: this.$settings.sections.shop.sorts.oldest }
            ],
            girds: [
                { number: 6, width: 16, class: 'w-full md:w-1/2' },
                { number: 9, width: 21, class: 'w-full md:w-1/2 lg:w-1/3' },
                { number: 12, width: 26, class: 'w-1/2 md:w-1/3 lg:w-1/4' }
            ]
        }
    },
    watch: {
        params: {
            handler(val) {
                if (JSON.stringify(val) !== JSON.stringify(this.lastParams)) {
                    this.getItems();
                }
            },
            deep: true
        },
        "$route.query.search"(val) {
            this.$set(this.params, 'search', val);
        }
    },
    async fetch() {
        this.$store.state.seo.title = this.$settings.sections.shop.title + ' - ' + this.$settings.store_name;
        this.$store.state.seo.description = this.$settings.sections.shop.description || this.$settings.store_description;
        if (this.$route.params.slug) {
            this.param = this.$route.params.slug.split(',');
            this.$route.params.slug.split(',').forEach(item => {
                this.params['collections.slug-in'].push(item);
            });
        }

        // console.log(this.collections);

        // if (this.$settings.sections.search_collections || this.$settings.sections.search_collections.length > 0) {
        //     this.chosenCollections = this.$settings.sections.search_collections;
        // } else {
        const { data } = await this.$storeino.collections.search({})
        this.chosenCollections = data.results;
        // }
        for (const key in this.$route.query) {
            if (!this.$route.query[key]) continue;
            switch (key) {
                case 'price-from': this.$set(this.params, 'price.salePrice-from', this.$route.query[key]); break;
                case 'price-to': this.$set(this.params, 'price.salePrice-to', this.$route.query[key]); break;
                case 'colors-size': this.$set(this.params, 'options.values.value1', this.$route.query[key].split(',')); break;
                case 'tags': this.$set(this.params, 'tags-in', this.$route.query[key].split(',')); break;
                case 'brands': this.$set(this.params, 'brand.slug-in', this.$route.query[key].split(',')); break;
                case 'page': this.$set(this.params, 'page', this.$route.query[key]); break;
            }
        }
        this.lastParams = this.params;
        await this.getFilters();
        await this.getItems();
        await this.getCollections();
        await this.getBrands();
        this.subCollections();
    },
    methods: {

        productsNumber() {
            return this.items.length;
        },
        uniqueYearTags() {
            const yearTags = new Set();

            this.items.forEach((item) => {
                if (item.tags && item.tags.length > 0) {
                    item.tags.forEach((tag) => {
                        const numericTag = parseInt(tag);
                        if (!isNaN(numericTag) && numericTag >= 1000 && numericTag <= 9999) {
                            yearTags.add(numericTag);
                        }
                    });
                }
            });

            return Array.from(yearTags);
        },

        // searchItems() {

        //     const queryParams = {
        //         // brands: this.selectedCarBrands.toLowerCase(),

        //     };

        //     const url = `/shop?${new URLSearchParams(queryParams)}`;

        //     this.$router.push(url);
        // },

        subCollections() {

            console.log('Collections:', this.collections);
            
            for (let itm of this.collections) {
                if (itm.childrens && itm.childrens.length > 0) itm.childrens = [];
            }
            for (let i = 0; i < this.collections.length; i++) {
                for (let j = 0; j < this.collections.length; j++) {
                    if (this.collections[i].parent == this.collections[j]._id) {
                        let childObject = this.collections[i];
                        this.collections[j].childrens.push(childObject);
                        this.collections.splice(i, 1);
                        i--;
                    }
                }
            }
        },
        setActive: function (id, idRet) {
            var element = document.getElementById(id);
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            } else {
                element.classList.add('active');
            }
            var icon = document.getElementById(idRet);
            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
            } else {
                icon.classList.add('active');
            }
        },
        setParams(e, key, value) {
            if (key.indexOf('price') >= 0 || key.indexOf('page') >= 0) {
                this.$set(this.params, key, e.target.value);
                return false;
            } else {
                if (e.target.checked) {
                    if (!this.params[key]) this.params[key] = this.$set(this.params, key, []);
                    this.params[key].push(value);
                } else {
                    this.params[key] = this.params[key].filter(item => item !== value);
                }
            }
            for (const key in this.params) {
                switch (key) {
                    case 'collections.slug-in': this.param = this.params[key]; break;
                    case 'price.salePrice-from': this.query['price-from'] = this.params[key]; break;
                    case 'price.salePrice-to': this.query['price-to'] = this.params[key]; break;
                    case 'options.values.value1': this.query['colors-size'] = this.params[key]; break;
                    case 'tags-in': this.query['tags'] = this.params[key]; break;
                    case 'brand.slug-in': this.query['brands'] = this.params[key]; break;
                    case 'page': this.query['page'] = [this.params[key]]; break;
                }
            }
            let url = `/shop/`;
            url += this.param.length > 0 ? [...new Set(this.param)].join(',') : '';
            for (const key in this.query) {
                url += url.indexOf('?') == -1 ? '?' : '&';
                if (typeof this.query[key] == 'object') {
                    url += `${key}=${this.query[key].join(',')}`;
                } else url += `${key}=${this.query[key]}`;
            }
            window.history.pushState({}, '', url);
        },
        async getFilters() {
            this.filters = null;
            this.loading.filters = true;
            try {
                const { data } = await this.$storeino.products.filters({});
                this.filters = data;
            } catch (e) {
                console.log({ e });
            }
            this.loading.filters = false;
        },
        async getCollections() {
            this.collections = [];
            this.loading.collections = true;
            try {
                const { data } = await this.$storeino.collections.search({});
                this.collections = data.results;
            } catch (e) {
                console.log({ e });
            }
            this.loading.collections = false;
        },
        async getBrands() {
            this.brands = [];
            this.loading.brands = true;
            try {
                const { data } = await this.$storeino.brands.search({});
                this.brands = data.results;
            } catch (e) {
                console.log({ e });
            }
            this.loading.brands = false;
        },
        async getItems(page = null) {
            if (page != null) this.setParams({ target: { value: page } }, 'page', page);
            this.items = [];
            this.loading.products = true;
            try {
                this.params.search = this.$route.query.search;
                this.params.page = page || this.paginate.current_page;
                this.params.limit = this.$settings.sections.shop.pagination.limit;
                this.lastParams = this.$tools.copy(this.params);
                const { data } = await this.$storeino.products.search(this.params);
                this.items = data.results;
                this.paginate = data.paginate;
            } catch (e) {
                console.log({ e });
            }
            this.loading.products = false;
        },
    },
}
</script>
<style>
.color-option label {
    width: 24px;
    height: 24px;
    margin-left: 4px;
    margin-right: 4px;
    box-shadow: 0 0 0px 2px rgb(230, 230, 230);
}

.color-option.active label {
    color: transparent;
    box-shadow: 0 0 0px 2px white, 0 0 0px 4px var(--primary-color);
    margin-left: 6px;
    margin-right: 6px;
    width: 20px;
    height: 20px;
}

.slideleft-enter-active {
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
}

.slideleft-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slideleft-enter-to,
.slideleft-leave {
    width: 100%;
}

.slideleft-enter,
.slideleft-leave-to {
    width: 0%;
}

/* Media screen mobile */
@media (max-width: 768px) {
    .show {
        display: block !important;
    }
}

[dir="ltr"] .collec-name {
    margin-right: auto;
}

[dir="rtl"] .collec-name {
    margin-left: auto;
}


[dir="ltr"] .sub-collections .list-sub-collections {
    list-style: none;
    padding-left: 40px;
}

[dir="rtl"] .sub-collections .list-sub-collections {
    list-style: none;
    padding-right: 40px;
}

[dir="rtl"] .list-sub-collections li {
    text-align: right;
}

.fit-collapsible {
    overflow: unset;
    text-align: left;
    display: block;
    margin: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: 0 0;
}

.fit-collapsible .fit-collapsible-content {
    max-height: 0;
    position: relative;
    overflow: hidden;
    transition: 0.4s;
}

.fit-collapsible.active .fit-collapsible-content {
    max-height: 500px;
}

.rotated {
    transform: rotate(180deg);
    transition: 0.3s;
}

.rotated.active {
    transform: rotate(0deg);
}

[dir="rtl"] .rotated {
    transform: rotate(180deg);
    transition: 0.3s;
}

[dir="rtl"] .rotated.active {
    transform: rotate(0deg);
}
</style>
