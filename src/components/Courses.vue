<template>
    <div>
        {{ courses }}
    </div>
</template>

<script>
    import {
          db
     } from './../firebase'
    export default {
        data() {
            return{ 
                courses: []
            }
        },
        created() {
            var vm = this
            db.ref('courses').once('value').then(snapshot => {
                vm.courses = snapshot.val()
            }).catch(err => {
                console.error(err)
            })
        }
    
    }
</script>
