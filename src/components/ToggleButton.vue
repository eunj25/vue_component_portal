<template>
  <input type="checkbox" id="toggle" hidden> 
  <label for="toggle" class="toggleSwitch">
    <span class="toggleButton"></span>
  </label>
</template>

<script>
export default {
  name: "ToggleBtn",
  props: {
    checked: Boolean,
  },
};
</script>

<style lang="scss" scoped>


.toggleSwitch {
  width: 40px;
  height: 20px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  border: $border;
  cursor: pointer;

  .toggleButton {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: $secondary50;
  }
}

#toggle:checked ~ .toggleSwitch {
  background: $secondary50;

  .toggleButton {
    left: calc(100% - 16px);
    background: #fff;
  }
}

.toggleSwitch, .toggleButton {
  transition: all 0.2s ease-in;
}

.toggleSwitch.active {
  background: $secondary50;

  .toggleButton {
    left: calc(100% - 44px);
    background: #fff;
  }
}

</style>