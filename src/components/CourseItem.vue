<template>
    
    <router-link :to="{path:'/courses/'+id}">
    <div class="c-item">
        <div class="row">
            <div class="col-6">
                <img class="w-100" :src="image">
                
                <div class="dateBar">{{date}}</div>
            </div>
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
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
.c-item .col {
    padding:5px;
    padding-top:0px;
    margin-bottom:10px;
}

a:hover, a:vistied, a:focus{
    color: black;
    text-decoration: none;
}
.c-item img{
    width: 100%;
}

.dateBar{
    width:100%;
    background: #66A6FF;
    color:white;
}
</style>
<script>
export default {
    props: ["id","name","image","startDate","endDate","price","desc","date"]
}
</script>