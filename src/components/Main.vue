<template>
  <div>
    <NavBar />
    <div id="app-intro">
        <div class="container">
        <div id="app-intro-content">
            &nbsp;
        </div>

        <div id="search-box">
            <div class="input-group mb-3">
            <input
                type="text"
                class="form-control app-font"
                placeholder="พิมพ์สิ่งที่คุณสนใจ"
                v-model="searchText"
            >
            <div class="input-group-append">
                <button class="btn" type="button"><i class="fas fa-search"  @click="routeToItem"></i></button>
            </div>
            </div>
        </div>
        </div>
    </div>

    <div class="container mt-5">
        <Heading text="หรือไม่รู้จะค้นหาอะไร ลองดูตรงนี้สิ"/>
        <div class="row">
            <div class="col" v-for="cate in categories">
                <CategoryBtn :id="cate.id" :name="cate.name" :img="cate.img" :key="'cateBtn'+cate.id"></CategoryBtn>
            </div>
        </div>
        

        <div class="mt-3">
        <Heading text="Popular"/>
        <div class="row mb-3">
            <div class="col" v-for="course in sortByView" v-bind:key="'top_'+course.id">
                <CourseItemV :id="course.id" :image="course.img" :name="course.name" :price="course.price" :desc="course.description"></CourseItemV>
            </div>
        </div>
        </div>
    </div>
    <Section>
        <Heading text="Recommend"/>
        <div class="row mb-3">
            <div class="col-6" v-for="course in sortByView" v-bind:key="'rec_'+course.id">
                <CourseItem :id="course.id" :image="course.img" :name="course.name" :price="course.price" :desc="course.description"></CourseItem>
            </div>
        </div>
    </Section>
    <div class="container mt-3">
        <Heading text="New Arrivals"/>
        <div class="row">
            <div class="col-6" v-for="course in sortByDate" v-bind:key="'rec_'+course.id">
                <CourseItem :id="course.id" :image="course.img" :name="course.name" :price="course.price" :desc="course.description"></CourseItem>
            </div>
        </div>
        </div>

  </div>
</template>

<script>
import Section from '@/components/Section.vue';

import NavBar from '@/components/NavBar.vue';
import Heading from '@/components/Heading.vue';
import CourseItem from '@/components/CourseItem.vue';
import CourseItemV from '@/components/CourseItemV.vue';
import CategoryBtn from '@/components/CategoryBtn.vue';

import { Carousel, Slide } from 'vue-carousel';

 import {
          db
     } from './../firebase'
export default {
    data() {
        return {
            categories: [
                {id:1,name:"วิทย์",image:""},
                {id:2,name:"ศิลป์",image:""},
                {id:3,name:"อาชีพยุคใหม่",image:""},
                {id:4,name:"Verified",image:""},
                {id:5,name:"Inspired",image:""},
            ],

            courses: [],
            topSearchCourses: [],
            recommendCourses: [
                {id:1111,
                name:"tests",
                price:1200,
                description:"tsetsetsetkesltkseltklsektl"
                }
            ],
            latestCourses: [],
            popularCourses: [],
            searchText: []
        }
    },
    created() {
        var vm = this
        db.ref('courses').once('value', snapshot => { 
                vm.courses = snapshot.val() 
                console.log(snapshot.val())
            }).catch( err => {
                console.log(err)
            })
    },
    components: {
        NavBar,

        Heading,
        CourseItem,
        CourseItemV,
        CategoryBtn,
        Carousel,
        Slide,
        
        Section
    },
    computed: {
        sortByView() {
                 return this.courses.sort( (a, b) => parseFloat(b.view) - parseFloat(a.view))
        },
        filteredByRecommend() {

                return this.courses.filter( course => {
                    return course.recommend == 1
                })
        },
        sortByDate() {
                return this.courses.sort( (a, b) => parseFloat(b.publish) - parseFloat(a.publish))
        }
    },
    methods: {
        routeToItem() {
            // this.$router.push({ path: `/courses/${this.searchText}` })
            // return this.$route.params.id
        }
    }
}

</script>

<style scoped>
#app-intro {
  background: gray;
  color: white;
  min-height: 400px;
}
#app-intro .container {
  padding-top: 62.5px;
  height: 190px;
}
#search-box {
    width:70%;
    z-index: 500;
    position: relative;
    top: 290px;
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
</style>