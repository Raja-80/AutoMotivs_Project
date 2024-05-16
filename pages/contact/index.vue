<template>
    <div class=" flex flex-row justify-center items-center py-12 ">

        <div class="flex flex-col justify-center items-center ">
            <div class="pb-12">
                <h1 data-aos="fade-up" v-if="contact.show_title" class="font-semibold text-black pb-6">{{contact.title}}</h1>
                <div data-aos="fade-up" v-if="contact.show_under_title" class="flex flex-row justify-around items-start">
                    <div class="border-b-2 border-primary w-6 ">
                    </div>
                    <div>
                        <p class="text-black font-light text-center text-sm">
                            {{contact.under_title}}
                        </p>
                    </div>
                    <div class="border-b-2 border-primary w-6 ">
                    </div>
                </div>
            </div>
            <si-app-loader :placement="'AFTER_CONTACT_PAGE'"
                class=" text-black mx-10  pl-0" />
        </div>

    </div>
</template>

<script>
export default {
data() {
    return {
        contact: this.$settings.sections.contact,
        
    }
},
}
</script>

<style>
.bg {
    background-color: #f7f7f7;
}
</style>