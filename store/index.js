import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    modules: () => {},
    state: () => {
      return {
        loading: true,
        customer: null,
        IP: undefined,
        showCurrencyModal: false,
        cart: [],
        isPreview: false,
        whishlist: [],
        seo: {
          title: '',
          description: '',
          keywords: [],
          url: '',
          image: '',
          metaTags: [],
          scripts: [],
        },
        settings: null,
        domain: 'www.storeino.com',
        apps: [],
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZSI6eyJfaWQiOiI2NjBlNmY2NzkxYjUyOTUzZjg2MDY1MmEifSwic291cmNlIjoiVEhFTUVTIiwiaWF0IjoxNzEzODYzMDUxLCJleHAiOjE3NDUzOTkwNTF9.s-U71pOecna8JNVHcyGEu2AJavmLTz8NLEugvs9uMRI",
        primary: {
          rgb: { r: 0, g: 0, b: 0 },
          color: '#000000'
        },
        search: '',
        defaults: {
          image: "https://storeno.b-cdn.net/themes/palest/default-shop.jpg",
          logo: "https://storeno.b-cdn.net/themes/palest/logo.png",
          icon: "https://storeno.b-cdn.net/themes/palest/icon.png"
        },
        baseURL: 'https://api-stores.storeino.world/api',
        currency: {
          symbol: "DH",
          code: undefined
        },
        language: {
          name: "Unknown",
          code: undefined
        },
        fullImage: null,
        showHeaderMenu: false
      }
    },
    actions: () => {},
    mutations: () => {},
    getters: () => {},
    modules: () =>  { },
  })
}
export default createStore
