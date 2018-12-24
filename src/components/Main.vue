<template>
  <div>
    <div id="app-intro">
        <div class="container">
        <div id="app-intro-content">test</div>

        <div id="search-box">
            <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
            >
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            </div>
        </div>
        </div>
    </div>

    <div class="container mt-5">
        <Heading text="หรือไม่รู้จะค้นหาอะไร ลองดูตรงนี้สิ"/>
        <div class="row">
            <CategoryBtn id="1" name="เทคโน" img=""></CategoryBtn>
            <CategoryBtn id="1" name="เทคโน" img=""></CategoryBtn>
        </div>

        <Heading text="Top Search"/>
        <div class="row">
            <div class="col" v-for="course in topSearchCourses" v-bind:key="'top_'+course.id">
                <CourseItemV :image="'test'" :name="course.name" :price="course.price" :desc="course.description"></CourseItemV>
            </div>
        </div>

        
        <Heading text="Recommend"/>
        <div class="row">
            <div class="col-6" v-for="course in recommendCourses" v-bind:key="'rec_'+course.id">
                <CourseItem :image="'test'" :name="course.name" :price="course.price" :desc="course.description"></CourseItem>
            </div>
        </div>

        <Heading text="New Arrivals"/>
        <div class="row">
            <div class="col-6" v-for="course in recommendCourses" v-bind:key="'rec_'+course.id">
                <CourseItem :image="'test'" :name="course.name" :price="course.price" :desc="course.description"></CourseItem>
            </div>
        </div>
        </div>

  </div>
</template>

<script>
import Heading from '@/components/Heading.vue';
import CourseItem from '@/components/CourseItem.vue';
import CourseItemV from '@/components/CourseItemV.vue';
import CategoryBtn from '@/components/CategoryBtn.vue';

export default {
    data() {
        return {
            courses: {},
            topSearchCourses: {},
            recommendCourses: [
                {id:1111,
                name:"tests",
                price:1200,
                description:"tsetsetsetkesltkseltklsektl"
                }
            ],
            latestCourses: {}
        }
    },
    components: {
        Heading,
        CourseItem,
        CourseItemV,
        CategoryBtn,
    }
}

</script>

<style>
#app-intro {
  background: gray;
  color: white;
  min-height: 350px;
}
#app-intro .container {
  padding-top: 62.5px;
  height: 175px;
}
#search-box {
    z-index: 500;
    position: relative;
    top: 250px;
    background: white;
    border-radius:20px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.25);
}
#search-box input {
    background:transparent;
    border:none;
}
#search-box input:active, #search-box input:focus {
    box-shadow:none;
}
</style>