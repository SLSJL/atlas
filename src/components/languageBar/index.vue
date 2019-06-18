<template>
  <div class="language-bar">
    <ul>
      <li :class="[{active: languageIndex == 0}]" @click="setLanguage('en', 0)">En</li>
      <li :class="[{active: languageIndex ==1}]" @click="setLanguage('cnt', 1)">繁</li>
      <li :class="[{active: languageIndex == 2}]" @click="setLanguage('cns', 2)">简</li>
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

      alert(1);

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
    padding-top: 0.5rem;
    margin-right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0 0.2rem;
      width: 2.4rem;
      height: 2.4rem;
      padding: 0.5rem;
      border-radius: 2.4rem;

      font-size: 1.2rem;
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
@media only screen and (min-width: 48em) and (max-width: 75em) {
  .language-bar {
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 48em) {
  .language-bar {
    justify-content: flex-end;

    ul {
      margin-right: 1.5rem;
    }
  }
}
</style>
