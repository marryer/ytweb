<template>
  <div>
    <el-row :class="[rBtn]">
      <router-link :to="{name:'releasePage'}">
        <el-button type="success" :class="btn1">发布</el-button>
      </router-link>
      <router-link :to="{name:'releaseList'}" class="fabu">
        <el-button type="success" :class="btn2">发布历史</el-button>
      </router-link>  
    </el-row>
  </div>
</template>

<script>
export default {
    name:'ReleaseBtn',
  data(){
    return{
      rBtn:'r_btn',
      btn1:'btn1',
      btn2:'btn2',
    }
  }
}
</script>

<style scoped>
a{
  display: inline-block;
  position: absolute;
  left: 30px;
}
.fabu{
  position: absolute;
  left: 40px;
}
/* 发布按钮样式 */
.r_btn{
  /* 发布按钮位置 */
  position: absolute;
  margin-top:40px;
  left: 60px;
  /* 发布按钮大小 */
  display: inline-block;
  font-size:60px;
  top:40px;
  left: 20px;
}
.btn1{
  width: 200px;
  height: 60px;
}
.btn2{
  position: absolute;
  top: 100px;
  left: -10px;
  width: 200px;
  height: 60px;
}
</style>