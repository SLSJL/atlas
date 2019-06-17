import "normalize.css";
import "./../assets/styles/index.less";

import utils from "./../utils";
import elements from "./elementUI";
import vuePicturePreview from "vue-picture-preview";

import "./../assets/icons/iconfont/iconfont.css";

const custom = {
  install: Vue => {
    Vue.prototype.$utils = utils;
    Vue.use(elements);

    Vue.use(vuePicturePreview);
  }
};

export default custom;
