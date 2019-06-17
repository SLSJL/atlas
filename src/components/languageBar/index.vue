<template>
  <div class="language-bar">
    <ul>
      <li :class="[{active: languageIndex == 0}]" @click="setLanguage('en', 0)">
        <i class="iconfont icon-yingwen"></i>
      </li>
      <li :class="[{active: languageIndex ==1}]" @click="setLanguage('cnt', 1)">
        <i class="iconfont icon-fanti"></i>
      </li>
      <li :class="[{active: languageIndex == 2}]" @click="setLanguage('cns', 2)">
        <i class="iconfont icon-jianti"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "language-bar",
  computed: {
    ...mapState("navigation", ["languageIndex"])
  },
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVE_LANGUAGE"]),
    setLanguage(language, idx) {
      this.$i18n.locale = language;
      this.SET_ACTIVE_LANGUAGE(idx);
    }
  }
};
</script>

<style lang="less">
.language-bar {
  width: 100%;
  height: 3.6rem;
  background-color: #fed400;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  ul {
    margin-right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0 0.5rem;
      width: 2.4rem;
      height: 2.4rem;
      padding: 0.5rem;
      border-radius: 2.4rem;

      box-sizing: border-box;

      transition: all 0.4s;
      cursor: pointer;
    }
    li:hover {
      color: #314a7f;
      background-color: #fed400;
    }
    li.active {
      color: #fff;
      background-color: #314a7f;
    }
  }
}

@media only screen and (max-width: 48em) {
  .language-bar {
    ul {
      margin-right: 1.5rem;
    }
  }
}
</style>
