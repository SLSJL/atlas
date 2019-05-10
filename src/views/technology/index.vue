<template>
  <div class="contianer-fluid features-container">
    <section class="sec-1">
      <Navigation></Navigation>
      <TechSection1 class="technology-sections-1"></TechSection1>
    </section>
    <TechSection2></TechSection2>
    <TechSection3></TechSection3>
    <TechSection4></TechSection4>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import TechSection1 from "./techSection1";
import TechSection2 from "./techSection2";
import TechSection3 from "./techSection3";
import TechSection4 from "./techSection4";

import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    TechSection1,
    TechSection2,
    TechSection3,
    TechSection4,
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

  .sec-1 {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .technology-sections-1 {
      flex: 1;
    }
  }
}
</style>
