export { default as SectionsBanner } from '../..\\components\\sections\\Banner.vue'
export { default as SectionsCategories } from '../..\\components\\sections\\Categories.vue'
export { default as SectionsCopyright } from '../..\\components\\sections\\Copyright.vue'
export { default as SectionsFooter } from '../..\\components\\sections\\Footer.vue'
export { default as SectionsHeader } from '../..\\components\\sections\\Header.vue'
export { default as SectionsHeadertop } from '../..\\components\\sections\\Headertop.vue'
export { default as SectionsInscription } from '../..\\components\\sections\\Inscription.vue'
export { default as SectionsPieces } from '../..\\components\\sections\\Pieces.vue'
export { default as SectionsPromotions } from '../..\\components\\sections\\Promotions.vue'
export { default as SectionsServices } from '../..\\components\\sections\\Services.vue'
export { default as SiAppLoader } from '../..\\components\\si\\AppLoader.vue'
export { default as SiBlog } from '../..\\components\\si\\Blog.vue'
export { default as SiCarousel } from '../..\\components\\si\\Carousel.vue'
export { default as SiImage } from '../..\\components\\si\\Image.vue'
export { default as SiLoader } from '../..\\components\\si\\Loader.vue'
export { default as SiLoaderGlobal } from '../..\\components\\si\\LoaderGlobal.vue'
export { default as SiPriceRange } from '../..\\components\\si\\PriceRange.vue'
export { default as SiProduct } from '../..\\components\\si\\Product.vue'
export { default as SiProductcart } from '../..\\components\\si\\Productcart.vue'
export { default as SiProductDetails } from '../..\\components\\si\\ProductDetails.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
