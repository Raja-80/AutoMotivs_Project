<template>
    <div class=" container pt-20 pb-32">
        <div data-aos="fade-up" class="flex lg:flex-row flex-col justify-around w-full items-start pl-8 lg:pl-0">

            <div data-aos="fade-up" class="flex flex-col justify-between items-start pb-8 w-1/3 ">

                <div class="cursor-pointer flex items-center lg:pb-24 pb-6">
                    <!-- <nuxt-img v-if="footer.show_logo" :to="`/`" class="h-10 "
                        :src="logo != null ? logo.src : 'https://storeno.b-cdn.net/stores/4-2024/1713589084388.png'"
                        alt="company logo" /> -->

                    <nuxt-link :to="`/`" class="cursor-pointer italic text-lg text-black font-semibold mr-4">
                        {{ footer.company_name }}
                    </nuxt-link>


                    <nuxt-link :to="`/`" class="cursor-pointer italic text-lg text-black font-semibold mr-4">

                    </nuxt-link>
                </div>

                <div>

                    <div class="txt-black text-sm font-light w-56">
                        <div class="txt-black text-sm font-light w-full pb-4">
                            {{ footer.company_adresse }}
                        </div>
                        <div class="txt-black text-sm font-light w-full pb-4">
                            {{ footer.contact_email }}
                        </div>
                        <div class="txt-black text-sm font-light w-full pb-4">
                            {{ footer.phone_number }}
                        </div>
                    </div>

                </div>

            </div>

            <!-- <div class="flex flex-col justify-between items-start pb-8 w-2/3">
                <div v-if="footer.items" class="flex flex-wrap flex-row justify-center w-full shadow-lg">

                    <div v-for="(key, i) in Object.keys(footer.items)" :key="i" class="text-black ">

                        <div class=" flex items-center pb-6">

                            <div class="text-sm font-semibold text-black">{{ footer.items[key].menu_title }}</div>

                        </div>
                        {{ footer.items[key].menu }}
                        <div class="flex items-center">

                            <div class="flex flex-col justify-between items-start">
                                <div v-for="link in footer.items[key].menu">

                                    <router-link class="p-2 m-1 w-full flex hover:text-red-700" :to="item.url">
                                        {{ item.text }}
                                    </router-link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> -->

            <div class="flex flex-col justify-between items-start pb-8">

                <div class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-black">À propos</div>

                </div>

                <div class="flex items-center">

                    <div class="flex flex-col justify-between items-start">
                        <div v-for="(link, index) in about" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light text-black focus:underline focus:text-primary transition duration-1000 ease-in-in  pb-2 ">
                                {{ link.text }}
                            </nuxt-link>

                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-col justify-between items-start pb-8">

                <div class=" flex items-center lg:pb-24 pb-6">

                    <div class="text-sm font-semibold text-black">Termes et conditions</div>

                </div>

                <div class="flex items-start">

                    <div class="flex flex-col justify-between items-start">
                        <div v-for="(link, index) in terms" :key="index">

                            <nuxt-link :to="link.url"
                                class="text-sm font-light text-black focus:underline focus:text-primary transition duration-1000 ease-in-in  pb-2 ">
                                {{ link.text }}
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
        console.log(this.$settings)
        return {
            year: new Date().getFullYear(),
            footer: this.$settings.sections.footer,
            about: [
                { text: "Qui sommes-nous ?", url: "/about" },
                { text: "Nos partenaires", url: "/partners" },
                { text: "F.A.Q", url: "/faq" },
                { text: "Nous contacter", url: "/contact" },
                { text: "Blog", url: "/blog" }
            ],
            terms: [
                { text: "CGU", url: "/cgu" },
                { text: "CGV", url: "/cgv" },
                { text: "Politique de protection des données", url: "/data-protection-policy" },
                { text: "Politique de protection des cookies", url: "/cookie-protection-policy" },
                { text: "Cookies", url: "/cookies" },
                { text: "Mentions légales", url: "/legal-mentions" }
            ]
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