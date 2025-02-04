<template>
  <span :class="badgeClasses">
    <slot>{{ label }}</slot>
  </span>
</template>

<script>
export default {
  name: "badge",
  props: {
    label: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "bl",
    },
    type: {
      type: String,
      default: "",
    }
  },
  computed: {
    badgeClasses() {
      return [
        `badge`,
        `${this.variant}`,
        `${this.type}`,
      ];
    },
  },
};

</script>

<style lang="scss" scoped>

$badge-colors: (
  bl: $secondary50,
  rd: $danger40,
  ye: $warning60,
  gr: $success50,
  gy: $gray80,
  sk: $primary50
);

.badge {
  @include flex-center;
  width: fit-content;
  font-size: $body02;
  background-color: $secondary50;
  color: $wh;
  padding: $btn-padding-xs;
  border-radius: $border-radius;
  gap: $space-4;

  span {
    font-size: 18px;
  }

  @each $key, $color in $badge-colors {
    &.#{$key} { background-color: $color; }

    &.#{$key}.light {
      background-color: map-get((
        bl: $secondary5,
        rd: $danger5,
        ye: $warning10,
        gr: $success5,
        gy: $gray30,
        sk: $primary5
      ), $key);
      color: map-get((
        bl: $secondary50,
        rd: $danger50,
        ye: $warning80,
        gr: $success60,
        gy: $gray80,
        sk: $primary60
      ), $key);
    }

    &.#{$key}.line {
      background-color: $wh;
      border: 1px solid $color;
      color: $color;
    }

    &.#{$key}.clean {
      background-color: transparent;
      color: $color;
    }
  }
}
</style>
