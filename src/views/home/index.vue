<template>
  <div class="contianer-fluid home-container">
    <section class="sec-1">
      <Navigation class="home-navigation"></Navigation>
      <Section1 class="home-sections-1"></Section1>
    </section>

    <Section2 class="home-sections-2"></Section2>
    <Section3></Section3>
    <section4></section4>
    <Section51></Section51>
    <Section5></Section5>
    <Section6></Section6>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section51 from "./section5.1.vue";
import Section5 from "./section5";
import Section6 from "./section6";
import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    Section1,
    Section2,
    Section3,
    Section4,
    Section51,
    Section5,
    Section6,
    Wooter
  }
};
</script>

<style lang="less" scoped>
.home-container {
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

    .home-sections-1 {
      flex: 1;
    }
  }
}
</style>
