<template>
  <div class="">
    <component :is="'style'">
      :root{ --primary-rgb: {{ this.rgb_first.r }}, {{ this.rgb_first.g }},
      {{ this.rgb_first.b }}; --primary-color: rgb(var(--primary-rgb));
      --secondary-rgb: {{ this.rgb_second.r }}, {{ this.rgb_second.g }},
      {{ this.rgb_second.b }}; --secondary-color: rgb(var(--secondary-rgb)); }
      .bg-primary{ background-color: var(--primary-color); }
      .bg-secondary{ background-color: var(--secondary-color); }
      .bg-primary:hover{ background-color: rgb(var(--primary-rgb),0.8); }
      .bg-secondary:hover{ background-color: rgb(var(--secondary-rgb),0.8); }
      .bg-primary-lighter{ background-color: rgb(var(--primary-rgb),0.3); }
      .text-primary{ color: var(--primary-color); }
      .text-secondary{ color: var(--secondary-color); }
      .text-prm:hover{color: var(--primary-color);}
      .text-prm{color: #ffffff;}
      .text-navlink:hover{color: var(--primary-color);}
      .text-navlink{color: #363636;}
      .border-primary { border-color: var(--primary-color); }
    </component>

    <div class="relative bg-cover "
      :style="'background: url(' + bannerBg + ') no-repeat scroll center bottom; background-size: cover;'">

      <sections-headertop></sections-headertop>

      <sections-header></sections-header>

      <sections-banner></sections-banner>

    </div>

    <nuxt />

    <div class="footer">
      <sections-footer></sections-footer>
    </div>
    <div dir="ltr" class="footer">
      <sections-copyright></sections-copyright>
    </div>

  </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  head() {
    return {

      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$store.state.seo.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$store.state.seo.keywords.join(","),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$store.state.seo.title,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.$settings.store_name,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$store.state.seo.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$store.state.seo.image,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.$store.state.seo.url,
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$store.state.seo.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$store.state.seo.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$store.state.seo.logo,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: this.$store.state.seo.url,
        },
        {
          hid: "theme-color",
          property: "theme-color",
          content: this.$settings.style.primary_color,
        },
        {
          hid: "currency",
          name: "currency",
          content: this.$store.state.currency.code,
        },
        {
          hid: "product:price:currency",
          property: "product:price:currency",
          content: this.$store.state.currency.code,
        },
        {
          hid: "priceCurrency",
          itemprop: "priceCurrency",
          content: this.$store.state.currency.code,
        },
        ...this.$store.state.seo.metaTags,
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: this.$settings.store_favicon
            ? this.$settings.store_favicon.src
            : this.$store.state.defaults.icon,
        },
        { rel: "dns-prefetch", href: "https://storeno.b-cdn.net/stores/" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "preconnect",
          href: "https://connect.facebook.net",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "https://connect.facebook.net/en_US/fbevents.js",
          as: "script",
        },
        // ...this.otherLinks
      ],
      htmlAttrs: {
        lang: this.$store.state.language.code,
        dir: this.$store.state.language.code == "AR" ? "rtl" : "ltr",
      },
    };
  },
  data() {
    return {
      rgb_first: { r: 0, g: 0, b: 0 },
      rgb_second: { r: 0, g: 0, b: 0 },
      bannerBg: 'https://storeno.b-cdn.net/stores/4-2024/1712221821673.png',

    };
  },
  async fetch() {

    this.rgb_first = this.$tools.hexToRgb(this.$settings.style.primary_color);
    this.rgb_second = this.$tools.hexToRgb(this.$settings.style.second_color);

  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init({
        // Global settings
      });
    });
  },
};
</script>

<style>
.footer {
  background-color: #F8F7F7;
}

[dir="ltr"] .to-right {
  transform: translateX(20rem);
}

[dir="rtl"] .to-right {
  transform: translateX(-20rem) !important;
}
</style>
