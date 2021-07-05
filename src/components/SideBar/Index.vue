<template>
  <div>
    <div class="list-group mt-2">
      <a
        href="#"
        class="list-group-item list-group-item-action"
        v-for="brand in brands"
        :key="brand.id"
        @click="setIdBrand(brand.id)"
        >
        {{brand.title}}
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SideBar",
  computed: {
    ...mapGetters({
      brands: 'brands',
      products: 'all',
    })
  },
  methods: {
    ...mapMutations(['setIdBrand'])
  }
}
</script>

<style scoped>

</style>