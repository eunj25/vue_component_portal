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
            :to="subMenu.link">
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
            { title: 'color', link: '/color' },
            { title: 'typography', link: '/typography' },
          ],
        },
        {
          Depth: 'components',
          sub_menu: [
            { title: 'Button', link: '/button'},
            { title: 'input', link: '/input'},
            { title: 'list', link: '/list'},
          ],
        }
      ],
    };
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