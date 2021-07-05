<template>
  <div class="container">
    <div class="row">
      <div
        class="col col-lg-4 col-md-6 col-xs-12 col-xl-3 p-2"
        v-for="product in products"
        :key="product.id"
      >
        <product-item :item="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import productItem from '@/views/Product/Index'


export default {
  name: "Products",
  components: {
    productItem
  },
  computed: {
    ...mapGetters({ products: 'all', cart: 'cart' }),
  },
}
</script>

<style scoped>

</style>