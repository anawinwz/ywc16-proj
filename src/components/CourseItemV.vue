<template>
    <div class="c-item">
        <img :src="{image}">
        <div>
            <h5>{{name}}</h5>
            <p>{{desc}}</p>
            <span class="text-info">{{price}}</span>
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