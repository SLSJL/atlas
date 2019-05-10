<template>
  <div class="navigation-list">
    <ul class="horizontal caption-txt-clr">
      <li
        :class="['ripple', {active: idx === activeIndex}]"
        v-for="( item, idx) in menuItems"
        :key="idx"
        @click="navigate(item.route, idx)"
      >{{item.text}}</li>
    </ul>
    <button class="teacher-login" @click="goTo">Teacher login</button>

    <el-dropdown size="medium" class="menu-tab" @command="navigate">
      <span class="el-dropdown-link">
        <i class="el-icon-s-unfold"></i>
      </span>
      <el-dropdown-menu class="menu-tab-list" slot="dropdown">
        <el-dropdown-item
          v-for="( item, idx) in menuItems"
          :key="idx"
          :command="item.route"
        >{{item.text}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <div class="notice-mask" v-if="showNotice">
      <p>This version does not support smartphone browser, please login in your desktop/labtop computer</p>
      <el-button type="info" round @click="closeNotice">Close</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {},
  data() {
    return {
      showNotice: false
    };
  },
  methods: {
    ...mapMutations("navigation", ["SET_ACTIVEINDEX"]),
    navigate(route, idx) {
      if (idx) this.SET_ACTIVEINDEX(idx);
      this.$router.push({ path: route });
    },
    goTo() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // 移动端操作
        this.showNotice = true;
      } else {
        // PC端操作
      }
    },
    closeNotice() {
      this.showNotice = false;
    }
  },
  computed: {
    ...mapState("navigation", ["activeIndex", "menuItems"])
  }
};
</script>

<style lang="less" scoped>
.navigation-list {
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .teacher-login {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 1.5rem;
    margin-left: 1.5rem;
    border: 0;
    border-radius: 0.4rem;
    height: 4rem;

    font-size: 1.6rem;
    color: #fff;
    outline: 0;
    font-weight: bolder;
    cursor: pointer;
    background-color: #314a7f;

    transition: all 0.3s;
    text-decoration: none;
  }

  .teacher-login:hover {
    background-color: #fed400;
    color: #fff;
  }

  .menu-tab {
    display: none;
    border-radius: 0.4rem;
    padding: 0 1.5rem;
    font-size: 2.4rem;
    color: #314a7f;
    height: 4rem;

    transition: all 0.3s;
    text-decoration: none;

    .el-dropdown-link {
      height: 4rem !important;
      border-radius: 0.4rem;
    }
  }

  .menu-tab:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #314a7f;
  }

  ul {
    li {
      position: relative;
      margin: 0 10px;
      padding: 10px 5px 15px 5px;
      font-size: 1.6rem;
      font-weight: bolder;
    }

    li::before {
      content: " ";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;

      width: 0;
      height: 0.3rem;
      border-bottom: 3px solid #fed400;
      transition: all ease-in-out 0.16s;
      text-align: center;

      margin-left: 50%;
      cursor: pointer;
    }

    li.active::before,
    li:hover::before {
      width: 100%;
      margin-left: 0;
    }
  }

  .notice-mask {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      padding: 0 30px;
      font-size: 1.4rem;
      line-height: 3.6rem;
      font-weight: 600;
    }
  }
}

@media only screen and (min-width: 48em) and (max-width: 75em) {
  .navigation-list {
    height: 3rem !important;
    ul {
      height: 100%;
      li {
        margin: 0;
        margin-right: 5px;
        padding: 5px;
        font-size: 1.4rem;
      }
    }
  }

  .caption-txt-clr {
    display: none;
  }

  .teacher-login {
    height: 3rem !important;
  }
  .menu-tab {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
    height: 3rem !important;
    display: block !important;
  }
}

@media only screen and (max-width: 48em) {
  .navigation-list {
    height: 4rem !important;
  }

  .caption-txt-clr {
    display: none;
  }

  .teacher-login {
    padding: 0 5rem;
    height: 3rem !important;
  }

  .menu-tab {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
    height: 3rem !important;

    display: block !important;
  }
}
</style>
