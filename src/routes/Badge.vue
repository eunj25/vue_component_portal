<template>
  <Paper>
    <label for="variant">badge color</label>
    <Select 
      v-model="selectedVariant" 
      :options="selectedVariants" 
      size="md" 
    />

    <label for="type">badge Size</label>
    <Select 
      v-model="selectedType" 
      :options="selectedTypes" 
      size="md" 
    />
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
import Select from "~/components/BaseSelectbox.vue";

export default {
  components: {
    Badge,
    Select,
    Paper
  },
  data() {
    return {
      selectedVariant: "bl",
      selectedType: "default",
      selectedVariants: [
        { label: "Blue", value: "bl" },
        { label: "sky", value: "sk" },
        { label: "Red", value: "rd" },
        { label: "yellow", value: "ye" },
        { label: "green", value: "gr" },
        { label: "gray", value: "gy" },
      ],
      selectedTypes: [
        { label: "Default", value: "default" },
        { label: "light", value: "light" },
        { label: "line", value: "line" },
        { label: "clean", value: "clean" },
      ],
    };
  }
};

</script>