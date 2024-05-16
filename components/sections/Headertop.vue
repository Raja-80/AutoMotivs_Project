<template>
    <div v-if="topheader.show_section" class="relative">

        <div class="absolute border-b border-gray-700 absolute top-0 left-0 right-0 ">

            <nav class="container flex justify-between items-center text-white lg-pl-0 pl-6 w-full ">


                <!-- Desktop top header -->
                <div class="hidden lg:flex flex-row justify-btween items-start py-3 header-menu w-full">

                    <div class="flex flex-row justify-start items-center w-full">
                        <div v-if="topheader.show_callnumber"
                            class="flex flex-row justify-center items-center text-xs mx-3 ">

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z"
                                    stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div class="cursor-pointer  text-white ml-1  ">
                                {{ topheader.callnumber }}
                            </div>

                        </div>

                        <div v-if="topheader.show_company_adresse"
                            class="flex flex-row justify-center items-center  text-xs mx-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1343 14.1667C16.756 14.5467 17.0833 14.9778 17.0833 15.4167C17.0833 15.8555 16.756 16.2866 16.1343 16.6667C15.5126 17.0467 14.6185 17.3623 13.5417 17.5818C12.4649 17.8012 11.2434 17.9167 9.99999 17.9167C8.75661 17.9167 7.53513 17.8012 6.45832 17.5818C5.38152 17.3623 4.48734 17.0467 3.86564 16.6667C3.24395 16.2866 2.91666 15.8555 2.91666 15.4167C2.91666 14.9778 3.24395 14.5467 3.86564 14.1667"
                                    stroke="white" stroke-linecap="round" />
                                <path
                                    d="M16.25 8.33331C16.25 12.4416 11.8355 15.2361 10.4267 16.0234C10.1595 16.1727 9.84048 16.1727 9.57334 16.0234C8.16447 15.2361 3.75 12.4416 3.75 8.33331C3.75 4.58331 6.77834 2.08331 10 2.08331C13.3333 2.08331 16.25 4.58331 16.25 8.33331Z"
                                    stroke="white" />
                                <circle cx="9.99999" cy="8.33333" r="2.83333" stroke="white" />
                            </svg>

                            <div class="cursor-pointer  text-white ml-1  ">
                                {{ topheader.adresse }}
                            </div>
                        </div>

                        <div v-if="topheader.show_availability"
                            class="flex flex-row justify-center items-center text-xs mx-3 ">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.58335 17.1666C13.4078 17.1666 16.4722 13.9378 16.4722 9.99998C16.4722 6.06221 13.4078 2.83331 9.58335 2.83331C5.75888 2.83331 2.69446 6.06221 2.69446 9.99998C2.69446 13.9378 5.75888 17.1666 9.58335 17.1666Z"
                                    stroke="white" />
                                <path
                                    d="M13.1771 9.99998H9.83333C9.69526 9.99998 9.58333 9.88805 9.58333 9.74998V7.08331"
                                    stroke="white" stroke-linecap="round" />
                            </svg>

                            <div class=" text-white ml-1  ">
                                {{ topheader.availability }}
                            </div>
                        </div>
                    </div>

                    <div class="relative">

                        <div v-if="this.otherMenu && this.otherMenu.length > 0" class="flex flex-row header-menu ">
                            <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                                <li class="flex flex-row items-center justify-between w-full rounded-md ">
                                    <a class="text-xs m-1 w-full flex text-prm" :href="item.url">
                                        {{ item.text }}
                                    </a>
                                    <button class=" p-2 mx-1"
                                        @click="activeId = activeId != item._id ? item._id : null">
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="activeId == item._id ? 'rotate-180' : ''"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                            xml:space="preserve">
                                            <path fill="white"
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item._id == activeId">
                                        <div v-for="(item, i) in item.childrens" :key="i"
                                            class="pr-10 bg-gray-50 rounded-md">
                                            <a class="p-1 mx-1 text-gray-400 rounded-md text-xs mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                :href="item.url" @click="closeMenu">{{ item.text }}</a>
                                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                <li v-for="(child, ii) in item.childrens" :key="ii">
                                                    <a class="p-1 mx-1 text-gray-400 rounded-md text-xs mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                        :href="child.url" @click="closeMenu">
                                                        {{ child.text }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>
                    </div>

                </div>


                <!-- Responsive top header -->
                <div class=" header-menu lg:hidden w-full">

                    <button @click="toggleMenu" class=" p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    <!-- Responsive header items -->
                    <div v-if="isOpen" class=" absolute top-20 right-0 left-0 bg-black p-4 pb-40 shadow-md w-3/6">

                        <div class="flex flex-col justify-center items-start w-full">
                            <div v-if="topheader.show_callnumber"
                                class="flex flex-row justify-center items-center text-xs mx-1 mb-1 ">

                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V5C2.5 11.9033 8.09667 17.5 15 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.1008C17.5 12.9259 17.445 12.7553 17.3427 12.6134C17.2404 12.4714 17.096 12.3653 16.93 12.31L13.1858 11.0617C12.9956 10.9984 12.7888 11.0059 12.6036 11.0827C12.4184 11.1596 12.2671 11.3006 12.1775 11.48L11.2358 13.3608C9.19538 12.4389 7.5611 10.8046 6.63917 8.76417L8.52 7.8225C8.69938 7.73288 8.84042 7.58158 8.91726 7.39637C8.9941 7.21116 9.00158 7.00445 8.93833 6.81417L7.69 3.07C7.63475 2.90413 7.52874 2.75984 7.38696 2.65754C7.24519 2.55525 7.07483 2.50013 6.9 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816Z"
                                        stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <div class="cursor-pointer  text-white ml-1 ">
                                    {{ topheader.callnumber }}
                                </div>

                            </div>

                            <div v-if="topheader.show_company_adresse"
                                class="flex flex-row justify-center items-center text-xs mx-1 mb-1">
                                <svg width="22" height="22" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1343 14.1667C16.756 14.5467 17.0833 14.9778 17.0833 15.4167C17.0833 15.8555 16.756 16.2866 16.1343 16.6667C15.5126 17.0467 14.6185 17.3623 13.5417 17.5818C12.4649 17.8012 11.2434 17.9167 9.99999 17.9167C8.75661 17.9167 7.53513 17.8012 6.45832 17.5818C5.38152 17.3623 4.48734 17.0467 3.86564 16.6667C3.24395 16.2866 2.91666 15.8555 2.91666 15.4167C2.91666 14.9778 3.24395 14.5467 3.86564 14.1667"
                                        stroke="white" stroke-linecap="round" />
                                    <path
                                        d="M16.25 8.33331C16.25 12.4416 11.8355 15.2361 10.4267 16.0234C10.1595 16.1727 9.84048 16.1727 9.57334 16.0234C8.16447 15.2361 3.75 12.4416 3.75 8.33331C3.75 4.58331 6.77834 2.08331 10 2.08331C13.3333 2.08331 16.25 4.58331 16.25 8.33331Z"
                                        stroke="white" />
                                    <circle cx="9.99999" cy="8.33333" r="2.83333" stroke="white" />
                                </svg>

                                <div class="cursor-pointer  text-white ml-1 ">
                                    {{ topheader.adresse }}
                                </div>
                            </div>

                            <div v-if="topheader.show_availability"
                                class="flex flex-row justify-center items-center text-xs mx-1 mb-1 ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.58335 17.1666C13.4078 17.1666 16.4722 13.9378 16.4722 9.99998C16.4722 6.06221 13.4078 2.83331 9.58335 2.83331C5.75888 2.83331 2.69446 6.06221 2.69446 9.99998C2.69446 13.9378 5.75888 17.1666 9.58335 17.1666Z"
                                        stroke="white" />
                                    <path
                                        d="M13.1771 9.99998H9.83333C9.69526 9.99998 9.58333 9.88805 9.58333 9.74998V7.08331"
                                        stroke="white" stroke-linecap="round" />
                                </svg>

                                <div class=" text-white ml-1 ">
                                    {{ topheader.availability }}
                                </div>
                            </div>
                        </div>

                        <div v-if="this.otherMenu && this.otherMenu.length > 0">
                            <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                                <li class="flex flex-row text items-center mb-1 justify-between w-full rounded-md ">
                                    <a class="p-2 m-1 w-full flex text-xs" :href="item.url">
                                        {{ item.text }}
                                    </a>
                                    <button class=" p-2 mx-1"
                                        @click="activeId = activeId != item._id ? item._id : null">
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="activeId == item._id ? 'rotate-180' : ''"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                            xml:space="preserve">
                                            <path fill="white"
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item._id == activeId">
                                        <div v-for="(item, i) in item.childrens" :key="i"
                                            class="pr-10 bg-gray-50 rounded-md">
                                            <a class="p-1 mx-1 text-gray-400 rounded-md text-xs mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                :href="item.url" @click="closeMenu">{{ item.text }}</a>
                                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                <li v-for="(child, ii) in item.childrens" :key="ii">
                                                    <a class="p-1 mx-1 text-gray-400 rounded-md text-xs mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                        :href="child.url" @click="closeMenu">
                                                        {{ child.text }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topheader: this.$settings.sections.topheader,
            isOpen: false,
            activeId: null,
            isClicked: false,
            otherMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.topheader.show_languages,
                    isClicked: false,
                    childrens: this.$settings.store_languages.map(l => {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`,
                            clickHandler: () => {
                                window.location.href = `?lang=${l.code}`;
                            }
                        }
                    })
                },
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.topheader.show_currency,
                    isClicked: false,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`,
                            clickHandler: () => {
                                window.location.href = `?cur=${c.code}`;
                            }
                        }
                    })
                }
            ].filter(item => item.active)





        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
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