<template>
    <router-link :to="'category/'+id">
        <div class="cate" :style="{'background-image': img}">{{name}}</div>
    </router-link>
</template>
<style>
    .cate {
        display: inline-block;
        width: 120px;
        height: 120px;
        margin: 10px;
        border-radius:20px;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
        color:black;
        font-size:24px;
        text-align:center;
        padding-top:40px;
  background: linear-gradient(168.79deg, #005cea 5.57%, #40d4fc 96.88%);
  font-weight:bold;
  color:white;
    }
    .cate:hover {
        opacity:0.7;
    }

</style>
<script>
    export default {
        props: ["img","name","id"]

    }
</script>