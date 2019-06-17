<template>
  <div class="contianer-fluid senction-6">
    <h1 class="sec-6-caption">{{$t('message.home.section6.caption')}}</h1>
    <div class="body-text">
      <h5>{{$t('message.home.section6.p1')}}</h5>
      <p>{{$t('message.home.section6.p2')}}</p>
    </div>
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
.senction-6 {
  width: 100%;
  height: 700px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #314a7f;
  background: linear-gradient(
    45deg,
    #f9f9f9 25%,
    #fff 0,
    #fff 50%,
    #f9f9f9 0,
    #f9f9f9 75%,
    #fff 0
  );
  background-size: 30px 30px;
  background-color: #f9f9f9;

  h1 {
    margin-top: 0;
    display: inline-block;
    line-height: 24px;
    margin-top: -120px;
    font-size: 42px;
    font-weight: bolder;
    color: #314a7f;
  }
  div.body-text {
    margin: 15px 0;
    font-size: 24px;
    line-height: 24px;
    max-width: 1200px;
    text-align: left;

    p {
      margin: 30px 0;
      font-size: 18px;
      line-height: 36px;
      font-weight: 600;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .senction-6 {
    width: 100%;
    height: 500px;

    h1 {
      font-size: 42px !important;
      margin: 0 !important;
    }

    .body-text {
      padding: 0 30px;
      font-weight: 600;
      p {
        line-height: 3.6rem !important;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  h1 {
    font-size: 3.6rem !important;
    margin: 0 !important;
    text-align: left;
  }

  .body-text {
    padding: 0 3rem !important;
    text-align: center !important;
    h5 {
      margin: 1.5rem !important;
      margin-bottom: 4.5rem !important;
    }
    p {
      margin: 1.5rem !important;
      text-align: left !important;
      font-size: 1.6rem !important;
      line-height: 3.6rem !important;
      font-weight: 600;
    }
  }
}
</style>
