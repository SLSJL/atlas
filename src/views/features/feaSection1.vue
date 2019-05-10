<template>
  <div class="contianer-fluid fea-section-1">
    <h1 class="sec-3-caption">
      Features
      <hr>
    </h1>
    <p class="body-text">
      From taking attendance to evaluating students’ performance,
      <br>ATLAS facilitates teaching and learning in a fun, efficient, and systematic manner.
      <br>It can be applied to various classroom situations
      <br>depending on teachers’ own needs and preferences.
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
.fea-section-1 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("./../../assets/images/home/Features.jpg");
  background-size: 140% auto;
  h1 {
    display: inline-block;
    margin-top: 0;
    line-height: 24px;
    font-size: 48px;
    font-weight: bolder;
    color: #314a7f;
    
    hr {
      display: inline-block;
      margin: 0;
      width: 80%;
      height: 6px;
      background-color: #fed400;
      border: 0;
    }
  }
  p.body-text {
    margin: 15px 0;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: #314a7f;
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
  .fea-section-1 {
    background-size: auto 100%;
  }
  p.body-text {
    font-size: 1.8rem !important;
    line-height: 3.6rem;
    font-weight: 600;
    color: #314a7f;
  }
}

@media only screen and (max-width: 48em) {
  .fea-section-1 {
    background-size: auto 150%;
  }

  p.body-text {
    padding: 0 3rem;
    font-size: 1.8rem !important;
    line-height: 3.6rem;
    overflow-wrap: break-word;
    br {
      display: none;
    }
  }
}
</style>
