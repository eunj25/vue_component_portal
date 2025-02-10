<template>
  <Paper>
    <label>Toggle Button</label>
    <ToggleBtn />
  </Paper>

</template>

<script>
import Paper from "~/components/BasePaper.vue";
import ToggleBtn from "~/components/ToggleButton.vue";

export default {
  components: {
    ToggleBtn,
    Paper
  },
  data() {
    return {
      selectedOption: "",
    };
  },
};

</script>