<template>
  <div class="contianer-fluid features-container">
    <Navigation></Navigation>
    <Gallery></Gallery>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import Gallery from "./gallery";

import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    Gallery,
    Wooter
  }
};
</script>

<style lang="less" scoped>
.features-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
