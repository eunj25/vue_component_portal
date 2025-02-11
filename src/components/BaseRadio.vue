<template>
  <div class="radio_wrap">
    <label
      v-for="(item, index) in items"
      :key="index"
      :for="item.id"
    >
      <input 
        type="radio" 
        :id="item.id" 
        :name="name"
        :checked="item.checked"
      >
      <span>{{ item.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    name: {
      type: String,
      default:"radio01"
    },
    items: {
      type: Array,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
  .radio_wrap {
    display: flex;
    gap: $space-16;

    [type="radio"], span {
      vertical-align: middle;
    }
  
    [type="radio"] {
      &:hover {
        + span {
          cursor: pointer;
        }
  
        box-shadow: 0 0 0 max(2px, 0.2em) lightgray;
        cursor: pointer;
      }
  
      &:disabled:hover {
        box-shadow: none;
      }
    }
  
    [type='radio'] {
      appearance: none;
      width: 14px;
      height: 14px;
      border: $border;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      padding: 0;
      margin: 0 $space-8 0 0;
      transition: 0.25s;
  
      &:checked {
        border: 2px solid $wh;
        background-color: $secondary50;
        box-shadow: 0 0 0 1px $secondary50;
      }
    }
  
    [type="radio"]:disabled {
      border-color: $gray50;
      background-color: $gray30;
      cursor: not-allowed;
  
      &:checked {
        border-color: $wh;
        background-color: $gray50;
        box-shadow: 0 0 0 1px $gray50;
      }
  
      + span {
        opacity: 0.7;
      }
    }
  }

</style>