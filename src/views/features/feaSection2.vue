<template>
  <div class="contianer-fluid fea-senction-2">
    <div class="sec-2-content__wrap">
      <h1>{{$t('message.feature.section2.caption')}}</h1>
      <p v-html="$t('message.feature.section2.content')"></p>
    </div>

    <div class="sec-2-caption">
      <img :src="require('./../../assets/images/features/Automatic.png')" alt>
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
.fea-senction-2 {
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: flex-end;

  .sec-2-caption {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .sec-2-content__wrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    h1,
    p {
      text-align: left;
      width: 600px;
    }
    p {
      font-size: 20px;
      line-height: 36px;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .fea-senction-2 {
    .sec-2-content__wrap {
      h1,
      p {
        padding-left: 6rem;
        width: 80% !important;
        line-height: 3.6rem;
      }

      h1 {
        font-size: 2.4rem !important;
      }
      p {
        font-size: 1.8rem !important;
      }
    }

    .sec-2-caption {
      img {
        height: 80% !important;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .fea-senction-2 {
    .sec-2-caption {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      img {
        height: 80%;
        opacity: 0.15;
      }
    }

    .sec-2-content__wrap {
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
