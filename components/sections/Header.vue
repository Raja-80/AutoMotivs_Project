<template>
    <div class="relative">

        <div class=" absolute top-10 left-0 right-0">

            <nav class="container flex justify-between items-start py-6 text-white">

                <div class=" flex items-start lg-pl-0 pl-6 header-menu">

                    <nuxt-img v-if="header.show_logo" :to="`/`" class="h-10 "
                        :src="header.logo != null ? header.logo.src : ''" alt="company logo" />

                    <nuxt-link v-if="header.show_company_name" :to="`/`"
                        class="cursor-pointer italic text-lg text-white font-semibold mr-4">
                        {{ header.company_name }}
                    </nuxt-link>

                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex flex-row justify-center items-start relative">


                        <div v-if="header.menu" class="flex flex-row items-start header-menu">
                            <ul v-for="(item, i) in header.menu.items" :key="i" class="flex flex-col header-menu">
                                <li class="flex  items-center mb-1 justify-between w-full text-xs header-menu">
                                    <router-link class="p-2 m-1 w-full flex hover:text-red-700" :to="item.url">
                                        {{ item.text }}
                                    </router-link>
                                    <button class=" p-2 mx-1"
                                        @click="activeId = activeId != item._id ? item._id : null">
                                        <!-- <si-svg> -->
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="activeId == item._id ? 'rotate-180' : ''"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                            xml:space="preserve">
                                            <path fill="white"
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                        <!-- </si-svg> -->
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item._id == activeId" class="bg-gray-100 rounded-md text-black">
                                        <div v-for="(item, i) in item.childrens" :key="i" class="">
                                            <router-link
                                                class="text-black p-2 m-1 hover:bg-gray-50 rounded-md text-xs hover:text-gray-700 flex"
                                                :to="item.url">{{ item.text }}</router-link>
                                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                <li v-for="(child, ii) in item.childrens" :key="ii">
                                                    <nuxt-link class="text-xs p-2 m-1 hover:text-green-700 flex"
                                                        :to="child.url">
                                                        {{ child.text }}
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>

                    </div>

                </div>

                <div class="cursor-pointer flex flex-row items-center text-xs">

                    <router-link v-if="header.cart" to="/cart" title="Cart" id="cart-icon"
                        class="relative p-1 mx-1 rounded-md item hover:bg-gray-400">

                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img"
                            height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                            class="translate">
                            <path fill="#FFFFFF"
                                d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                                class="">
                            </path>
                        </svg>

                        <small
                            class="absolute flex items-center justify-center w-5 h-5 p-2 text-white bg-red-500 rounded-full -top-2 -right-2">
                            {{ $store.state.cart.length }}
                        </small>
                    </router-link>

                    <router-link v-if="header.account" to="/account/orders" title="Account"
                        class=" flex flex-row justify-center items-end relative p-1 mx-1 rounded-md item hover:bg-gray-400">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img"
                            height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            class="w-5 h-5 translate">
                            <path fill="#FFFFFF"
                                d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                                class=""></path>
                        </svg>

                        <div v-if="header.show_account_txt" class=" hidden lg:block mx-1 text-xs ">
                            {{ header.account_txt }}
                        </div>

                    </router-link>

                    <nuxt-link to="/contact" v-if="header.show_deposit_button"
                        class="cursor-pointer font-semibold bg py-2 px-3 text-black text-xs hover:text-white duration-10 hover:bg-gray-700 ">
                        {{ header.deposit_button }}
                    </nuxt-link>
                </div>

            </nav>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            header: this.$settings.sections.header,
            isOpen: false,
            activeId: null,
            isClicked: false,
            otherMenu: [
                {
                    _id: "lang",
                    text: "Toutes les catégories",
                    active: true,
                    isClicked: false,
                    childrens: [
                        { _id: "1", text: "Moteur et Transmission", url: "#MoteuretTransmission" },
                        { _id: "2", text: "Suspension et Direction", url: "#SuspensionetDirection" },
                        { _id: "3", text: "Échappement et Échappement", url: "#ÉchappementetÉchappement" },
                        { _id: "4", text: "Freins et Roues", url: "#FreinsetRoues" },
                        { _id: "5", text: "Éclairage et Électronique", url: "#ÉclairageetÉlectronique" },
                        { _id: "6", text: "Carrosserie et Intérieur", url: "#CarrosserieetIntérieur" }
                    ]
                }
            ]



        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            if (this.isOpen) {
                this.isOpen = false;
            }
        },

    },
};
</script>

<style>
.overlay {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
    transform: translateX(0);
}

[dir='ltr'] .move-out {
    transform: translateX(-40em);
}

[dir='ltr'] .move-in {
    transform: translateX(-20em);
}

[dir="rtl"] .move-out {
    transform: translateX(40em);
}

[dir="rtl"] .move-in {
    transform: translateX(20em);
}

.flex-col.hovered>li:hover>a {
    color: #dc2626;

}

.header-menu {
    position: relative;
    z-index: 9999;
}

.bg {
    background-color: #ecf0f1;
}

.text-dark-blue {
    color: #2b2d42;
}
</style>






















































































































































































































































































<!-- 'All Collections' DropDown -->
<!-- <div class="flex flex-row header-menu">
                            <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col relative px-2"
                                :class="{ 'hovered': item.isClicked }">
                                <li class="flex flex-row text items-center justify-between w-full rounded-md "
                                    @click="item.isClicked = !item.isClicked">
                                    <nuxt-link :to="'/shop'"
                                        class="w-full flex cursor-pointer hover:text-red-500 transition duration-1000 ease-in-out text-xs">
                                        {{ item.text }}
                                    </nuxt-link>
                                    <button class="text-white p-2"
                                        @click="activeId = (activeId === item._id) ? null : item._id; closeMenu()">
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="{ 'rotate-180': item.isClicked }" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 330 330" style=" fill: white;" xml:space="preserve">
                                            <path
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item.isClicked || item._id == activeId"
                                        class="bg-gray-50 py-2 px-3 rounded-md absolute top-full"
                                        style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
                                        <div v-for="(child, i) in item.childrens" :key="i" class="">
                                            <a class="flex p-3 mx-1 rounded-md text-black text-xs mb-2  hover:text-red-500 duration-10 hover:bg-gray-200 "
                                                :href="child.url">{{ child.text }}</a>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>

                        <div class="text-xs mx-3 my-6">
                            <nuxt-link :to="'/marques'"
                                class=" text-white  hover:text-red-500 transition duration-1000 ease-in-out ">
                                Marques
                            </nuxt-link>

                        </div>

                        <div class="text-xs mx-3 my-6">
                            <nuxt-link :to="'/marques'"
                                class=" text-white  hover:text-red-500 transition duration-1000 ease-in-out ">
                                Partenaires
                            </nuxt-link>
                        </div>

                        <div class="text-xs mx-3 my-6">
                            <nuxt-link :to="'/marques'"
                                class=" text-white  hover:text-red-500 transition duration-1000 ease-in-out ">
                                FAQ's
                            </nuxt-link>
                        </div>

                        <div class="text-xs mx-3 my-6">
                            <nuxt-link :to="'/marques'"
                                class=" text-white  hover:text-red-500 transition duration-1000 ease-in-out ">
                                Contacts
                            </nuxt-link>
                        </div> -->
