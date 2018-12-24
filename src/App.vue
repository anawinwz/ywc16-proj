<template>
  <div id="app">
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
  components: {
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
.app-font {
  font-family:'Athiti', sans-serif;
}

footer{
  background: #C4C4C4;
  padding:20px;
  margin-top:10px;
  color:black;
}

</style>
