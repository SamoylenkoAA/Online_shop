<template>
  <div class="card"  style="height: 530px">
    <img :src="desiredImg(item)" />
    <div class="d-flex flex-column justify-content-between card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">Price: {{item.regular_price.value}} $</p>
      <div v-if="item.configurable_options && item.variants" class="card-text mb-3">
        <div>
          <radio-group-button
              :options="item.configurable_options[0].values"
              v-model="id_color"
              :variants="variantColors"
              classRadio="custom_radio"
              classSpan="fake"
              name="color"
          />
        </div>
        <div>
          <radio-group-button
              :options="item.configurable_options[1].values"
              v-model="id_size"
              :variants="variantSizes"
              classRadio="custom_radio"
              classSpan="fake"
              name="size"
          />
        </div>
      </div>

      <button-component
        v-if="inCart(item.id)"
        name="Delete"
        className="btn-danger"
        @handler="removeInCart(item.id)"
      />
      <button-component
        v-else
        :disabled="!isDisabled"
        @handler="addInCart({
          id: item.id,
          cnt: 1,
          color: id_size ? id_color : null,
          size: id_size
        })"
      />
    </div>
  </div>
</template>

<script>
import RadioGroupButton from '@/components/UI/RadioGroupButton/Index'
import ButtonComponent from '@/components/UI/Button/Index'
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ProductItem",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    },
  },
  components: {
    RadioGroupButton,
    ButtonComponent
  },
  data: () => ({
    id_color: 931,
    id_size: null
  }),
  watch: {
    id_color(){
      this.id_size = null
    }
  },
  computed: {
    ...mapGetters({inCart: 'has'}),
    desiredImg(){
      return (item) => {
        let img = item.image
        if(item.variants){
          item.variants.map(item => {
            (item.attributes[0].value_index === this.id_color)
              ? img = item.product.image
              : null
          })
          return require('@/assets' + img)
        }else {
          return require('@/assets' + img)
        }
      }
    },
    variantColors() {
      let color = []
      this.item.variants.map(item => {
        item.attributes.map(attr => {
          ( attr.code === 'color' && !color.includes(attr.value_index) ) ? color.push(attr.value_index) : null
        })
      })

      return color
    },
    variantSizes() {
      let size = []
      this.item.variants.forEach((item) => {
        if(item.attributes[0].value_index === this.id_color){
          size.push(item.attributes[1].value_index)
        }
      })
      return size
    },
    isDisabled() {
      return this.item.configurable_options ? this.id_size !== null : true
    }
  },
  methods: {
    ...mapMutations({addInCart: 'addInCart', removeInCart: 'removeInCart'}),
  }
}
</script>

<style scoped>

</style>