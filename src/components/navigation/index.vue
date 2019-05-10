<template>
  <div class="container-fluid navigation-container">
    <img :src="require('./../../assets/images/home/atlas-logo.png')" alt="logo">
    <Menu class="menu-item-group"></Menu>
  </div>
</template>
<script>
import Menu from "./MenuLis";
export default {
  components: { Menu }
};
</script>

<style lang="less" scoped>
.navigation-container {
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 3rem;
    height: 6rem;
  }
  .menu-item-group {
    margin-right: 3rem;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  /*based on browser size 16px*/
  .navigation-container {
    height: 8rem !important;
    img {
      margin-left: 3rem;
      height: 3.6rem !important;
    }
  }
}

@media only screen and (max-width: 48em) {
  .navigation-container {
    height: 8rem !important;
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
