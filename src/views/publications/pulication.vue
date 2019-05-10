
<template>
  <div class="contianer-fluid publication-section-1">
    <div class="pub-item">
      <div>
        <h4>Gauging the Student Learning Experience of a Mobile Application Using iBeacon Technology</h4>
        <p>(AHFE 2018 Conference Paper)</p>
      </div>
      <img class="pub-cover" :src="require('./../../assets/images/publications/Publication1.png')">
    </div>

    <div class="pub-item">
      <div>
        <h4>Development of Location-based Driven Application for Innovative and Technology-assisted Teaching and Learning Practices</h4>
        <p>(eLearning Forum Asia 2018 Conference Paper)</p>
      </div>

      <img class="pub-cover" :src="require('./../../assets/images/publications/Publication2.png')">
    </div>
    <div class="pub-item">
      <div>
        <h4>The Big Data Revolution in Learning and Teaching: Creating New Educational Experiences and Facilitating the Smart Campus (Presentation in May 2018, EdUHK Festival 2018)</h4>
        <p>Using iBeacon Technology for Underground and Indoor Positioning (Conference Paper ACUU)</p>
      </div>

      <img class="pub-cover" :src="require('./../../assets/images/publications/Publication3.png')">
    </div>
  </div>
</template>
<script>
export default {
  name: "publication"
};
</script>

<style lang="less" scoped>
.publication-section-1 {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #314a7f;

  .pub-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    width: 1200px;
    border: 1px solid #ddd;
    overflow: auto;

    img {
      padding: 0;
      margin: 0;
      width: 340px;
      height: 240px;
    }
    div {
      flex: 1;
      h4 {
        box-sizing: border-box;
        padding: 60px 30px;
        margin: 0;
        width: 100%;
        text-align: left;
        // background-color: #314a7f;
        color: #314a7f;
      }

      p {
        box-sizing: border-box;
        padding: 0 30px;
        width: 100%;
        text-align: left;
        font-size: 1.4rem;
      }
    }
  }

  .pub-item:first-child {
    margin-top: 60px;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .publication-section-1 {
    width: 100%;

    .pub-item {
      width: 90%;

      div {
        flex: 1;
        h4 {
          font-size: 1.8rem;
          line-height: 2.4rem;
        }

        p {
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 48em) {
  .publication-section-1 {
    width: 100%;

    .pub-item {
      margin: 1.5rem 0 !important;

      width: 90%;
      display: flex;
      flex-direction: column-reverse;

      img {
        padding: 0;
        margin: 0;
        width: 100%;
        height: auto;
      }

      div {
        flex: none;
        h4 {
          box-sizing: border-box;
          padding: 1.5rem;
          text-align: left;
          color: #314a7f;
          font-size: 1.4rem;
          line-height: 2.4rem;
        }

        p {
          box-sizing: border-box;
          padding: 0 1.5rem;
          width: 100%;
          text-align: left;
          line-height: 1.8rem;
        }
      }
    }
  }
}
</style>
