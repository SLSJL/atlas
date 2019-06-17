<template>
  <div class="contianer-fluid fea-senction-3">
    <div class="sec-3-caption">
      <img :src="require('./../../assets/images/features/Virtual.png')" alt>
    </div>

    <div class="sec-3-content__wrap">
      <h1>{{$t('message.feature.section3.caption')}}</h1>
      <p v-html="$t('message.feature.section3.content')"></p>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.fea-senction-3 {
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: flex-end;

  .sec-3-caption {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .sec-3-content__wrap {
    width: 60%;
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
  .fea-senction-3 {
    .sec-3-caption {
      width: 50%;
      img {
        margin-left: 3rem;
        height: 80%;
      }
    }

    .sec-3-content__wrap {
      width: 50%;
      h1,
      p {
        padding-left: 3rem;
        text-align: left;
        width: 80% !important;
      }

      h1 {
        font-size: 2.4rem !important;
      }
      p {
        font-size: 1.8rem !important;
        line-height: 3.6rem !important;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .fea-senction-3 {
    background-color: rgba(0, 0, 0, 0.055);

    .sec-3-caption {
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

    .sec-3-content__wrap {
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
