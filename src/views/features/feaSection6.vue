<template>
  <div class="contianer-fluid fsenction-6">
    <h1>
      <span>...And More!</span>
      <hr>
    </h1>
    <p>
      More features will be coming soon! Try
      <b>ATLAS</b> now. Find
      <b>ATLAS for student</b> on
    </p>
    <p>
      <a href="https://itunes.apple.com/hk/app/atlas-for-student/id1450907363?mt=8">
        <img :src="require('./../../assets/images/features/AppStore8@4x.png')" alt>
      </a>
      <a href="https://play.google.com/store/apps/details?id=hk.edu.polyu.atlas">
        <img :src="require('./../../assets/images/features/GooglePaly@4x.png')" alt>
      </a>
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.fsenction-6 {
  width: 100%;
  height: 600px;
  border-bottom: 2px solid #314a7f;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
    width: 1200px;
    span {
      margin-right: 30px;
    }
    hr {
      display: inline-block;
      margin: 0;
      width: 80%;
      height: 6px;
      background-color: #fed400;
      border: 0;
    }
  }
  p {
    margin: 60px 0;
    width: 1200px;
    text-align: left;
    font-size: 24px;
    text-align: right;
    color: #303030;

    img {
      margin-left: 30px;
      height: 60px;
    }

    b {
      color: #314a7f;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .fsenction-6 {
    width: 100%;
    height: 500px;

    h1 {
      width: 100%;
      padding: 0 6rem;
      box-sizing: border-box;
      font-size: 2.4rem !important;
      margin: 0 !important;
      display: flex;

      hr {
        flex: 1;
      }
    }

    p {
      width: 100% !important;
      font-size: 1.8rem !important;
      box-sizing: border-box;
      padding: 0 6rem;

      img {
        height: 3.6rem;
        margin: 18px 30px;
      }
    }
  }
}

@media only screen and (max-width: 48em) {
  .fsenction-6 {
    width: 100%;

    h1 {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0;
      box-sizing: border-box;
      font-size: 2.4rem !important;
      hr {
        margin-top: 1.5rem;
        flex: 1;
      }
    }

    p {
      margin-top: 6rem;
      padding: 0 6rem;
      width: 100% !important;

      line-height: 3.6rem;
      font-size: 1.4rem !important;
      box-sizing: border-box;
      img {
        height: 3.6rem;
        margin: 18px 30px;
      }
    }
  }
}
</style>
