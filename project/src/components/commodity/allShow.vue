<template>
  <div class="allShow">
    <div class="allShow-one">
      <div v-for="list in bookList" :key="list.bookId">
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: {{list.bookName}}</h3>
        <p>作者: {{list.author}}</p>
        <p style="color:#9a8600">价格: {{list.price}} 元</p>
        <el-button type="success" plain class="allshow-button">加入书单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'AllShow',
    data(){
      return{
        book:{
          name:'计算机网络',
          author:'谢希仁',
          price:23
        },
        bookList:[]
      }
    },
  }
</script>
<style  scoped lang="less"> 
.allShow{
  width: 1200px;
    .allShow-one{
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
      div{
        width: 260px;
        border: 1px solid rgba(227, 227, 227, 0.863);
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        text-align: center;
        transition: all .5s;
          img{
            width: 80%;
          }
      }
      div:hover{
        transform: translateY(-4px);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
      }
  }
}

</style>