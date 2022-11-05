<template>
  <ul class="shoppingFooter">
    <li> <el-button type="success" plain>删除</el-button></li>
    <li>已选商品 {{number}} 件</li>
    <li>合计：{{allPrice}} 元</li>
    <li><button>结算</button></li>
  </ul>
</template>

<script>
  export default {
    name:'ShoppingFooter',
    data(){
      return{
        number:5,
        allPrice:54
      }
    }
  }
</script>

<style scoped lang="less">
  .shoppingFooter{
    width: 1005px;
    height: 60px;
    line-height: 60px;
    list-style: none;
    padding-left: 15px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    border-top: none;
    margin: 0 auto;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    li{
      float: left;
    }
    li:nth-child(2){
      margin: 0 300px;
    }
    li:nth-child(4){
      margin-left: 30px;
      button{
        width: 90px;
        height: 45px;
        border-radius: 50px;
        border: none;
        background-color: #67C23A;
        color: #fff;
      }
    }
  }
</style>