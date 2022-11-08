<template>
  <div>
    <el-row class="rBtn">
        <el-button type="success">发布</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'ReleaseBtn',

}
</script>

<style scoped>
/* 发布按钮样式 */
.rBtn{
  /* 发布按钮位置 */
  position: absolute;
  top:60px;
  left: 60px;
  /* 发布按钮大小 */
  display: inline-block;
  font-size:60px;
}
</style>
发布页面