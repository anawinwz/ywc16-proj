<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>

    <footer class="footer">
      <div class="container">
        <img :src="logoBlack" width="120">
        <p class="text-muted">&copy; 2018 Skillable.</p>
      </div>
    </footer>
  </div>
</template>

<script>

import LogoBlack from '@/assets/logo-black.png';
export default {
  name: "app",
  components: {
  },
  data() {
    return {
      logoBlack: LogoBlack
    }
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
  background: #E5E5E5 !important;
  width:100%;
  height:100%;
}
h2,h3,h4,h5,h6{
  font-family:'Athiti', sans-serif;
  font-weight:bold;
}
.app-font, * {
  font-family:'Athiti', sans-serif;
}

footer{
  background: #C4C4C4;
  padding:30px;
  margin-top:50px;
  color:black;
}
</style>
