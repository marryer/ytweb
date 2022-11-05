<template>
  <div class="imagenation">
    <input type="checkbox">全选
    <span class="imagenation-one">商品信息</span>
    <span class="imagenation-two">价格</span>
    <span class="imagenation-three">操作</span>
  </div>
</template>

<script>
  export default {
    name:'Imagenation',
  }
</script>

<style scoped lang="less">
  .imagenation{
    width: 1000px;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    padding-left: 20px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    border-top: none;
    border-bottom: none;
    // box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    .imagenation-one{
      display: inline-block;
      // background-color: red;
      margin-left: 160px;
    }
    .imagenation-two{
      display: inline-block;
      // background-color:gray ;
      margin: 0 300px;
    }
  }
</style>