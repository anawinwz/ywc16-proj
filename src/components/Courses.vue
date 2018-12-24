<template>
    <div>
        <form >
            <input type="search" v-model="searchText"><br>
            <input type="submit">
        </form>
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
                courses: [],
                searchText: []
            }
        },
        created() {
            var vm = this
            db.ref('courses').once('value').then(snapshot => {
                vm.courses = snapshot.val()
            }).catch(err => {
                console.error(err)
            })
        },
        watch: {
            searchText(newVal) {
                console.log(newVal)
                this.courses = this.filteredByNameEng(newVal)
            }
        },
        computed: {
             filteredByNameEng(name) {
                 return name => this.courses.filter( course => {
                    return course.name.toLowerCase().includes(name.toLowerCase())
                }) 
            },
             filteredByNameThai(name) {
                 return name => this.courses.filter( course => {
                    return course.name.includes(name)
                }) 
            }
        },
        methods: {
           
        }
    }

</script>
