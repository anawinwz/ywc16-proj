<template>
    <div class="c-item">
        <img :src="{image}">
        <div>
            <h5>{{name}}</h5>
            <p>{{desc.trunc(50)}}</p>
            <span class="text-info">{{price > 0 ? price.toLocaleString()+' บาท': 'ฟรี'}}</span>
        </div>
    </div>
</template>
<style>
.c-item {
    background:white;
    color:black;
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
  String.prototype.trunc = String.prototype.trunc ||
      function(n){
          return (this.length > n) ? this.substr(0, n-1) + '&hellip;' : this;
      };
  </script>