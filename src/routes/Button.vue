<template>
  <Paper>
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
  </Paper>
  
  <Paper>
    <Button 
      :variant="computedVariant"
      :size="selectedSize"
    >
      Test Button
    </Button>
  </Paper>

</template>

<script>
import Paper from "~/components/BasePaper.vue";
import Button from "~/components/BaseButton.vue";

export default {
  components: {
    Button,
    Paper
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

<style lang="scss">


</style>