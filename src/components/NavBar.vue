<template>
  <nav
    class="navbar fixed-top navbar-expand-lg"
    v-bind:class="{'navbar-trans navbar-dark':!navBg, 'navbar-appbg navbar-light': navBg}"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
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
            <router-link to="categories" class="nav-link">หมวดหมู่</router-link>
          </li>
          <li class="nav-item">
            <router-link to="courses" class="nav-link">รายชื่อคอร์ส</router-link>
          </li>
          <!--
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          -->
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
export default {
  data() {
    return {
      navBg: (this.$route.path=="/")?false:true
    };
  },
  methods: {
    updateScroll() {
        if(this.$route.path!="/") return;
      if (window.scrollY > 450) this.navBg = true;
      else this.navBg = false;
    }
  },
  mounted() {
    if(this.$route.path=="/")    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>