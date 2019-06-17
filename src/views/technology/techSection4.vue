
<template>
  <div class="contianer-fluid tech-section-1">
    <h1 class="sec-3-caption">
      {{$t('message.technology.section4.caption')}}
      <hr>
    </h1>
    <p class="body-text">{{$t('message.technology.section4.content')}}</p>
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
  height: 700px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #314a7f;
  background: linear-gradient(
    45deg,
    #f9f9f9 25%,
    #fff 0,
    #fff 50%,
    #f9f9f9 0,
    #f9f9f9 75%,
    #fff 0
  );
  background-size: 30px 30px;

  h1 {
    display: inline-block;
    margin-top: 0;
    line-height: 24px;

    color: #314a7f;
    font-size: 42px;
    font-weight: bolder;

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
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .tech-section-1 {
    height: 600px;

    h1 {
      font-size: 3.6rem;
    }

    p.body-text {
      margin: 1.5rem 0;
      font-size: 1.8rem;
    }
  }
}

@media only screen and (max-width: 48em) {
  .tech-section-1 {
    box-sizing: border-box;
    padding: 0 3rem;
    height: 600px;

    h1 {
      font-size: 3.6rem;
    }

    p.body-text {
      margin: 1.5rem 0;
      font-size: 1.8rem;
    }
  }
}
</style>
