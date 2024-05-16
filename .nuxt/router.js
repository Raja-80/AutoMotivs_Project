import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37f415e2 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _90d70c9c = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _6bba526d = () => interopDefault(import('..\\pages\\contact copy\\index.vue' /* webpackChunkName: "pages/contact copy/index" */))
const _f30f1e90 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages/error" */))
const _04bd4099 = () => interopDefault(import('..\\pages\\thanks\\index.vue' /* webpackChunkName: "pages/thanks/index" */))
const _1379661d = () => interopDefault(import('..\\pages\\wishlist\\index.vue' /* webpackChunkName: "pages/wishlist/index" */))
const _42b25282 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6aa741b2 = () => interopDefault(import('..\\pages\\account\\_route.vue' /* webpackChunkName: "pages/account/_route" */))
const _a7488f74 = () => interopDefault(import('..\\pages\\pages\\_slug.vue' /* webpackChunkName: "pages/pages/_slug" */))
const _266e5cd7 = () => interopDefault(import('..\\pages\\posts\\_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _56a17fd6 = () => interopDefault(import('..\\pages\\products\\_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _16b4f304 = () => interopDefault(import('..\\pages\\shop\\_slug.vue' /* webpackChunkName: "pages/shop/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _37f415e2,
    name: "cart"
  }, {
    path: "/contact",
    component: _90d70c9c,
    name: "contact"
  }, {
    path: "/contact%20copy",
    component: _6bba526d,
    name: "contact copy"
  }, {
    path: "/error",
    component: _f30f1e90,
    name: "error"
  }, {
    path: "/thanks",
    component: _04bd4099,
    name: "thanks"
  }, {
    path: "/wishlist",
    component: _1379661d,
    name: "wishlist"
  }, {
    path: "/",
    component: _42b25282,
    name: "index"
  }, {
    path: "/account/:route?",
    component: _6aa741b2,
    name: "account-route"
  }, {
    path: "/pages/:slug?",
    component: _a7488f74,
    name: "pages-slug"
  }, {
    path: "/posts/:slug?",
    component: _266e5cd7,
    name: "posts-slug"
  }, {
    path: "/products/:slug?",
    component: _56a17fd6,
    name: "products-slug"
  }, {
    path: "/shop/:slug?",
    component: _16b4f304,
    name: "shop-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
