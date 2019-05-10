<template>
  <div class="contianer-fluid features-container">
    <section class="sec-1">
      <Navigation></Navigation>
      <FeaSection1 class="features-sections-1"></FeaSection1>
    </section>
    <FeaSection2></FeaSection2>
    <FeaSection3></FeaSection3>
    <FeaSection4></FeaSection4>
    <FeaSection5></FeaSection5>
    <FeaSection6></FeaSection6>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import FeaSection1 from "./feaSection1";
import FeaSection2 from "./feaSection2";
import FeaSection3 from "./feaSection3";
import FeaSection4 from "./feaSection4";
import FeaSection5 from "./feaSection5";
import FeaSection6 from "./feaSection6";

import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    FeaSection1,
    FeaSection2,
    FeaSection3,
    FeaSection4,
    FeaSection5,
    FeaSection6,
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

    .features-sections-1 {
      flex: 1;
    }
  }
}
</style>
