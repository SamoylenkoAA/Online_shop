<template>
  <div>
    <button
      type="button"
      class="btn"
      :class="className"
      :disabled="disabled"
      @click="$emit('handler')"
    >
      {{name}}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: {
      type: String,
      default: 'Add product'
    },
    className: {
      type: String,
      default: 'btn-primary'
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>