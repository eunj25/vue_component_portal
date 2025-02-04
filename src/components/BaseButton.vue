<template>
  <button
    :class="buttonClasses" 
    :type="type"
    :disabled="disabled || loading"
  >
    <slot>{{ label }}</slot>

    <!-- Loading Spinner -->
    <!-- <span v-if="loading" class="button__spinner"></span> -->

    <!-- Leading Icon -->
    <!-- <span v-if="icon && iconPosition === 'left'" class="button__icon">
      <slot name="icon-left">
        <img :src="icon" alt="" />
      </slot>
    </span> -->

    <!-- Button Text or Slot Content -->
    <!-- <span v-if="!loading" class="button__label">
      <slot>{{ label }}</slot>
    </span> -->

    <!-- Trailing Icon -->
    <!-- <span v-if="icon && iconPosition === 'right'" class="button__icon">
      <slot name="icon-right">
        <img :src="icon" alt="" />
      </slot>
    </span> -->
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "bk", 
    },
    size: {
      type: String,
      default: "sm", 
    },
    type: {
      type: String,
      default: "button", 
    },
    // disabled: {
    //   type: Boolean,
    //   default: false, 
    // },
    // loading: {
    //   type: Boolean,
    //   default: false, 
    // },
    // icon: {
    //   type: String,
    //   default: null, 
    // },
    // iconPosition: {
    //   type: String,
    //   default: "left"
    // },
  },
  // methods: {
  //   handleClick(event) {
  //     if (!this.disabled && !this.loading) {
  //       this.$emit("click", event); // Emit the `click` event to the parent
  //     }
  //   },
  // },
  computed: {
    buttonClasses() {
      return [
        "button",
        `button--${this.variant}`,
        `button--${this.size}`,
        // { "button--disabled": this.disabled, "button--loading": this.loading },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
/* Base Styles */
.button {
  cursor: pointer;
  border-radius: $border-radius;
  transition: .25s;
  text-wrap: nowrap;
  border: none;

  //variants 
  &--bk {
    border: 1px solid $bk;
    background-color: $bk;
    color: $wh;
    &:hover {
      background-color: $gray90;
    }
  }
  &--bk-outline {
    border: 1px solid $btn-gy;
    background-color: $btn-wh;
    color: $bk;
    &:hover {
      background-color: $gray30;
    }
  }

  &--bl {
    border: 1px solid $btn-bl;
    background-color: $btn-bl;
    color: $wh;

    &:hover {
      background-color: $secondary60;
    }
  }

  &--bl-outline {
    color: $btn-bl;
    border: 1px solid $btn-bl;
    background-color: $btn-wh;

    &:hover {
      background-color: $btn-bl;
      color: $wh;
    }
  }

  &--rd {
    border: 1px solid $btn-rd;
    background-color: $btn-rd;
    color: $wh;
    
      &.rd:hover {
        background-color: $danger60;
      }
  }

  &--rd-outline {
    color: $btn-rd;
    border: 1px solid $btn-rd;
    background-color: $btn-wh;

    &:hover {
      background-color: $btn-rd;
      color: $wh;
    }
  }

  // Sizes 
  &--md {
    padding: $btn-padding-md;
  }
  &--sm {
    padding: $btn-padding-sm;
  }
  &--xs {
    padding: $btn-padding-xs;
  }
  &--mini {
    // width: 20px;
    // height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: $border;
    background-color: $wh;
    color: $bk;

    &:hover {
      background-color: $gray30;
    }
  }
}

</style>