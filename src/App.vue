<template>
  <!-- 동일하게 출력됨 -->
  <Header />  
  <!--  페이지가 바뀌는 건 해당 태그에서 출력이 됨  -->
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>