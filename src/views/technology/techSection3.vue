<template>
  <div class="contianer-fluid tech-senction-3">
    <div class="sec-3-caption">
      <img :src="require('./../../assets/images/technology/tech3.png')" alt>
    </div>
    <div class="sec-3-content__wrap">
      <div class="triangle-right-top"></div>
      <div class="content-box">
        <h1>{{$t('message.technology.section3.caption')}}</h1>
        <p>{{$t('message.technology.section3.content')}}</p>
      </div>
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
.tech-senction-3 {
  position: relative;
  width: 100%;
  height: 600px;
  border-bottom: 2px solid #314a7f;

  display: flex;
  justify-content: flex-end;

  .sec-3-caption {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  .sec-3-content__wrap {
    width: 60%;
    display: flex;

    justify-content: center;
    align-items: center;
    .triangle-right-top {
      width: 0;
      height: 0;
      border-top: 600px solid #fff;
      border-right: 300px solid transparent;
      background-color: #314a7f;
    }
    .content-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      font-weight: 600;
      color: #fff;
      background-color: #314a7f;

      h1,
      p {
        width: 80%;
        text-align: left;
        width: 600px;
      }
      p {
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tech-senction-3 {
    height: 700px;

    .sec-3-caption {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;

      img {
        margin-top: -3rem;
        width: auto;
        height: 50%;
        opacity: 0.75;
      }
    }

    .sec-3-content__wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .triangle-right-top {
        display: none;
      }

      .content-box {
        flex: none;
        display: flex;
        justify-content: space-between;
        width: 600px;
        color: #314a7f;
        background: transparent;

        h1 {
          margin-top: 6rem;
          width: 100%;
          text-align: center;
          font-size: 2.4rem;
        }
        p {
          margin-bottom: 6rem;
          width: 100%;
          font-size: 1.4rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .tech-senction-3 {
    height: 600px;

    .sec-3-caption {
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

    .sec-3-content__wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .triangle-right-top {
        display: none;
      }

      .content-box {
        flex: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #314a7f;
        background: transparent;

        h1,
        p {
          box-sizing: border-box;
          padding: 0 3rem;
          text-align: left;
          width: 100%;
        }

        h1 {
          margin-top: 6rem;
          text-align: center;
          font-size: 2.4rem;
        }
        p {
          margin-bottom: 6rem;
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
