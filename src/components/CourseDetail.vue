<template>

        <div>
            
            <NavBar/>
            <div class="mt-5 pt-4"></div>
            <div v-show="course.expired" style="color:white;background:darkred;text-align: center;">
                <i class="fas fa-info"></i> &lt;เสร็จสิ้นไปแล้ว&gt; ข้อมูลในหน้านี้อาจไม่ใช่ข้อมูลที่คุณต้องการหรือล้าสมัย
            </div>
            <div class="container">
             <ContentZone class="pt-5 mt-5">
            <div class="row mb-5">
                <div class="col-6 align-self-center">
                    <h3>{{ course.name }}</h3>
                    <p class="text-muted"><i class="fas fa-calendar-week"></i> {{course.publish}}</p>
                    <h5 class="text-primary mt-4 mb-4">{{course.price > 0 ? course.price.toLocaleString()+' บาท': 'ฟรี'}}</h5>
                </div>
                <div class="col-6" style="text-align:right">
                    <img :src="course.thumbnail" style="width:70%;" />
                </div>
            </div> 
            
            <h4>รายละเอียดกิจกรรม</h4>
            
                <div v-html="course.content"></div>
                <div>  
                    <vue-goodshare></vue-goodshare>
                </div>
             </ContentZone>

            <ContentZone class="w-100 mt-3 mb-3" v-for="(comment, i) in comments" v-bind:key="'comment'+i">
                 <Comment :comment="comment" :index="i"></Comment>
            </ContentZone>
            <ContentZone class="w-100 mt-3 mb-3">
                <textarea class="form-control">

                </textarea>
                <input type="submit" class="btn btn-primary" value="แสดงความคิดเห็น"/>
            </ContentZone>
    </div>
    </div>
</template>

<script>

    import VueGoodshare from "vue-goodshare";
    import ContentZone from '@/components/ContentZone.vue'
    import NavBar from '@/components/NavBar.vue'
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
            NavBar,
            ContentZone,
            Comment
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
