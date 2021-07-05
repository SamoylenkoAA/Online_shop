<template>
  <nav class="container-fluid navbar navbar-light bg-light d-flex justify-content-between">
    <a class="navbar-brand" href="#">
      <img src="@/assets/images/logo.png" height="34" width="151"/>
    </a>
    <div class="cart-container">
      <vue-feather size="38" type="shopping-cart"></vue-feather>
      <span
        v-if="countInCart"
        class="cart-badge"
      >
        {{countInCart}}
      </span>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters({countInCart: 'countInCart'})
  }
}
</script>

<style scoped>
  .cart-container{
    position: relative;
  }
  .cart-badge{
    display: inline-block;
    position: absolute;
    top: -6px;
    left: 20px;
    width: 23px;
    line-height: 21px;
    text-align: center;
    border: 1px solid red;
    background-color: red;
    color: white;
    border-radius: 50px;
    font-size: 15px;
  }
</style>