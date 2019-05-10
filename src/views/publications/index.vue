<template>
  <div class="contianer-fluid features-container">
    <Navigation></Navigation>
    <Pulication></Pulication>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import Pulication from "./pulication";

import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    Pulication,
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
