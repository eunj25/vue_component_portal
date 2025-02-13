<template>
  <Paper>
    <label>Tab Button style</label>
    <Select 
    v-model="selectedVariant" 
    :options="selectedVariants" 
    size="md" 
    />
    <label>Tab Button size</label>
    <Select 
      v-model="selectedSize" 
      :options="selectedSizes" 
      size="md" 
    />
  </Paper>
  
  <Card
    cardTitle="Preivew"
    caption="Tab Button Component">
    <TabBtn 
      v-model="activeTab" 
      :tabs="tabs" 
      :variant="selectedVariant"
      :size="selectedSize">
      <template #tab1>
        <Paper>tab1의 내용</Paper>
      </template>
      <template #tab2>
        <Paper>tab2의 내용</Paper>
      </template>
      <template #tab3>
        <Paper>tab3의 내용</Paper>
      </template>
    </TabBtn>
  </Card>

</template>

<script>
import Paper from "~/components/BasePaper.vue";
import Card from "~/components/BaseCard.vue";
import Select from "~/components/BaseSelectbox.vue";
import TabBtn from "~/components/TabButton.vue";

export default {
  components: {
    TabBtn,
    Select,
    Card,
    Paper
  },
  data() {
    return {
      selectedVariant: "",
      selectedVariants: [
        { label: "default", value: "" },
        { label: "line", value: "line" },
      ],
      
      selectedSize: "",
      selectedSizes: [
        { label: "small", value: "sm" },
        { label: "miduem", value: "" },
      ],

      activeTab: "tab1",
      tabs: [
        { id: "tab1", title: "tab 1" },
        { id: "tab2", title: "tab 2" },
        { id: "tab3", title: "tab 3" }
      ]
    };
  }
};
</script>