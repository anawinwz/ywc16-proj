<template>

        <div class="container mt-5">
        <div class="row">
            <br><br><br><br><br><br><br>
            <p>{{ course }}</p>
            <h2>{{ course.name }}</h2>
            <p v-html="course.content"></p>
            <div>  
                <vue-goodshare></vue-goodshare>
            </div>
        </div>
        <br>
        <div class="row">
            <Comment :comments="comments"></Comment>  
            <h1>Comments: </h1>
            <p>{{ comments }}</p>
        </div>
    </div>
</template>

<script>

    import VueGoodshare from "vue-goodshare";
    import Comment from "./Comment.vue"

    import {
          db
     } from './../firebase'
    export default {
        data() {
            return{
                course: [],
                comments: []
            }
        },
        components: {
            VueGoodshare,
        },
        created() {
            var vm = this
            let id = this.$route.params.id
            db.ref('courses').once('value', snapshot => { 
                var snaps = snapshot.val() 
                vm.course = snaps.find(snap => snap.id == id)
            }).catch( err => {
                console.log(err)
            })

            db.ref('comments').child(this.$route.params.id).once('value', snapshot => {
                    vm.comments = snapshot.val()
            })
        }
    }
</script>
