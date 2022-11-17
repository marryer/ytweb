<template>
  <div class="business">
    <div class="business-one">
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: {{book.name}}</h3>
        <p>作者: {{book.author}}</p>
        <p style="color:#9a8600">价格: {{book.price}} 元</p>
        <el-button type="success" plain class="allshow-button">加入书单</el-button>
      </div>
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: {{book.name}}</h3>
        <p>作者: {{book.author}}</p>
        <p style="color:#9a8600">价格: {{book.price}} 元</p>
        <el-button type="success" plain class="allshow-button">加入书单</el-button>
      </div>
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: {{book.name}}</h3>
        <p>作者: {{book.author}}</p>
        <p style="color:#9a8600">价格: {{book.price}} 元</p>
        <el-button type="success" plain class="allshow-button">加入书单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Business',
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
<style  scoped lang="less"> 
.business{
  width: 900px;
  // height: 400px;
    .business-one{
      margin-top: 60px;
    display: flex;
    flex-direction: row;
    // background-color: red;
    justify-content: space-around;
      div{
        width: 260px;
        border: 1px solid rgba(227, 227, 227, 0.863);
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        text-align: center;
        transition: all .5s;
        // background-color: #f1f2f3;
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