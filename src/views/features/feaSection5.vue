<template>
  <div class="contianer-fluid fea-senction-5">
    <div class="sec-5-caption">
      <img :src="require('./../../assets/images/features/VRAR.png')" alt>
    </div>
    <div class="sec-5-content__wrap">
      <h1>AR and VR-supported</h1>
      <p>ATLAS supports the use of augmented reality and virtual reality in learning materials. Teachers can also upload other documents for students to access in class.</p>
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
.fea-senction-5 {
  position: relative;
  width: 100%;
  height: 600px;
  border-bottom: 2px solid #314a7f;
  background-color: #adb7cd;

  display: flex;
  justify-content: flex-end;

  .sec-5-caption {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 75%;
    }
  }

  .sec-5-content__wrap {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    h1,
    p {
      width: 80% !important;
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
  .fea-senction-5 {
    .sec-5-caption {
      width: 50%;
      img {
        height: 40% !important;
      }
    }

    .sec-5-content__wrap {
      width: 50%;

      h1,
      p {
        width: 80% !important;
      }
      h1 {
        font-size: 2.4rem !important;
      }
      p {
        font-size: 1.8rem !important;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .fea-senction-5 {
    .sec-5-caption {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      img {
        height: 40% !important;
        opacity: 0.035;
      }
    }

    .sec-5-content__wrap {
      width: 100%;

      h1,
      p {
        width: 80%;
      }
      h1 {
        font-size: 2.4rem;
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
