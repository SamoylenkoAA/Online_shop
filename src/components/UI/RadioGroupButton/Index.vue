<template>
  <div
    class="form-check-inline"
    v-for="(option, i) in options"
    :key="i"
  >
    <label class="container-radio" >
      <input
        type="radio"
        :class="classRadio"
        class="disabled"
        v-model="value"
        :value="option.value_index"
        :disabled="disabled(option.value_index)"
      />
      <span
        :class="disabled(option.value_index) ? 'disabled' +' '+ classSpan  : classSpan"
        :style="{background: `${option.value}`}"
      >
         <span
           v-if="name !== 'color'"
           class="text"
         >
           {{option.label}}
         </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioGroupButton",
  props: {
    classRadio: {
      type: String,
      default: 'default_radio'
    },
    classSpan: {
      type: String,
      default: 'default_span'
    },
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Number,
    },
    text: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'option'
    },
    variants: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    value: {
      get(){
        return this.modelValue
      },
      set(val){
        this.$emit('update:modelValue', val)
      }
    },
    disabled(){
      return (id) => !this.variants.includes(id)
    }
  }
}
</script>

<style scoped>
  .custom_radio   {
    display: none;
  }
  .fake{
    display: inline-block;
    width: 30px;
    height: 30px;
    position: relative;
    text-align: center;
    border: 1px solid black;
  }
  .fake::before {
    content: "";
    position: absolute;
    top: 95%;
    left: 95%;
    transform: translate(-90%, -90%);
    display: block;
    width: 32px;
    height: 32px;
    border: 4px solid #89fa43;
    opacity: 0;
    transition: .2s;
  }
  .disabled {
    background: #ff9797;
    color: white;
  }
  .custom_radio:checked + .fake::before {
    opacity: 1;
  }
</style>