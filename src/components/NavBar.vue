<template>
  <nav
    class="navbar fixed-top navbar-expand-lg"
    v-bind:class="{'navbar-trans navbar-dark':!navBg, 'navbar-appbg navbar-light': navBg}"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/"><img :src="(!navBg)?logoWhite:logoBlack" width="150" /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">หน้าหลัก</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/courses" class="nav-link">รายชื่อคอร์ส</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-trans {
  background: transparent;
}
.navbar-appbg {
  background: white;
}
</style>
<script>
import LogoWhite from '@/assets/logo-white.png';
import LogoBlack from '@/assets/logo-gardient.png';
export default {
  data() {
    return {
      logoWhite: LogoWhite,
      logoBlack: LogoBlack,
      navBg: (this.$route.path=="/")?false:true
    };
  },
  methods: {
    updateScroll() {
        if(this.$route.path!="/") return;
      if (window.scrollY > 450 && !this.navBg) this.navBg = true;
      else if(this.navBg) this.navBg = false;
    }
  },
  mounted() {
    if(this.$route.path=="/")    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>