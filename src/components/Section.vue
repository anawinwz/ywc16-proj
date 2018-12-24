<template>
  <div class="section-bg">
    <div class="container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.section-bg {
  color: white;
  padding: 10px;
  background: linear-gradient(168.79deg, #005cea 5.57%, #40d4fc 96.88%);
}
</style>