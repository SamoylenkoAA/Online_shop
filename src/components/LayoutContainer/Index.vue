<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-12">
        <slot name="header"></slot>
      </div>
      <div class="col-md-4 col-lg-3 col-xl-2">
        <slot name="sideBar"></slot>
      </div>
      <div class="col-md-8 col-lg-9 col-xl-10">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutContainer"
}
</script>

<style scoped>

</style>