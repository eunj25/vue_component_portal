<template>
  <div 
    class="paper"
    style="display: flex;
    gap: 24px;
    flex-direction: column;"
  >
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
  </div>
  
    <div class="paper">
      <Button 
        :variant="computedVariant"
        :size="selectedSize"
      >
        Test Button
      </Button>
    </div>

</template>

<script>
import Button from "~/components/BaseButton.vue";

export default {
  components: {
    Button,
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

.paper {
  border: $border;
  border-radius: $border-radius;
  background-color: $wh;
  padding: $space-16;
  width: 100%;

  &.info {
    display: flex;
    align-items: flex-end; 
    justify-content: space-between;
    height: 150px;

    > div:first-child {
      height: 100%;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      color: $wh;
      border-radius: $border-radius;
    }

    span.count {
      color: $gray70;
    }
  }
}
</style>