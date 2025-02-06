<template>
  <Paper>
    <label for="variant">Button color</label>
    <Select 
      v-model="selectedVariant" 
      :options="selectedVariants" 
      size="md" 
    />
    
    <label for="size">Button Size</label>
    <Select 
    v-model="selectedSize" 
    :options="selectedSizes" 
    size="md" 
    />
  
    <label>
      <input type="checkbox" v-model="isOutlined" />
      Button Outline
    </label>
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
import Select from "~/components/BaseSelectbox.vue";

export default {
  components: {
    Button,
    Paper,
    Select
  },
  data() {
    return {
      selectedVariant: "bk",
      selectedSize: "xs",
      selectedVariants: [
        { label: "Black", value: "bk" },
        { label: "Blue", value: "bl" },
        { label: "Red", value: "rd" },
      ],
      selectedSizes: [
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
      ],
      isOutlined: false,
    };
  },
  computed: {
    computedVariant() {
      return this.isOutlined ? `${this.selectedVariant}-outline` : this.selectedVariant;
    },
  }
};
</script>

<style lang="scss">


</style>