<template>
  <div class="container-fluid navigation-container">
    <LanguageBar></LanguageBar>
    <div class="nav-content">
      <img :src="require('./../../assets/images/home/atlas-logo.png')" alt="logo">
      <Menu class="menu-item-group"></Menu>
    </div>
  </div>
</template>
<script>
import Menu from "./MenuList";
import LanguageBar from "./../languageBar";

export default {
  components: { Menu, LanguageBar }
};
</script>

<style lang="less" scoped>
.navigation-container {
  height: 10rem;

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    img {
      margin-left: 3rem;
      height: 4rem;
    }
    .menu-item-group {
      margin-right: 3rem;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  /*based on browser size 16px*/
  .navigation-container {
    height: 8rem !important;

    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
      img {
        margin-left: 3rem;
        height: 3.6rem !important;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .navigation-container {
    height: 10rem !important;
    img {
      margin-left: 1.5rem;
      height: 3rem !important;
    }
  }

  .menu-item-group {
    margin-right: 0 !important;
  }
}
</style>
