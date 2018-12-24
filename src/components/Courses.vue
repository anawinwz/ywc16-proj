<template>
    <div>
        <NavBar/>
        <div class="mt-5 pt-3"></div>
        <form >
            <!-- <input type="search" v-model="searchText"><br>
            Price: <input type="text" v-model="minPrice"> <input type="text" v-model="maxPrice">
            Sort by View: <input type="text">
            <input type="submit">
            <select class="selectpicker">
                <option value="" selected disabled>Sort</option>
                <option v-for="item in sort" :value="item" v-model="selectSort">{{item}}</option>
            </select> -->
           
            <!-- <div id="search-box">
            <div class="input-group mb-3">
            <input
                type="text"
                class="form-control app-font"
                placeholder="พิมพ์สิ่งที่คุณสนใจ"
                v-model="searchText"
            >
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            </div> -->
        <!-- </div> -->

        </form>
        <!--
        <p> course </p>
        {{ courses }}
        <p> filter course </p>
        {{ filteredCourse }}
        <p>Sort by View: </p>
        {{ sortByView }}
        <p>Filter by offline/ online</p>
        {{ filteredByPriceTest }}
        -->
        <Section class="pt-5">
            <div id="search-box">
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control app-font"
                    placeholder="พิมพ์สิ่งที่คุณสนใจ"
                    v-model="searchText"
                >
                    <div class="input-group-append">
                        <button class="btn" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div id="filterPane">
                <h6 class="d-inline-block">ตัวเลือกการค้นหา</h6> 
                <select class="form-control input-sm d-inline-block mr-3" style="width:100px;" v-model="selectSort">
                    <option>เวลา</option>
                    <option>ยอดวิว</option>
                </select>
                <input type="number" class="form-control d-inline-block" style="width:100px;" placeholder="งบต่ำสุด" min=0 max=99999  v-model="minPrice"> - 
                <input type="number" class="form-control d-inline-block" style="width:100px;" placeholder="งบสูงสุด" min=0 max=99999  v-model="maxPrice">
                <select class="form-control input-sm d-inline-block mr-3" style="width:100px;">
                    <option disabled>จังหวัด</option>
                    <option>กรุงเทพ</option>
                    <option>เชียงใหม่</option>
                    <option>ขอนแก่น</option>
                    <option>ภูเก็ต</option>
                </select>
            </div>
        </Section>
        
        <div class="container mt-5">
        <ContentZone>
            <div class="row">
                <div class="col-3" v-for="course in filteredCourse" v-bind:key="'top_'+course.id">
                    <CourseItemV :image="course.thumbnail" :name="course.name" :price="course.price" :desc="course.description"></CourseItemV>
                </div>
            </div>
        </ContentZone>
        </div>
    </div>
</template>

<style scoped>
#search-box {
    width:70%;
    background: white;
    margin: 0 auto;
    border-radius:20px;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
#search-box input {
    background:transparent;
    border:none;
}
#search-box input:active, #search-box input:focus {
    box-shadow:none;
}
#filterPane {
    z-index: 500;
    position: relative;
    top: 40px;
    width:100%;
    padding:5px 20px;
    background: white;
    color:black;
    margin: 0 auto;
    border-radius:20px;box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}
#filterPane select {
    margin-left:15px;
}
</style>
<script>
    import Section from '@/components/Section.vue';
    import ContentZone from '@/components/ContentZone.vue'
import CourseItemV from '@/components/CourseItemV.vue';
    import NavBar from '@/components/NavBar.vue'
    import {
          db
     } from './../firebase'
    export default {
        components: {
            NavBar,
            ContentZone,
            CourseItemV,
        
        Section
        },
        data() {
            return{ 
                courses: [],
                filteredCourse: [],
                searchText: [],
                minPrice: 0,
                maxPrice: 0,
                sort: ['Popular'],
                selectSort: '',
                province: ['bangkok', 'Pathum thani'],
                selectProvince: ''
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
                if(newVal == 'ยอดวิว'){
                    this.filteredCourse = this.sortByView
                }else if(newVal == "เวลา") {
                    this.filteredCourse = this.sortByDate
                }
            },
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
            sortByDate() {
                return this.courses.sort( (a, b) => parseFloat(b.publish) - parseFloat(a.publish))
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