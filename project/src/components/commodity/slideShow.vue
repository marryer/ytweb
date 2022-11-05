<template>
  <el-carousel :interval="5000" arrow="always" class="slideShow">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
    name:'SlideShow',
  }
</script>

<style scoped>
.slideShow{
  width: 900px;
  margin-top: 90px;
  /* box-shadow: 0 0 2px rgba(0, 0, 0, .2); */
    padding: 8px;
}
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>