<template>
  <h1>button</h1>
  <div>
    <label for="variant">Button color:</label>
    <select id="variant" v-model="selectedVariant">
      <option v-for="variant in variants" :key="variant" :value="variant">
        {{ variant }}
      </option>
    </select>

    <label>
      <input type="checkbox" v-model="isOutlined" />
      Button Outline
    </label>

    <label for="size">Button Size:</label>
    <select id="size" v-model="selectedSize">
      <option v-for="size in sizes" :key="size" :value="size">
        {{ size }}
      </option>
    </select>

    <BaseButton 
      :variant="computedVariant"
      :size="selectedSize"
    >
      Test Button
    </BaseButton>

  </div>
</template>

<script>
import BaseButton from "~/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      selectedVariant: "bk",
      selectedSize: "xs",
      isOutlined: false,
      
      variants: ["bk", "bl", "rd"],
      sizes: ["xs", "sm", "md"],
    };
  },
  computed: {
    computedVariant() {
      return this.isOutlined ? `${this.selectedVariant}-outline` : this.selectedVariant;
    },
  },
  watch: {
    selectedSize() {
      this.$emit("update:size", this.selectedSize);
    },
  },
};
</script>