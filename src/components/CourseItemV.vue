<template>
    <router-link :to="{path:'/courses/'+id}">
    <div class="c-item">
        <img :src="image">
        <div class="dateBar" :class="{expired:expired}">{{expired?'เสร็จสิ้นแล้ว':date}}</div>
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
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
.c-item div {
    padding:5px;
    padding-top:0px;
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
.dateBar.expired{
    background:darkred;
}
</style>
<script>
export default {
    props: ["id","name","image","startDate","endDate","price","desc","date","expired"]
}
  </script>