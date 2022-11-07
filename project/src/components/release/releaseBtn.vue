<template>
  <div>
    <el-row :class="[rBtn]">
        <el-button type="success" :class="btn1">发布</el-button>
        <el-button type="success" :class="btn2">发布历史</el-button>
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

<style>
/* 发布按钮样式 */
.r_btn{
  /* 发布按钮位置 */
  position: absolute;
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
发布页面