<template>
    <div class="container" v-if="comment">
        <div class="row">
            <div class="col-1"><img src="http://bootdey.com/img/Content/user_1.jpg" class="img rounded-circle" width="60"></div>
            <div class="col">
                <h5>{{ comment.name }}</h5>
                <span class="text-muted">1 นาทีที่แล้ว, {{comment.time}}</span>
            </div>
        </div>
            
                
                <div class="row"> 
                    <p>{{ comment.content }}</p>
                    
                </div>
                <div class="row">
                    <div class="stats">
                        <span class="mr-4"><i class="fa fa-thumbs-up icon"></i> {{comment.like}}</span>
                       
                        <i class="fa fa-thumbs-down icon"></i> {{comment.dislike}}
                    </div>
                </div>
        
    </div>
</template>

<script>
    export default {
        props: ['comment', 'index']
    }
</script>
