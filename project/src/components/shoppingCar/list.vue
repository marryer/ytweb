<template>
  <li class="list">
    <label>
      <input type="checkbox"> 
      <img src="../../img/redmi10A.png" alt="">
      <span>书名：{{book.name}}；作者：{{book.author}}</span>
      <span class="list-number">{{book.price}}</span>
      <button class="list-oprate">删除</button>
    </label>
  </li>
</template>

<script>
  export default {
    name:'List',
    data(){
      return{
        book:{
          name:'计算机网络',
          author:'谢希仁',
          price:23
        }
      }
    }
  }
</script>

<style scoped lang="less">
.list{
  list-style: none;
  width: 1005px;
  height: 120px;
  // line-height: 120px;
  // background-color:red ;
  // border: 1px solid black;
  margin: 0 auto;
  padding-left: 15px;
  border: 1px solid rgba(227, 227, 227, 0.863);
  border-top: none;

  img{
    width: 12%;
    // margin-top: 15px;
    margin-left: 10px;
    margin-right: 25px;
    margin-bottom: -45px;

  }
  span{
    display: inline-block;
  }
  .list-number{
    margin: 0 170px;
    color: #ffcf4b;
  }
  .list-oprate{
    margin-left: 140px;
    border: none;
    background-color: #fff;
  }
  .list-oprate:hover, .list-oprate:focus{
    color:#ffcf4b
  }
}
</style>