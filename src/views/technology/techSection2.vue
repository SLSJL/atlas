<template>
  <div class="contianer-fluid tech-senction-2">
    <div class="sec-2-content__wrap">
      <div class="content-box">
        <h1>{{$t('message.technology.section2.caption')}}</h1>
        <p v-html="$t('message.technology.section2.content')"></p>
      </div>
      <div class="lyr pattern"></div>
    </div>

    <div class="sec-2-caption">
      <img :src="require('./../../assets/images/technology/tech2.png')" alt>
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
.tech-senction-2 {
  position: relative;
  width: 100%;
  height: 600px;
  border-bottom: 2px solid #314a7f;

  display: flex;
  justify-content: flex-end;

  .sec-2-caption {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  .sec-2-content__wrap {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content-box {
      z-index: 1;
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
        font-size: 18px;
        line-height: 36px;
      }
    }

    .lyr {
      position: absolute;
    }

    .pattern {
      z-index: 0;
      width: 0;
      height: 0;
      border-top: 300px solid #fff;
      border-right: 450px solid transparent;
      background-color: #adb7cd;
      transform: rotateZ(45deg);
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tech-senction-2 {
    height: 700px;

    .sec-2-caption {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      img {
        margin-top: -6rem;
        width: auto;
        height: 50%;
        opacity: 1;
      }
    }

    .sec-2-content__wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .content-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        background-color: transparent;

        h1 {
          margin-top: 6rem;
          font-size: 2.4rem;
          text-align: center;
        }
        p {
          margin-bottom: 6rem;
          font-size: 1.4rem;
        }
      }

      .lyr {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .tech-senction-2 {
    height: 600px;

    .sec-2-caption {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      img {
        margin-top: -6rem;
        width: 70%;
        height: auto;
      }
    }

    .sec-2-content__wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .content-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        background-color: transparent;

        h1,
        p {
          box-sizing: border-box;
          padding: 0 3rem;
          text-align: left;
          width: 100%;
        }

        h1 {
          margin-top: 6rem;
          font-size: 2.4rem;
          text-align: center;
        }
        p {
          margin-bottom: 6rem;
          font-size: 1.4rem;
        }
      }

      .lyr {
        display: none;
      }
    }
  }
}
</style>
