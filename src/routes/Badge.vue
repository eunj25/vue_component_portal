<template>
  <Paper>
    <label for="variant">Button color:</label>
    <select id="variant" v-model="selectedVariant">
      <option v-for="variant in variants" :key="variant" :value="variant">
        {{ variant }}
      </option>
    </select>

    <label for="type">Button Size:</label>
    <select id="type" v-model="selectedType">
      <option v-for="type in types" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
  </Paper>

  <Paper>
    <Badge 
      :variant="selectedVariant" 
      :type="selectedType">
      Test Badge
    </Badge>
  </Paper>
 
</template>

<script>  
import Badge from "~/components/BaseBadge.vue";
import Paper from "~/components/BasePaper.vue";

export default {
  components: {
    Badge,
    Paper
  },
  data() {
    return {
      selectedVariant: "bl",
      selectedType: "default",
      
      variants: ["bl", "rd", "ye", "gr", "gy", "sk"],
      types: ["default", "light", "line", "clean"],
    };
  },
  watch: {
    selectedVariant() {
      this.$emit("update:size", this.selectedVariant);
    },
    selectedType() {
      this.$emit("update:size", this.selectedType);
    },
  },
};

</script>