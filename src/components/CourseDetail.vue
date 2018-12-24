<template>

        <div class="container" >
        <div class="row">
            <br><br><br><br><br><br><br>
            <p>{{ course }}</p>
            <div>  
                <vue-goodshare></vue-goodshare>
            </div>
        </div>
        <br>
        <div class="row">
            <h1>Comments: </h1>
            <p>{{ comments }}</p>
        </div>
    </div>
</template>

<script>

    import VueGoodshare from "vue-goodshare";
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
            VueGoodshare
        },
        created() {
            var vm = this
            db.ref('courses').once('value', snapshot => { 
                        var snaps = snapshot.val() 
                        vm.product = snaps.find(snap => snap.id == this.$route.params.id)
            }).catch( err => {
                console.log(err)
            })

            db.ref('comments').child(this.$route.params.id).once('value', snapshot => {
                    vm.comments = snapshot.val()
            })
        }
    }
</script>
