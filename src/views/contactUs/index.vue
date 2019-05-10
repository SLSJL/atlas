<template>
  <div class="contianer-fluid contact-container">
    <Navigation></Navigation>
    <ContactForm class="contact-form"></ContactForm>
    <Wooter></Wooter>
  </div>
</template>
<script>
import Navigation from "./../../components/navigation/";
import ContactForm from "./contactForm";

import Wooter from "./../../components/wooter/";

export default {
  components: {
    Navigation,
    ContactForm,
    Wooter
  }
};
</script>

<style lang="less" scoped>
.contact-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .contact-container {
    height: 100%;

    .contact-form {
      flex: 1;
    }
  }
}
@media only screen and (max-width: 48em) {
  .contact-container {
    min-height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .contact-form {
      flex: block;
    }
  }
}
</style>
