<template>
  <div>
    <el-row :class="[rBtn]">
        <el-button type="success" :class="btn">发布</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'ReleaseBtn',
  data(){
    return{
      rBtn:'r_btn',
      btn:'btn',
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
.btn{
  width: 200px;
  height: 60px;
}
</style>
发布页面