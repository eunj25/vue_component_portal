<template>
  <div class="paper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Paper",
};
</script>

<style in lang="scss">

.paper {
  border: $border;
  border-radius: $border-radius;
  background-color: $wh;
  padding: $space-16;
  width: 100%;

  &.info {
    display: flex;
    align-items: flex-end; 
    justify-content: space-between;
    height: 150px;

    > div:first-child {
      height: 100%;
    }

    .icon {
      @include flex-center;
      width: 30px;
      height: 30px;
      color: $wh;
      border-radius: $border-radius;
    }

    span.count {
      color: $gray70;
    }
  }
}

</style>