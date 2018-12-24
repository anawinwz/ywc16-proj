<template>
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