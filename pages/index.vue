<template>
  <div>

    <sections-promotions></sections-promotions>

    <div class="">

      <sections-categories></sections-categories>

    </div>


    <div class="">

      <sections-inscription></sections-inscription>

    </div>

    <div class="">

      <sections-pieces></sections-pieces>

    </div>

    <div class="">

      <sections-services></sections-services>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$tools.call('PAGE_VIEW');
    this.$storeino.fbpx('PageView')
  },
}
</script>

<style></style>

<!-- 
<template>
  <div>

  </div>
</template>
<script>
export default {
  
 
}
</script>

<style></style> -->
