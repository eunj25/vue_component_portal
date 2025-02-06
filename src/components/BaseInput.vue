<template>
  <div class="input_wrap">
    <input
    :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="sizeClass"

      :disabled="disabled"
      :readonly="readonly"
      :required="required"
    />
    <span 
      v-if="hasError" 
      class="input_hint"
      >
      <slot>{{ message }}</slot>
    </span>
  </div>
</template>

<script >  
export default {
  name: 'Input',
  props: {
    modelValue: String,
    type: { 
      type: String, 
      default: "text"
     },
    placeholder: { 
      type: String, 
      default: ""
     },
    disabled: { 
      type: Boolean, 
      default: false
     },
    readonly: { 
      type: Boolean, 
      default: false
     },
     required: { 
      type: Boolean, 
      default: false
     },
    message: { 
      type: String, 
      default: "필수 입력 항목입니다." 
    }, 
    size: { 
      type: String, 
      default: "md" 
    }, // "sm", "md", "lg"
  },
  computed: {
    sizeClass() {
      return {
        sm: "--sm",
        md: "--md"
      }[this.size];
    },
    hasError() {
      return this.required && !this.modelValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.input_wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: $space-8 0px;
  gap: $space-8;

  input {
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

}


</style>