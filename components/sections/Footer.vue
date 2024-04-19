<template>
    <div class=" container pt-20 pb-32">
        <div data-aos="fade-up" class="flex lg:flex-row flex-col justify-between  items-start pl-8 lg:pl-0">

            <div data-aos="fade-up" class="flex flex-col justify-between items-start pb-8 ">

                <div class="cursor-pointer flex items-center lg:pb-24 pb-6">
                    <nuxt-link :to="`/`" class="cursor-pointer italic text-lg text-black font-semibold mr-4">
                        Salmia <span class="text-red-500">.ma</span>
                    </nuxt-link>
                </div>

                <div>
                    
                    <div  class="txt-black text-sm font-light w-56">
                        <div class="txt-black text-sm font-light w-full">
                            LA FERAILLE SALMIA, CASABLANCA
                        </div>
                        <div class="txt-black text-sm font-light w-full">
                            contact@salmia.ma
                        </div>
                        <div class="txt-black text-sm font-light w-full">
                            +212 (6) 61 60 40 50
                        </div>
                    </div>

                </div>

            </div>


            <div class="flex flex-col justify-between items-start pb-8">

                <div  class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-black">À propos</div>

                </div>

                <div 
                    class="flex items-center">

                    <div class="flex flex-col justify-between items-start">
                        <!-- <div v-for="(link, index) in useful_links.links.items" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light text-black focus:underline focus:text-primary transition duration-1000 ease-in-in  pb-2 ">
                                {{ link.text }}
                            </nuxt-link>

                        </div> -->
                    </div>
                </div>

            </div>

            <div class="flex flex-col justify-between items-start pb-8">

                <div  class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-black">Termes et conditions</div>

                </div>

                <div  class="flex items-start">

                    <div class="flex flex-col justify-between items-start">
                        <!-- <div v-for="(link, index) in terms.links.items" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light text-black focus:underline focus:text-primary transition duration-1000 ease-in-in  pb-2 ">
                                {{ link.text }}
                            </nuxt-link>


                        </div> -->
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    
    data() {
        console.log(this.$settings)
        return {
            year: new Date().getFullYear(),
            // footer: this.$settings.sections.footer,
            // logo: this.$settings.sections.footer.logo,
            // useful_links: this.$settings.sections.footer.useful_links,
            // terms: this.$settings.sections.footer.terms,
            // showroom: this.$settings.sections.footer.showroom
        }
    },
}
</script>

<style>
a,
p,
.txt {
    color: #edebe5;
}
</style>