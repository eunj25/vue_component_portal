<template>
  <nav class="container_menu">
    <ul>
      <li v-for="nav in menu"
          :key="nav.Depth">
        <div class="title">
          {{ nav.Depth }}
        </div>
        <div
          v-for="subMenu in nav.sub_menu " 
          :key="subMenu.Depth"
          class="sub_menu">
          <RouterLink
            :to="subMenu.link" @click="updateHeader(subMenu)">
            {{ subMenu.title }}
          </RouterLink>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      menu: [
        {
          Depth: 'foundation',
          sub_menu: [
            { title: 'color', link: '/color', hint: "color를 확인합니다." },
            { title: 'typography', link: '/typography', hint: "typography를 확인합니다." },
          ],
        },
        {
          Depth: 'components',
          sub_menu: [
            { title: 'Badge', link: '/badge', hint: "badge 컴포넌트를 확인합니다."},
            { title: 'Button', link: '/button', hint: "button 컴포넌트를 확인합니다."},
            { title: 'Toggle Button', link: '/toggle', hint: "toggle 컴포넌트를 확인합니다."},
            { title: 'Input', link: '/input', hint: "input 컴포넌트를 확인합니다."},
            { title: 'Checkbox', link: '/checkbox', hint: "Checkbox 컴포넌트를 확인합니다."},
            { title: 'Radio', link: '/radio', hint: "Checkbox 컴포넌트를 확인합니다."},
            { title: 'Accordion', link: '/accordion', hint: "accordion 컴포넌트를 확인합니다."},
          ],
        }
      ],
    };
  },
  methods: {
    updateHeader(subMenu) {
      this.$emit("update-header", subMenu.title, subMenu.hint);
    },
  },
};
</script>

<style lang="scss">

  $menu-width:280px;
  
  nav {
    width: $menu-width;
    height: calc(100vh - $header-height);
    background-color: $wh;
    border-right: $border;
    overflow-y: scroll;
    padding: $space-12 0;

    .title {
      padding: $list-padding-sm;
      font: {
        size: $subtitle02;
        weight: 700;
      };
    }

    li {
      margin-bottom: $space-16;
    }

    .sub_menu a {
      padding: $list-padding-lg;
      display: flex;
      align-items: center;
      gap: $space-10;

      &:hover {
        background-color: $list-hover-gy;
      }
    }
  }
</style>