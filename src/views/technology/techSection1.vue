
<template>
  <div class="contianer-fluid tech-section-1">
    <h1 class="sec-1-caption">
      Technology
      <hr>
    </h1>
    <p class="body-text">
      ATLAS uses iBeacon technology to track students’ precise locations in a classroom,
      <br>working together with app on smartphones.
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {},
  data() {
    return {
      feattures: [
        { text: "Automatic Attendance Recording", iconPath: "" },
        { text: "Virtual Hands Up", iconPath: "" },
        { text: "Test", iconPath: "" },
        { text: "AR and VR Supported", iconPath: "" },
        { text: "Data Visualisition", iconPath: "" },
        { text: "Smart Grouping", iconPath: "" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tech-section-1 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("./../../assets/images/home/technology.jpg");

  h1 {
    margin-top: 0;
    display: inline-block;
    line-height: 24px;
    color: #fff;
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
  }
  p.body-text {
    margin: 15px 0;
    font-size: 24px;
    line-height: 36px;
    color: #fff;
    font-weight: 600;
  }

  ul {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 15px 30px;
      width: 120px;
      height: 140px;
      color: #fff;
      font-weight: 600;
      img {
        width: 120px;
        height: 120px;
        border-radius: 120px;
        background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
      }
      p {
        width: 100%;
        height: 20px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tech-section-1 {
    background-size: 100% auto;

    p.body-text {
      padding: 0 6rem;
      font-size: 1.8rem;
      br {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .tech-section-1 {
    background-size: auto 150%;

     p.body-text {
      padding: 0 6rem;
      font-size: 1.8rem;
      br {
        display: none;
      }
    }
  }
}
</style>
