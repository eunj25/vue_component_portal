<template>
  <Paper>
    <label>Checkbox</label>
    <div class="control_wrap">
      <CheckboxGroup 
        :items="checkboxItems"/>
    </div>
  </Paper>
</template>

<script>
import Paper from "~/components/BasePaper.vue";
import CheckboxGroup from "~/components/BaseCheckbox.vue";

export default {
  components: {
    Paper,
    CheckboxGroup
  },
  data() {
    return {
      checkboxItems: [
        { id: 'check1', label: '체크된 상태', checked: true },
        { id: 'check2', label: '체크하지 않은 상태', checked: false }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.control_wrap {
  display: flex;
  align-items: center;
  gap: $space-16;
  padding: $space-8;      
}

</style>