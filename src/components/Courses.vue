<template>
    <div>
        <NavBar/>
        <div class="mt-5 pt-3"></div>
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
                <select class="form-control input-sm d-inline-block mr-3" style="width:200px;" v-model="selectSort">
                    <option value="เรียงตามเวลา">เรียงตามเวลา</option>
                    <option value="เรียงตามยอดเข้าชม">เรียงตามยอดเข้าชม</option>
                </select>
                <input type="number" class="form-control d-inline-block" style="width:100px;" placeholder="งบต่ำสุด" min=0 max=99999 v-model="minPrice"> - 
                <input type="number" class="form-control d-inline-block" style="width:100px;" placeholder="งบสูงสุด" min=0 max=99999 v-model="maxPrice">
                <select class="form-control input-sm d-inline-block mr-3" style="width:150px;" v-model="selectProvince">
                    <option value="" disabled>ไม่กำหนดจังหวัด</option>
                    <option value="กรุงเทพ">กรุงเทพ</option>
                    <option value="เชียงใหม่">เชียงใหม่</option>
                    <option value="ขอนแก่น">ขอนแก่น</option>
                    <option value="ภูเก็ต">ภูเก็ต</option>
                </select>
            </div>
        </Section>
        
        <div class="container mt-5">
        <ContentZone>
            <div class="row">
                <template v-if="Object.keys(filteredCourse).length>0">
                <div class="col-3" v-for="course in filteredCourse" v-bind:key="'top_'+course.id">
                    <CourseItemV :image="course.thumbnail" :name="course.name" :price="course.price" :desc="course.description" :date="course.period" :expired="course.expired"></CourseItemV>
                </div>
                </template>
                <template v-else>
                    <h3 class="text-muted" style="margin:0 auto;">ไม่พบข้อมูลตามการกรองที่ท่านเลือก</h3>

                </template>
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
        return {
            categories: [
                {},
                {id:1,name:"วิทย์",image:""},
                {id:2,name:"ศิลป์",image:""},
                {id:3,name:"อาชีพยุคใหม่",image:""},
                {id:4,name:"Verified",image:""},
                {id:5,name:"Inspired",image:""},
            ],
                courses: [],
                filteredCourse: [],
                searchText: [],
                minPrice: 0,
                maxPrice: 0,
                sort: ['Popular'],
                selectSort: 'เรียงตามยอดเข้าชม',
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
                if(newVal == 'เรียงตามยอดเข้าชม'){
                    this.filteredCourse = this.sortByView
                }else if(newVal == "เรียงตามเวลา") {
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