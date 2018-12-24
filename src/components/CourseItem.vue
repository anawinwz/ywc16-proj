<template>
    <div class="c-item">
        <div class="row">
            <div class="col-6"><img class="w-100" :src="{image}"></div>
            <div class="col-6">
                <h5>{{name}}</h5>
                <p>{{desc}}</p>
                <span class="text-info">{{price > 0 ? price.toLocaleString()+' บาท': 'ฟรี'}}</span>
            </div>
        </div>
        
    </div>
</template>
<style>
.c-item {
    background:white;
    border-radius:20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
.c-item div {
    padding:5px;
}
</style>
<script>
export default {
    props: ["name","image","startDate","endDate","price","desc"]
}
</script>