<template>
    <div>
        <NavBar/>
        <form >
            <input type="search" v-model="searchText"><br>
            Price: <input type="text" v-model="minPrice"> <input type="text" v-model="maxPrice"><input type="submit" @click.prevent="filterCourses(minPrice, maxPrice)">

        </form>
        {{ filteredCourse }}
        <p>Sort by View: </p>
        {{ sortByView }}
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue'
    import {
          db
     } from './../firebase'
    export default {
        components: {
            NavBar,
        },
        data() {
            return{ 
                courses: [],
                filteredCourse: [],
                searchText: [],
                minPrice: 0,
                maxPrice: 0
            }
        },
        created() {
            var vm = this
            db.ref('courses').once('value').then(snapshot => {
                vm.courses = snapshot.val()
                vm.filteredCourse = vm.courses
            }).catch(err => {
                console.error(err)
            })
        },
        watch: {
            searchText(newVal) {
                if(newVal == ''){
                    this.filteredCourse = this.courses
                }else{
                    this.filteredCourse = this.filteredByNameEng(newVal)
                }
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
            },
            // พังงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง
            filteredByPrice(min, max) {
                // var vm = this
                return min, max => this.courses.filter( course => {
                    return  course.price >= min  || course.price <= max
                })
                // var vm = this
                // this.courses.forEach( course => {
                //     if(course.price >= min && course.price <= max) {
                //         vm.filteredCourse
                //     }
                // })
            },
             filteredByCategory(name) {
                 return name =>  this.courses.filter( course => {
                    return course.category.includes(course)
                })
            },
            sortByView() {
                 return this.courses.sort( (a, b) => parseFloat(b.view) - parseFloat(a.view));
            },
        },
        methods: {
           filterCourses(min, max) {
               console.log(min, max)
               var vm = this
               this.filteredCourse = this.courses.filter( course => {
                    return course.price >= vm.min  && course.price <= vm.max
                })
           }
        }
    }

</script>
