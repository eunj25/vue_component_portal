<template>
  <Header />  
  <!--  페이지가 바뀌는 건 해당 태그에서 출력이 됨  -->
  <main>
    <Menu  @update-header="updateHeader" />
    <div class="container">
      <!-- <pageHeader :title="pageTitle" :hint="pageHint" /> -->
      <div class="container_inner">
        <RouterView />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import { ref } from "vue";

import Header from '~/components/Header'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
import pageHeader from "~/components/pageHeader.vue";


export default {
  components: {
    Header,
    Menu,
    Footer,
    // pageHeader
  }, 
}
</script>

<style lang="scss">
  @import 'scss/main';

  main {
    background-color: $gray20;
    display: flex;
    height: calc(100vh - $header-height);
  }

  .container {
    position: relative;
    width: calc(100% - $menu-width);
    overflow-y: scroll;
    .container_inner {
      display: flex;
      align-items: flex-start;
      padding: $space-40;
      gap: $space-16;
      > * {
        flex: 1;
      }
    }
  }

  @media (max-width: 900px) {
    .container_inner {
      flex-direction: column;
      align-items: stretch !important;
    }
  }


</style>