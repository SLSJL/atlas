<template>
  <div class="contianer-fluid wooter">
    <p>Copyright © 2019. Remote Sensing Laboratory, ZB213, Z core</p>
    <p>Department of Land Surveying and Geo-Informatics,</p>
    <p>The Hong Kong Polytechnic University. All rights reserved.</p>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.wooter {
  width: 100%;
  height: 12rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #314a7f;
  p {
    width: 120rem;
    margin: 0.5rem 0;
    font-size: 1.4rem;
    color: #fff;
    text-align: right;

    box-sizing: border-box;
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  p {
    padding: 0 3rem;
    width: 100% !important;
  }
}

@media only screen and (max-width: 48em) {
  p {
    padding: 0 3rem;
    width: 100% !important;
    font-size: 1.2rem !important;
  }
}
</style>
