<template>
    <router-link :to="{path:'/courses/'+id}">
    <div class="c-item">
        <img :src="{image}">
        <div>
            <h5>{{name}}</h5>
            <p>{{desc.trunc(50)}}</p>
            <span class="text-info">{{price > 0 ? price.toLocaleString()+' บาท': 'ฟรี'}}</span>
        </div>
    </div>
    </router-link>
</template>
<style scoped>
.c-item {
    background:white;
    color:black;
    border-radius:20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
.c-item div {
    padding:5px;
}
a:hover, a:vistied, a:focus{
    color: black;
    text-decoration: none;
}
</style>
<script>
export default {
    props: ["id","name","image","startDate","endDate","price","desc"]
}
  </script>