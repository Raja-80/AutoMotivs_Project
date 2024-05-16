<template>
    <div class=" pt-36 w-full">

        <div class="container flex flex-col justify-center item-start w-full">
            <div v-if="isHomePage" class=" flex flex-row justify-between items-start w-full pb-6">

                <!-- Banner title side -->

                <div v-if="isHomePage" class="hidden lg:flex lg:flex-col bg-fixed text-white pl-7 w-4/5">
                    <div v-if="banner.show_info" class="flex flex-col text-white w-full">
                        <h1 data-aos="fade-up" class=" font-semibold text-6xl mb-2 w-9/12">
                            {{ banner.title }}
                        </h1>
                        <p data-aos="fade-up" class=" text-md font-light w-9/12 ">
                            {{ banner.description }}
                        </p>

                    </div>
                    <div class="flex flex-row itams-start w-9/12 pt-16">
                        <nuxt-link :to="banner.button_url" v-if="banner.show_action_btn"
                            class="cursor-pointer font-semibold bg-white py-3 px-7 text-black text-md hover:text-white duration-10 hover:bg-gray-700 ">
                            {{ banner.button_txt }}
                        </nuxt-link>

                        <div v-if="banner.show_button"
                            class="cursor-pointer flex flex-row items-center mx-3 hover:shadow-lg ">
                            <nuxt-link to="/contact" class="text-md py-3 px-4">
                                {{ banner.button_contact }}
                            </nuxt-link>
                        </div>
                    </div>

                </div>

                <!-- Banner right side Search -->

                <div v-if="isHomePage" class="w-2/5 ">

                    <div
                        class=" px-2 flex lg:flex-row flex-col justify-center bg-white lg:items-center items-start w-full">
                        <div class="hover:text-gray-300 text-black font-semibold py-5 px-4 border-b-3 border-black">
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
                                                    <option v-for="(brand, i) in brands" :key="i" :id="brand.slug">
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
                                                    <option v-for="(item, i) in items" :key="i" :id="items.slug">
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
                                                    <option v-for="(year, i) in uniqueYearTags" :key="i" :id="year">
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

            </div>
        </div>

        <div v-if="isHomePage" class="border-b border-gray-700 "></div>

        <div v-if="isHomePage" class=" flex flex-row justify-center item-center py-7 w-full">

            <div v-for="(brand, i) in limitBrands" :key="i" :id="brand.slug" class="mx-12 flex item-center">

                <nuxt-img :src="brand.imageSrc" :alt="brand.name" class="h-28 w-32" :to="brand.url" />

            </div>


        </div>

    </div>
</template>

<script>
import Datepicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {
        Datepicker,
    },
    data() {
        return {

            banner: this.$settings.sections.banner,
            form: this.$settings.sections.form,
            // : 'All Brands',
            // : 'All Modules',
            // : 'All ProductionYears',

            products: [],
            brands: [],
            selectedTitle: "Véhicle",
            items: [],

        };
    }, async fetch() {

        try {
            const { data } = await this.$storeino.brands.search()
            this.brands = data.results;

            const response = await this.$storeino.products.search({});
            this.products = response.data.results;

            const filter = {};
            // if (this.$settings.sections.search_collections || this.$settings.sections.search_collections.length > 0) {
            //     this.items = this.$settings.sections.search_collections;
            // } else {
            const dat = await this.$storeino.collections.search(filter)
            this.items = dat.results;
            // }

        } catch (err) {
            console.error(err);
            this.$nuxt.error({ statusCode: 404, message: 'product_not_found' });
        }
    },
    computed: {



        isHomePage() {
            return this.$route.path === '/';
        },

        uniqueYearTags() {
            const yearTags = new Set();

            this.products.forEach((item) => {
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
        limitBrands() {
            return this.brands.slice(0, 6);
        }


    },
    methods: {

        changeTitle(title) {
            this.selectedTitle = title;
        },

        searchItems() {

            const queryParams = {
                // brands: this.selectedCarBrands.toLowerCase(),

            };

            const url = `/shop?${new URLSearchParams(queryParams)}`;

            this.$router.push(url);
        },
    },
};
</script>

<style scoped>
.bg {
    background-color: #ecf0f1;
}

.text-dark-blue {
    color: #2b2d42;
}

.carousel {
    overflow: hidden;
    width: 100%;
    cursor: grab;
}

.carousel-inner {
    display: flex;
    align-items: center;
}

.carousel-item {
    flex: 0 0 auto;
    width: calc(100% / 6);
    /* Show 6 items per slide */
}

.brand-image {
    width: 40%;
    /* Set image width to fill container */
    height: auto;
    /* Maintain aspect ratio */
}
</style>


<!-- searchItems() {
            const formattedPickupDate = this.pickupDate instanceof Date ? this.pickupDate.toISOString() : '';
            const formattedDropOffDate = this.dropOffDate instanceof Date ? this.dropOffDate.toISOString() : '';

            const queryParams = {
                brands: this.selectedCarBrands.toLowerCase(),
                pickupDate: formattedPickupDate,
                dropOffDate: formattedDropOffDate,
            };

            if (this.pickupAdresse !== 'All Locations') {
                queryParams.pickupAdresse = this.pickupAdresse;
            }


            const url = `/shop?${new URLSearchParams(queryParams)}`;

            this.$router.push(url);
        }, -->