<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg" v-bind:class="{'navbar-trans navbar-dark':!navBg, 'navbar-appbg navbar-light': navBg}">
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

    <div id="content">
      <router-view/>
    </div>

    <footer class="footer">
      <div class="container">
        testsetest
      </div>
    </footer>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script>
export default {
  name: "app",
  data() {
    return {
     navBg: false
    }
  },
  methods: {
    updateScroll() {

      if(window.scrollY > 450) this.navBg = true;
      else this.navBg = false;
    }
  },
  mounted() {
    console.log(this.$route.path);
    window.addEventListener('scroll', this.updateScroll);
  }
};

</script>

<style>
.navbar-trans {
  background: transparent;
}
.navbar-appbg {
  background: white;

}
html,body {
  background: whitesmoke !important;
  width:100%;
  height:100%;
}
h2,h3,h4{
  font-family:'Athiti', sans-serif;
}

footer{
  background: gray;
  padding:20px;
  margin-top:10px;
  color:black;
}

</style>
