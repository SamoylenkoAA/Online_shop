<template>
  <div
      class="form-check-inline"
      v-for="(options, i) in configurable_options[1].values"
      :key="i"
  >
    <radio-button :text="options.label" name="size" />
  </div>
</template>

<script>
import RadioButton from "@/components/UI/RadioGroupButton/Index";

export default {
  name: "SizeProduct",
  props: {
    configurable_options: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    RadioButton
  }
}
</script>

<style scoped>

</style>