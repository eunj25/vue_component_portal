<template>
  <div 
    :class="tabClasses" 
    id="tabBtn">
    <button 
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab_button"
      :class="{ active: activeTab === tab.id }"
      @click="selectTab(tab.id)">
      {{ tab.title }}
    </button>
  </div>
  <div 
    v-for="(tab, index) in tabs"
    :key="index"
    class="tab_content"
    :class="{ active: activeTab === tab.id }"
    v-show="activeTab === tab.id" >
    <slot :name="tab.id" />
  </div>
</template>

<script>
export default {
  name: 'TabBtn',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "" // line 등 스타일을 조정할 수 있도록
    },
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      activeTab: this.modelValue || (this.tabs.length ? this.tabs[0].id : ""),
    };
  },
  watch: {
    modelValue(newValue) {
      this.activeTab = newValue;
    }
  },
  methods: {
    selectTab(id) {
      this.activeTab = id;
      this.$emit("update:modelValue", id);
    }
  },
  computed: {
    tabClasses() {
      return [
        "tab_menu",
        `${this.variant}`,
        `${this.size}`,
     ]
    }
  },
};

</script>

<style lang="scss" scoped> 

.tab_menu {
  display: flex;
  align-items: center;
  // justify-content: start;
  gap: $space-8;
  border: $border;
  border-radius: $border-radius;
  background-color: $gray30;
  padding: $space-4;

  .tab_button {
    width: 300px;
    padding: $space-8;
    color: $gray60;
    font-size: $body01;
    border: none;
    cursor: pointer;

    &.active {
      border-radius: $border-radius;
      background: $wh;
      box-shadow: 0px 5px 5px 0px rgba(51, 51, 51, 0.09);
      color: $secondary50;
    }
  }

  &.line {
    border: none;
    border-radius: 0;
    background-color: transparent;
    button {
      width: auto;
      text-align: left;
      font-size: $body02;
      background-color: $gray30;
      &.active {
        border: $border;
        background: $wh;
        color: $bk;
      }
    }
    &.sm {
      button {
        font-size: $caption;
        padding: $space-4 $space-8;
        &.active {
          box-shadow: none;
        }
      }
    }
  } 
}

.tab_content {
  display: none;
  &.active {
    display: block;
  }
}

</style>