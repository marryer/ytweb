<template>
 <div id="slideShow">
    <el-carousel :interval="5000" arrow="always" class="slideShow">
        <el-carousel-item v-for="item in img_list" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
 </div>
</template>
<script>
  export default {
    name:'SlideShow',
   data(){
    var img1 = require("../../img/slideshow.jpg")
    var img2 = require("../../img/s1.jpg")
    var img3 = require("../../img/s2.jpg")
    var img4 = require("../../img/s4.jpg")
    return{
      img_list:[img1,img2,img3,img4],
      // slideHeight:300,
    }
   }
  }
</script>

<style scoped>
.slideShow{
  width: 880px;
  height: 300px;
  margin-top: 80px;
  background-color:rgba(230, 227, 197, 0.815);
}
</style>