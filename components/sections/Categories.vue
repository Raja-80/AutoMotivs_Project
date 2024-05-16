<template>
    <div class="container pb-20 ">

        <div v-if="loading" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>

        <div v-if="collections.active" data-aos="fade-up" class="flex flex-col justify-center items-start pb-16">
            <h1 class="text-black font-bold text-3xl text-center">
                {{ collections.title }}
            </h1>
        </div>


        <div v-if="collections.active">

            <div class="mt-8">
                <div >
                    <div class="flex flex-wrap -mx-4">
                        <div v-for="(item, index) in items" :key="index" class="w-1/5 px-4 mb-4">
                            <nuxt-link
                                :to="item.childrens.length > 0 ? `/collections/${item.slug}` : `/shop/${item.slug}`">
                                <div class="flex flex-row items-center">
                                    <nuxt-img width="90" height="90" class=" mb-2"
                                        :src="item.image ? item.image.src : null" :alt="item.name" />
                                    <h3 class="text-center text-xl text-black">{{ item.name }}</h3>
                                    <span v-if="item.childrens.length > 0" class="text-sm">
                                    {{ item.childrens.length}}</span>
                                </div>
                            </nuxt-link>
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
            
            selectedIndex: 0,
            collections: this.$settings.sections.collections,
            loading: true,
            items: [],
            
        };
    },

    methods: {
        selectTitle(index) {
            this.selectedIndex = index;
        }
    },

    async fetch() {
        try {
            const filter = { };
            if (this.$settings.sections.collections.items.length > 0) {
                this.items = this.$settings.sections.collections.items;
            } else {
                const { data } = await this.$storeino.collections.search(filter)
                this.items = data.results;
            }
        } catch (e) {
            console.log({ e });
        }
        this.loading = false;
    }
}
</script>

<style></style>