<template>
  <Header />  
  <!--  페이지가 바뀌는 건 해당 태그에서 출력이 됨  -->
  <main>
    <Menu />
    <div class="container">
      <div class="container_inner">
        <RouterView />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Menu,
    Footer
  }
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
      padding: 0 $space-40;
      display: flex;
      gap: $space-16;
      flex-direction: column;
    }
  }

</style>