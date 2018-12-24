<template>
    
    <router-link :to="{path:'/courses/'+id}">
    <div class="c-item">
        <div class="row">
            <div class="col-6"><img class="w-100" :src="{image}"></div>
            <div class="col-6">
                <h5>{{name}}</h5>
                <p>{{desc.trunc(120)}}</p>
                <span class="text-info">{{price > 0 ? price.toLocaleString()+' บาท': 'ฟรี'}}</span>
            </div>
        </div>
        
    </div>
    </router-link>
</template>
<style>
.c-item {
    background:white;
    color: black;
    border-radius:24px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
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