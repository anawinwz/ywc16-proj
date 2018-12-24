<template>
    <div>
        <br><br><br><br><br><br>
        <form >
            <input type="search" v-model="searchText"><br>
            Price: <input type="text" v-model="minPrice"> <input type="text" v-model="maxPrice">
            Sort by View: <input type="text">
            <input type="submit">
            <select class="selectpicker">
                <option value="" selected disabled>Sort</option>
                <option v-for="item in sort" :value="item" v-model="selectSort">{{item}}</option>
            </select>
           

        </form>
        <p> course </p>
        {{ courses }}
        <p> filter course </p>
        {{ filteredCourse }}
        <p>Sort by View: </p>
        {{ sortByView }}
        <p>Filter by offline/ online</p>
        {{ filteredByPriceTest }}
   
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
                filteredCourse: [],
                searchText: [],
                minPrice: 0,
                maxPrice: 0,
                sort: ['Popular'],
                selectSort: '',
                province: ['bangkok', 'Pathun thani']
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
            },
            selectSort(newVal) {
                if(newVal) {
                    if(newVal == 'Popular')
                     this.filteredCourse = this.sortByView()
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
             filteredByCategory(name) {
                 return name =>  this.courses.filter( course => {
                    return course.category.includes(course)
                })
            },
            filteredByField(name) {
                if(name == 'offline'){
                    this.courses.filter( course => {
                        return course.offline == 1
                    })
                }else {
                    this.courses.filter( course => {
                        return course.offline == 0
                    })
                }
            },
            sortByView() {
                 return this.courses.sort( (a, b) => parseFloat(b.view) - parseFloat(a.view));
            },
            filteredByPriceTest() {
                var vm = this
                this.filteredCourse = this.courses.filter( course => {
                    return course.price >= vm.minPrice  && course.price <= vm.maxPrice
                })
           }
        },
        methods: {
        //    filteredByPrice(min, max) {
        //        this.filteredCourse = this.courses.filter( course => {
        //             return course.price >= min  && course.price <= max
        //         })
        //    }
        }
    }

</script>
