<template>
  <div 
    class="checkbox_wrap"
    v-for="(item, index) in items"
    :key="index"
  >
    <input 
      type="checkbox" 
      :id="item.id" 
      class="screen_reader"
      :checked="item.checked"
    >
    <div class="label_box">
      <span class="check_icon" aria-hidden="true"></span>
      <label :for="item.id">{{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    items: {
      type: Array,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
  .checkbox_wrap {
    display: flex;
    position: relative;
  }
  .screen_reader {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    margin: -1px;
    clip-path: inset(50%);
  }
  
  .label_box {
    position: relative;
  
    label {
      padding-left: $space-24;
      position: relative;
      cursor: pointer;
    }
  }
  
  .check_icon {
    width: 1.125rem;
    height: 1.125rem;
    border-radius: $border-radius;
    border: $border;
    background-color: $wh;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  
    &::before {
      display: none;
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 30%;
      height: 55%;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-70%) rotateZ(40deg);
      border-right: 2px solid $secondary50;
      border-bottom: 2px solid $secondary50;
    }
  }
  
  [type="checkbox"] {
    cursor: pointer;
  
    + .label_box .check_icon {
      transition: .25s;
    }
  
    &:hover + .label_box .check_icon {
      box-shadow: 0 0 0 max(2px, 0.2em) lightgray;
      cursor: pointer;
    }
  
    &:checked + .label_box .check_icon {
      border-color: $secondary50;
      background-color: $secondary5;
    }
  
    &:disabled {
      + .label_box {
        .check_icon {
          border-color: $gray50;
          background-color: $gray30;
        }
  
        label {
          opacity: 0.7;
        }
      }
  
      &:checked:hover + .label_box .check_icon, 
      &:hover + .label_box .check_icon {
        box-shadow: none;
      }
    }
  
    &:checked + .label_box .check_icon::before {
      border-color: $secondary50;
      display: block;
    }
  
    &:disabled:checked + .label_box .check_icon::before {
      border-color: $gray50;
      background-color: $gray30;
      display: block;
    }
  }

</style>