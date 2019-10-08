<template>
  <div class="contianer-fluid senction-51">
    <video
      class="video-top"
      src="./../../assets/vid/promo.mp4"
      controls
    >Your browser does not support the video.</video>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.senction-51 {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #eee;
  border-bottom: 2px solid #314a7f;
  background-image: url("./../../assets/images/home/video-bg.jpg");
  background-size: 130% auto;
  overflow: hidden;

  .video-top {
    height: 100%;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .senction-51 {
    width: 100%;
    height: auto;
    .video-top {
      width: 100%;
      height: auto;
    }
  }
}

@media only screen and (max-width: 48em) {
  .senction-51 {
    width: 100%;
    height: auto;
    width: 100%;
    .video-top {
      width: 100%;
      height: auto;
    }
  }
}
</style>
