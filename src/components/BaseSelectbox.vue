<template>
  <select
  :value="modelValue"
  :class="sizeClass"
  :disabled="disabled"
  :required="required"
  @change="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="(option, index) in options" :key="index" :value="option.value">
      {{ option.label }}
    </option>
  </select>

</template>


<script>
export default {
  name: "Select",
  props: {
    modelValue: [String, Number],
    options: { type: Array, required: true }, // [{ label: "Option 1", value: "1" }, ...]
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    size: { type: String, default: "" },
  },
  computed: {
    sizeClass() {
      return {
        sm: "--sm",
        md: "--md",
      }[this.size];
    },
  },
};
</script>


<style lang="scss" scoped>

select {
    width: 80%;
    border: $border;;
    border-radius: $border-radius;
    padding: $input-padding;
    color: $bk;
    background-color: $wh;
    transition: 0.25s;
    cursor: pointer;
  
    &:hover { border: $input-focurs; }
    &:focus { 
      border: $input-focurs; 
      box-shadow: $input-shadow;
    }
    &:disabled { 
      border: $input-disabled; 
      background-color: $gray20; 
      color: $gray60;
    }
      
    &:required { 
      border: $input-error;
      background-color: $danger5; 
      color: $danger50;
      &:focus { 
        box-shadow: $input-error-shadow;
      }
    }
  
    &:read-only {
      &:hover,
      &:focus {
        border: $border;
        box-shadow: none;
      }
    }

    // size
    &.--md { height: 37px; }
    &.--sm { height: 28px; }
    
    &[type=file] {
      border: none;
      &:hover, 
      &:focus {
        border: none;
      }
    } 
  }

  .input_hint {
    display: block;
    width: 100%;
    padding: 0 $space-6;
    color: $danger50;
  }
  .hasError + .input_hint { display: block; }

</style>