<template>
  <div class="card">
    <div class="card_head"> 
      <div class="subtitle02">{{ cardTitle }}</div>
      <span v-if="caption">{{ caption }}</span>
    </div>
    <div class="card_body">
      <slot />  
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardTitle: {
      type: String,
      default: "title",
    },
    caption: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style in lang="scss">

.card {
  border: $border;
  border-radius: $border-radius;
  background-color: $wh;
  flex: 1;

  .card_head {
    display: flex;
    align-items: center;
    // justify-content: start;
    gap: $space-10;
    padding: $space-12;
    border-bottom: $border;
    
    span {
      font-size: $caption;
      font-weight: normal;
    }

    .icon {
      font-size: $subtitle01;
    }
  }

  .card_body {
    padding: $space-12;
  }
}

</style>