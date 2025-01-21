<template>
  <button
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <span v-if="loading" class="button__spinner"></span>

    <!-- Leading Icon -->
    <span v-if="icon && iconPosition === 'left'" class="button__icon">
      <slot name="icon-left">
        <img :src="icon" alt="" />
      </slot>
    </span>

    <!-- Button Text or Slot Content -->
    <span v-if="!loading" class="button__label">
      <slot>{{ label }}</slot>
    </span>

    <!-- Trailing Icon -->
    <span v-if="icon && iconPosition === 'right'" class="button__icon">
      <slot name="icon-right">
        <img :src="icon" alt="" />
      </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton", // Component name
  props: {
    label: {
      type: String,
      default: "", // Default empty label if no slot or prop is provided
    },
    variant: {
      type: String,
      default: "primary", // Variants like 'primary', 'secondary', 'outlined'
    },
    size: {
      type: String,
      default: "medium", // Sizes like 'small', 'medium', 'large'
    },
    type: {
      type: String,
      default: "button", // Button type: button, submit, or reset
    },
    disabled: {
      type: Boolean,
      default: false, // Disable the button
    },
    loading: {
      type: Boolean,
      default: false, // Show loading state
    },
    icon: {
      type: String,
      default: null, // Optional icon source
    },
    iconPosition: {
      type: String,
      default: "left", // Icon position: 'left' or 'right'
    },
  },
  methods: {
    // Emits a click event only if the button is enabled
    handleClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit("click", event); // Emit the `click` event to the parent
      }
    },
  },
  computed: {
    // Dynamically generates the classes for the button
    buttonClasses() {
      return [
        "button", // Base class
        `button--${this.variant}`, // Variant-specific class
        `button--${this.size}`, // Size-specific class
        { "button--disabled": this.disabled, "button--loading": this.loading },
      ];
    },
  },
};
</script>

<style scoped>
/* Base Styles */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

/* Variants */
.button--primary {
  background-color: #007bff;
  color: white;
}
.button--secondary {
  background-color: #6c757d;
  color: white;
}
.button--outlined {
  background-color: transparent;
  border: 2px solid currentColor;
  color: #007bff;
}

/* Sizes */
.button--small {
  font-size: 0.8rem;
  padding: 0.25em 0.5em;
}
.button--medium {
  font-size: 1rem;
  padding: 0.5em 1em;
}
.button--large {
  font-size: 1.25rem;
  padding: 0.75em 1.5em;
}

/* Disabled */
.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading */
.button--loading {
  cursor: wait;
}
.button__spinner {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
}

/* Spinner Animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Icon */
.button__icon {
  display: inline-flex;
  align-items: center;
  margin-right: 0.5em;
}
.button__icon:last-child {
  margin-right: 0;
  margin-left: 0.5em;
}
</style>