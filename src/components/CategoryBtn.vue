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
    }

</style>
<script>
    export default {
        props: ["img","name","id"]

    }
</script>