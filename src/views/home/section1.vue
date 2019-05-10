<template>
  <div class="contianer-fluid senction-1">
    <div class="section-wrap">
      <div class="sec-1-img__wrap">
        <img id="sec-1-logo" :src="require('./../../assets/images/home/atlas-logo@4x.png')" alt>
      </div>
      <h1>
        <b>A</b>ugmented
        <b>T</b>eaching and
        <b>L</b>earning
        <b>A</b>dvancement
        <b>S</b>ystem
      </h1>
      <div class="sec-1-app__wrap">
        <a href="https://itunes.apple.com/hk/app/atlas-for-student/id1450907363?mt=8">
          <img class="app-icon" :src="require('./../../assets/images/home/apple.png')" alt>
        </a>

        <a href="https://play.google.com/store/apps/details?id=hk.edu.polyu.atlas">
          <img class="app-icon" :src="require('./../../assets/images/home/google.png')" alt>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    let img = document.querySelector("#sec-1-logo");
    let bChart = document.querySelectorAll("b");
    let h1 = document.querySelector("h1");
    let apps = document.querySelectorAll(".app-icon");

    Velocity(
      img,
      {
        opacity: 1,
        top: "35%"
      },
      {
        duration: 1000,
        delay: 200
      }
    );
    Velocity(
      h1,
      {
        opacity: 1
      },
      {
        duration: 1200,
        delay: 200
      }
    );
    bChart.forEach(element => {
      Velocity(
        element,
        {
          fontSize: "42px"
        },
        {
          duration: 1000,
          delay: 200
        }
      );
    });
    apps.forEach(el => {
      Velocity(
        el,
        {
          opacity: 1
        },
        {
          duration: 1200,
          delay: 200
        }
      );
    });
  }
};
</script>

<style lang="less" scoped>
.senction-1 {
  width: 100%;
  overflow: auto;
  background-color: #314a7f;

  .section-wrap {
    margin: 0 auto;
    width: 120rem;
    height: 100%;

    .sec-1-img__wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      width: 100%;
      height: 60%;
      text-align: center;

      img {
        position: absolute;
        height: 24rem;
        opacity: 0;
      }
    }

    h1 {
      font-size: 3.6rem;
      color: #fed400;
      opacity: 0;
      b {
        font-size: 6.4rem;
      }
    }

    .sec-1-app__wrap {
      width: 100%;
      margin-top: 4.5rem;

      img {
        margin: 0 1.5rem;
        height: 4rem;
        opacity: 0;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .section-wrap {
    height: 40%;
    width: 100% !important;

    h1 {
      font-size: 2.4rem !important;
      b {
        font-size: 3.6rem !important;
      }
    }
  }

  .sec-1-img__wrap {
    img {
      height: 18rem !important;
    }
  }

  .sec-1-app__wrap {
    img {
      height: 3.5rem !important;
    }
  }
}

@media only screen and (max-width: 48em) {
  .section-wrap {
    width: 100% !important;
    height: 80% !important;

    h1 {
      padding: 1.5rem 3rem;
      font-size: 1.8rem !important;
      color: #fed400;
      opacity: 0;
      b {
        font-size: 2.4rem !important;
      }
    }
  }

  .sec-1-img__wrap {
    img {
      height: 12rem !important;
    }
  }

  .sec-1-app__wrap {
    margin-top: 3rem !important;
    img {
      height: 3rem !important;
    }
  }
}
</style>
