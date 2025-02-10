<template>
  <details>
    <summary>
      <slot name="title">{{ title }}</slot>
      <span v-if="caption">{{ caption }}</span>
    </summary>
    <div class="accordion_body">
      <slot name="content"></slot>
    </div>
  </details>
</template> 

<script>  
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    caption: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>

details {
  background-color: $wh;
  border: $border;
  border-radius: $border-radius;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  summary {
    &::-webkit-details-marker {
      display: none;
    }

    display: block;
    font-size: $subtitle01;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    padding: $space-8 $space-16;

    span {
      font-size: $caption;
      font-weight: normal;
      padding-left: $space-8;
    }

    &::after {
      content: "+";
      font-size: 20px;
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      background-color: $wh;
      border: $bk;
    }
  }
  .accordion_body {
    padding: $space-16;
  }

  &[open] summary {
    border-bottom: $border;

    &::after {
      content: "-";
    }
  }
}


</style>