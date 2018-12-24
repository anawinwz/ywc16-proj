<template>
  <div>
    <div id="app-intro">
        <div class="container">
        <div id="app-intro-content">test</div>

        <div id="search-box">
            <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
            >
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            </div>
        </div>
        </div>
    </div>
    <h3>หรือไม่รู้จะค้นหาอะไร ลองดูตรงนี้สิ</h3>
  </div>
</template>

<script>
</script>

<style>
#app-intro {
  background: gray;
  color: white;
  min-height: 450px;
}
#app-intro .container {
  padding-top: 112.5px;
  height: 225px;
}
#search-box {
    z-index: 500;
    margin-top: 42%;
    background: white;
    border-radius:20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
#search-box input {
    background:transparent;
    border:none;
}
#search-box input:active, #search-box input:focus {
    box-shadow:none;
}
</style>