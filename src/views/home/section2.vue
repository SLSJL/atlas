<template>
  <div class="contianer-fluid senction-2">
    <div class="sec-2-content">
      <div class="sec-2-caption">
        <div class="sec2-caption-wrap">
          <hr>
          <span v-html="$t('message.home.section2.caption')"></span>
        </div>
      </div>

      <div class="sec-2-content__wrap triangle-right-bottom">
        <div class="content-items">
          <ul>
            <li v-for="( item, idx) in $t('message.home.section2.list')" :key="idx">{{item}}</li>
          </ul>
        </div>
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
.senction-2 {
  width: 100%;
  height: 600px;
  background-color: #eee;

  background-image: url("./../../assets/images/home/Objectives.jpg");
  background-size: auto 100%;

  .sec-2-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    .sec-2-caption {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .sec2-caption-wrap {
        margin-top: -100px;
        hr {
          display: inline-block;
          margin: 0;
          margin-left: -60px;
          width: 100%;
          height: 6px;
          background-color: #fed400;
          border: 0;
        }
        font-size: 42px;
        font-weight: bolder;
        color: #fff;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
      }
    }

    .triangle-right-bottom {
      width: 65%;
      height: 0;
      border-bottom: 600px solid #ffffff;
      border-left: 300px solid transparent;
    }

    .sec-2-content__wrap {
      width: 35%;
      border-left: 300px solid transparent;

      .content-items {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(0, 55%);
        ul {
          li {
            margin: 15px;
            text-align: left;
            list-style: disc;
            font-size: 20px;
            line-height: 24px;
            font-weight: 600;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  /*based on browser size 16px*/
  .senction-2 {
    height: 400px;
    background-size: 100% auto;

    .sec-2-content {
      position: relative;
      .sec-2-caption {
        position: relative;

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);

        .sec2-caption-wrap {
          position: absolute;
          left: 15rem;
          top: 4rem;
          margin-top: 0;

          width: auto;
          font-size: 3rem;

          hr {
            display: inline-block;
            margin: 0;
            margin-left: -6rem;
            width: 100%;
            height: 6px;
            background-color: #fed400;
            border: 0;
          }
        }
      }

      .triangle-right-bottom {
        border: 0 !important;
      }

      .sec-2-content__wrap {
        position: absolute;
        width: 50% !important;
        top: 5%;
        right: 10%;
        color: #fff;
        .content-items {
          display: flex;
          justify-content: center;
          align-items: center;
          ul {
            li {
              margin: 10px 0;
              text-align: left;
              list-style: disc;
              font-size: 2rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .senction-2 {
    height: 500px;
    background-size: auto 100%;

    .sec-2-content {
      position: relative;
      .sec-2-caption {
        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 600;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.5);

        .sec2-caption-wrap {
          position: absolute;
          left: 50%;
          top: 15%;
          margin-top: 0;

          font-size: 3rem;

          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          hr {
            display: inline-block;
            margin: 0;
            width: 100%;
            height: 6px;
            background-color: #fed400;
            border: 0;
          }
        }
      }

      .triangle-right-bottom {
        border: 0 !important;
      }

      .sec-2-content__wrap {
        z-index: 600;
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100%;

        .content-items {
          flex: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translate(0, 55%);
          width: 100% !important;

          ul {
            li {
              margin: 2rem 0;
              margin-left: 0;
              max-width: 30rem;
              line-height: 1.8rem;
              color: #fff;
              text-align: center;
              list-style: none;
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
}
</style>
