<template>
  <div class="contianer-fluid senction-5">
    <h1 class="sec-3-caption">Leading University</h1>
    <p class="body-text">
      <img :src="require('./../../assets/images/home/PolyU.png')" alt>
    </p>
    <h1 class="sec-3-caption">Collaborating Universities</h1>
    <p class="body-text">
      <img :src="require('./../../assets/images/home/BU.png')" alt>
      <img :src="require('./../../assets/images/home/HKU.png')" alt>
      <img :src="require('./../../assets/images/home/CUHK.png')" alt>
      <br>
      <img :src="require('./../../assets/images/home/CityU.png')" alt>
      <img :src="require('./../../assets/images/home/LU.png')" alt>
      <img :src="require('./../../assets/images/home/HKUST.png')" alt>
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.senction-5 {
  width: 100%;
  height: 700px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #314a7f;

  h1 {
    margin-top: 0;
    display: inline-block;
    font-size: 42px;
    font-weight: bolder;
    color: #314a7f;
  }
  p.body-text {
    margin: 15px 0;
    font-size: 24px;
    line-height: 36px;
    img {
      height: 65px;
      margin: 18px 30px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .senction-5 {
    width: 100%;
    height: 600px;
    h1 {
      font-size: 24px !important;
      margin: 0 !important;
    }

    p.body-text {
      img {
        height: 48px;
        margin: 18px 30px;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .senction-5 {
    width: 100%;
    height: 600px;
  }
  h1 {
    margin-top: 0;
    display: inline-block;
    font-size: 2.4rem !important;
    font-weight: bolder;
    color: #314a7f;
  }
  p.body-text {
    line-height: 36px;
    img {
      height: 30px !important;
      margin: 18px auto !important;
    }
  }
}
</style>
