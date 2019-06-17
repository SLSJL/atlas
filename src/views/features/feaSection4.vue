<template>
  <div class="contianer-fluid fea-senction-4">
    <div class="sec-4-content__wrap">
      <h1>{{$t('message.feature.section4.caption')}}</h1>
      <p  v-html="$t('message.feature.section4.content')"></p>
    </div>

    <div class="sec-4-caption">
      <img :src="require('./../../assets/images/features/Test.png')" alt>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.fea-senction-4 {
  position: relative;
  width: 100%;
  height: 600px;
  border-bottom: 2px solid #314a7f;

  display: flex;
  justify-content: flex-end;

  .sec-4-caption {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .sec-4-content__wrap {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,
    p {
      text-align: left;
      width: 600px;
    }
    p {
      font-size: 20px;
      line-height: 36px;
      font-weight: 600;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .sec-4-caption {
    width: 50%;
    img {
      margin-right: 6rem;
      height: 80%;
    }
  }

  .sec-4-content__wrap {
    width: 50%;
    h1,
    p {
      width: 80% !important;
      padding-left: 3rem;
      text-align: left;
    }

    h1 {
      font-size: 2.4rem !important;
    }
    p {
      font-size: 1.8rem !important;
    }
  }
}

@media only screen and (max-width: 48em) {
  .fea-senction-4 {
    .sec-4-caption {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      img {
        margin: 0 auto;
        height: 80%;
        opacity: 0.15;
      }
    }

    .sec-4-content__wrap {
      z-index: 999;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      h1,
      p {
        box-sizing: border-box;
        padding: 0 3rem !important;
        width: 100%;
      }
      h1 {
        font-size: 2.4rem;
        font-weight: bolder !important;
      }
      p {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 3.6rem;
      }
    }
  }
}
</style>
