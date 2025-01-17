<template>

  <header>
    <div class="flex_sm_center">
      <div class="menuToggle">
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div class="logo">
        <a href="/"><img src="/images/logo.svg" alt=""></a>
      </div>
    </div>
    <div class="profile_box" id="myPageModal">
      <div class="photo">
        <img src="/images/user.png" alt="">
      </div>
      <div class="profile">
        <div class="name">NTAS</div>
        <div class="authority">관리자(Admin)</div>
      </div>
    </div>
  </header>

</template>

<style>

  header {
    height: var(--header-height);
    padding: 9px 20px;
    background-color: var(--bk);
    color: var(--wh);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header .menuToggle {
    display: none;
    padding: var(--space-4);
    border-radius: var(--border-radius);
  }
  header .menuToggle:hover {
    background-color: #000;
  }

  header .profile_box {
    display: flex;
    align-items: center;
    gap: var(--space-12);
    padding: 0 var(--space-8);
    border-radius: var(--border-radius);
  }

  header .profile_box:hover {
    background-color: #111;
    cursor: pointer;
  }
  header .profile_box .photo {
    width: 34px;
    border-radius: var(--border-radius);
    overflow: hidden;
  }
</style>