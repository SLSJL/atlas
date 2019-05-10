
<template>
  <div class="contianer-fluid">
    <div class="gallery-section-1">
      <!-- <h1 class="sec-3-caption">Technology
      <hr>
      </h1>-->
      <div class="gallery-1-row">
        <div class="gallery-1-col col-1">
          <img :src="pictures[0]" width="100%" alt>
        </div>
        <div class="gallery-1-col col-2">
          <div class="gallery-line-1">
            <img :src="pictures[1]" width="100%" :style="{marginTop: '-60px'}" alt>
          </div>
          <div class="gallery-line-2">
            <img :src="pictures[2]" width="100%" alt>
          </div>
        </div>
      </div>

      <div class="gallery-2-row">
        <div class="gallery-2-col col-1">
          <img :src="pictures[3]" width="100%" alt>
        </div>
        <div class="gallery-2-col col-2">
          <img :src="pictures[4]" :style="{marginTop: '-100px'}" width="100%" alt>
        </div>
      </div>

      <div class="gallery-3-row">
        <div class="gallery-3-col col-2">
          <div class="gallery-line-1">
            <img :src="pictures[5]" width="100%" :style="{marginTop: '-60px'}" alt>
          </div>
          <div class="gallery-line-2">
            <img :src="pictures[6]" width="100%" :style="{marginTop: '-360px'}" alt>
          </div>
        </div>

        <div class="gallery-3-col col-1">
          <img :src="pictures[7]" width="100%" alt>
        </div>
      </div>
    </div>

    <div class="gallery-mobile">
      <img
        v-for="(imgUrl,index) in pictures"
        v-preview="imgUrl"
        :src="imgUrl"
        :key="index"
        preview-title-enable="true"
        preview-nav-enable="true"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "gallery",
  data() {
    return {
      pictures: [
        require("./../../assets/images/gallery/1-1.png"),
        require("./../../assets/images/gallery/1-2.jpeg"),
        require("./../../assets/images/gallery/1-3.jpeg"),
        require("./../../assets/images/gallery/2-1.jpeg"),
        require("./../../assets/images/gallery/2-2.jpeg"),
        require("./../../assets/images/gallery/3-1.jpeg"),
        require("./../../assets/images/gallery/3-2.jpeg"),
        require("./../../assets/images/gallery/3-3.jpeg")
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.gallery-section-1 {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #314a7f;
  img {
    border: 1px solid #ddd;
    transition: 0.6s;
  }

  img:hover {
    zoom: 1;
    transform: scale(1.2);
  }
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
  }

  .gallery-1-row {
    margin-top: 60px;
    width: 1200px;
    height: 400px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .col-1 {
      margin-right: 15px;
      width: 50%;
      height: 100%;
      overflow: hidden;
    }
    .col-2 {
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      flex-direction: column;
      overflow: hidden;

      .gallery-line-1 {
        width: 100%;
        height: 50%;
        margin-bottom: 15px;

        overflow: hidden;
      }
      .gallery-line-2 {
        width: 100%;
        height: 50%;

        overflow: hidden;
      }
    }
  }

  .gallery-2-row {
    width: 1200px;
    margin: 15px 0 15px 0;
    box-sizing: border-box;

    height: 450px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .col-1 {
      margin-right: 15px;
      width: 30%;
      height: 100%;
      background-color: #fed400;
      overflow: hidden;
    }
    .col-2 {
      width: 70%;
      height: 100%;
      overflow: hidden;
    }
  }

  .gallery-3-row {
    margin-bottom: 60px;
    width: 1200px;
    height: 400px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .col-1 {
      margin-right: 15px;
      width: 50%;
      height: 100%;
      overflow: hidden;
    }
    .col-2 {
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      flex-direction: column;
      overflow: hidden;

      .gallery-line-1 {
        width: 100%;
        height: 50%;
        margin-bottom: 15px;
        margin-right: 30px;
        overflow: hidden;
      }
      .gallery-line-2 {
        width: 100%;
        height: 50%;
        margin-right: 30px;
        overflow: hidden;
      }
    }
  }
}
.gallery-mobile {
  display: none;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .gallery-section-1 {
    display: none;
  }
  .gallery-mobile {
    display: block;
  }
}
@media only screen and (max-width: 48em) {
  .gallery-section-1 {
    display: none;
  }
  .gallery-mobile {
    display: block;
  }
}
</style>
