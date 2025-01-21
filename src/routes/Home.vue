<template>
  <div>
    <h1>Home</h1>
    <BaseButton
      label="Click Me"
      variant="primary"
      size="large"
      :loading="isLoading"
      icon="/path/to/icon.svg"
      iconPosition="left"
      @click="onClick"
    />

  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  methods: {
    handleClick() {
      console.log("Button clicked!");
    },
  },
};
</script>