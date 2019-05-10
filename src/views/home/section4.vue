<template>
  <div class="contianer-fluid senction-4">
    <div class="sec-4-content">
      <div class="sec-4-content__wrap">
        <div class="text-wrap">
          ATLAS uses iBeacon technology to track
          <br>students’ precise locations in a
          <br>classroom setting through Bluetooth.
        </div>
      </div>

      <div class="sec-4-caption">
        <span>
          Technology
          <hr>
        </span>
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
.senction-4 {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #eee;
  border-bottom: 2px solid #314a7f;
  background-image: url("./../../assets/images/home/technology.jpg");

  .sec-4-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    .sec-4-caption {
      width: 55%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 24px;
      span {
        hr {
          display: inline-block;
          margin: 0;
          margin-left: -60px;
          width: 80%;
          height: 6px;
          background-color: #fed400;
          border: 0;
        }
        font-size: 42px;
        font-weight: bolder;
        color: #fff;
      }
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
    }

    .sec-4-content__wrap {
      width: 45%;
      height: 0;
      border-top: 600px solid #fff;
      border-right: 300px solid transparent;

      .text-wrap {
        margin-top: -50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        line-height: 36px;
        text-align: left;
        font-weight: 600;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .senction-4 {
    height: 400px;
  }
  .sec-4-content {
    background-color: rgba(0, 0, 0, 0.35);
  }
  .sec-4-content__wrap {
    position: absolute !important;
    top: 40%;
    left: 5%;
    height: auto;
    border: 0 !important;
    .text-wrap {
      margin-top: 0 !important;
      padding: 0 15%;
      color: #fff;
      box-sizing: border-box;
      font-size: 1.4rem;
      br {
        display: none;
      }
    }
  }
  .sec-4-caption {
    position: absolute !important;
    width: 100%;
    height: 100%;

    span {
      position: absolute !important;
      top: 20%;
      right: 15%;
    }
  }
}

@media only screen and (max-width: 48em) {
  .senction-4 {
    height: 600px;

    .sec-4-content {
      background-color: rgba(0, 0, 0, 0.35);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .sec-4-content__wrap {
    position: absolute !important;
    border: 0 !important;
    left: 0 !important ;
    width: 100% !important;
    box-sizing: border-box;

    .text-wrap {
      margin-top: -5rem !important;
      padding: 0 15%;
      box-sizing: border-box;

      width: 100%;
      color: #fff;
      font-size: 1.6rem !important;

      br {
        display: none;
      }
    }
  }

  .sec-4-caption {
    position: absolute !important;
    width: 100% !important;
    height: 100%;

    span {
      position: absolute !important;
      top: 15%;
      left: 50%;

      transform: translate(-50%, 0);
      font-size: 3rem !important;
      hr {
        width: 100% !important;
        margin-left: 0 !important;
      }
    }
  }
}
</style>
