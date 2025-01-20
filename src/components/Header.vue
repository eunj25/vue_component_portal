<template>

  <header>
    <div class="flex_sm_center">
      <div class="menuToggle">
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div class="logo">
        <a href="/"><img src="assets/images/logo.svg" alt=""></a>
      </div>
    </div>
    <div class="profile_box" id="myPageModal">
      <div class="photo">
        <img src="assets/images/user.png" alt="">
      </div>
      <div class="profile">
        <div class="name">NTAS</div>
        <div class="authority">관리자(Admin)</div>
      </div>
    </div>
  </header>

</template>

<style lang="scss" scoped>

  $header-height: 60px;

  header {
    height: $header-height;
    padding: 9px 20px;
    background-color: $bk;
    color: $gray5;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .menuToggle {
      display: none;
      padding: $space-4;
      border-radius: $border-radius;
      &:hover {
        background-color: #000;
      }
    }
    .profile_box {
      display: flex;
      align-items: center;
      gap: $space-12;
      padding: 0 $space-8;
      border-radius: $border-radius;
      &:hover {
        background-color: #111;
        cursor: pointer;
      }
      .photo {
        width: 34px;
        border-radius: $border-radius;
        overflow: hidden;
      }
    }
  }
  
</style>