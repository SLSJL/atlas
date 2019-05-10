<template>
  <div class="contianer-fluid senction-3">
    <h1 class="sec-3-caption">
      Features
      <hr>
    </h1>
    <p class="body-text">
      From taking attendance to evaluating students’ performance,
      <br>ATLAS facilitates teaching and learning in a fun, efficient and systematic manner.
      <br>
      <!-- <button class=""></button> -->
      <router-link class="learn-more" :to="'/features'" tag="button">Learn more</router-link>
    </p>
    <ul class="feature-group">
      <li v-for="(item,idx) in feattures" :key="idx">
        <div class="img-wrapper">
          <img class="feature-icon" :src="item.iconPath">
        </div>

        <p class="feature-text">{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {
      feattures: [
        {
          text: "Automatic Attendance Recording",
          iconPath: require("./../../assets/images/home/feature/f1@4x.png")
        },
        {
          text: "Virtual Hands Up",
          iconPath: require("./../../assets/images/home/feature/f2@4x.png")
        },
        {
          text: "Test",
          iconPath: require("./../../assets/images/home/feature/f3@4x.png")
        },
        {
          text: "AR and VR Supported",
          iconPath: require("./../../assets/images/home/feature/f4@4x.png")
        },
        {
          text: "Data Visualization",
          iconPath: require("./../../assets/images/home/feature/f5@4x.png")
        },
        {
          text: "Smart Grouping",
          iconPath: require("./../../assets/images/home/feature/f6@4x.png")
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.senction-3 {
  width: 100%;
  height: 700px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("./../../assets/images/home/Features.jpg");
  background-size: 130% auto;

  h1 {
    margin-top: 0;
    display: inline-block;
    line-height: 24px;
    hr {
      display: inline-block;
      margin: 0;
      width: 80%;
      height: 6px;
      background-color: #fed400;
      border: 0;
    }
    font-size: 42px;
    font-weight: bolder;
    color: #314a7f;
    // text-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  }

  p.body-text {
    margin-bottom: 60px;
    font-size: 20px;
    line-height: 36px;
    color: #314a7f;
    font-weight: 600;

    button {
      margin-top: 30px;
      padding: 10px 30px;
      background-color: #314a7f;
      color: #fff;
      font-size: 1.8rem;
      border-radius: 30px;
      outline: none;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 15px;
      width: 120px;
      height: 140px;
      .img-wrapper {
        width: 80px;
        height: 80px;
        border-radius: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to top, #3677c2 0%, #dce9fc 100%);
        img {
          height: 50%;
        }
      }

      p {
        width: 100%;
        height: 20px;

        font-size: 20px;
        line-height: 24px;

        text-align: center;
        color: #303030;
        font-weight: 600;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .senction-3 {
    height: 600px !important;
    background-size: auto 100%;
  }
  p.body-text {
    margin-bottom: 3rem !important;
    padding: 0 15px;
    button {
      font-size: 1.4rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .senction-3 {
    height: 700px !important;
    background-size: auto 100%;
  }
  p.body-text {
    padding: 0 6rem;
    margin-bottom: 3rem !important;
    font-size: 1.4rem !important;
    line-height: 3.2rem !important;

    br{
      display: none;
    }
    button {
      margin: 0 auto;
      display: block;
      font-size: 1.4rem;
    }
  }

  ul {
    width: 80% !important;
    display: block !important;

    li {
      display: inline-block;
      margin: 1.5rem !important;
      width: 6rem !important;
      height: 10rem !important;
      vertical-align: top;
    }

    .img-wrapper {
      width: 6rem !important;
      height: 6rem !important;
      border-radius: 4rem;
      background-image: linear-gradient(to top, #3677c2 0%, #dce9fc 100%);
      img {
        height: 40% !important;
      }
    }

    p {
      width: 100%;
      margin: 0.5rem 0 !important;
      height: 2rem !important;
      font-size: 1.2rem !important;
      line-height: 1.8rem !important;

      text-align: left !important;
      color: #303030;
      text-align: center !important;
      font-weight: 600 !important;
    }
  }
}
</style>
