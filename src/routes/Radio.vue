<template>
  <Paper>
    <label>Radio</label>
    <div class="control_wrap">
      <RadioGroup  
        :items="radioItems"
        name="radioTest" />    
    </div>
  </Paper>
</template>

<script>
import Paper from "~/components/BasePaper.vue";
import RadioGroup from "~/components/BaseRadio.vue";

export default {
  components: {
    Paper,
    RadioGroup
  },
  data() {
    return {
      radioItems: [
        { id: 'radio1', label: '선택된 상태', checked: true },
        { id: 'radio2', label: '선택하지 않은 상태', checked: false },
        { id: 'radio3', label: '선택된 상태', checked: false },
      ],
    };
  }
};
</script>

<style lang="scss" scoped>

.control_wrap {
  display: flex;
  flex-direction: column;
  gap: $space-16;
  padding: $space-8;      
}

</style>