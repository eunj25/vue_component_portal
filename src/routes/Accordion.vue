<template>
  <Paper>
    <label>accordion option</label>
    <Select 
      v-model="selectedOption" 
      :options="selectOptions" size="md" 
    />
  </Paper>
  <Card
    cardTitle="Preivew"
    caption="Accordion Component">
    <Accordion 
     :caption="computedCaption">
      <template #title>accordion title</template>
      <template #content>
        <p>accordion content</p>
      </template>
    </Accordion>
  </Card>
</template>

<script>
import Select from "~/components/BaseSelectbox.vue";
import Paper from "~/components/BasePaper.vue";
import Card from "~/components/BaseCard.vue";
import Accordion from "~/components/Accordion.vue";

export default {
  components: {
    Select,
    Accordion,
    Card,
    Paper
  },
  data() {
    return {
      selectedOption: "",
      selectOptions: [
        { label: "cation none", value: "" },
        { label: "cation", value: "accordion caption" },
      ],
    };
  },
  computed: {
    computedCaption() {
      return this.selectedOption || false;  
      // null 또는 빈 문자열이면 false 반환 (span 태그 렌더링 방지)
    }
  }
};

</script>