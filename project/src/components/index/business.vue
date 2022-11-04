<template>
  <div class="business">
    <div class="business-one">
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: 计算机网络</h3>
        <p>作者: 谢希仁</p>
        <p style="color:#ffd04b">价格: 23元</p>
      </div>
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: 计算机网络</h3>
        <p>作者: 谢希仁</p>
        <p style="color:#ffd04b">价格: 23元</p>
      </div>
      <div>
        <img src="../../img/redmi10A.png" alt="">
        <h3>书名: 计算机网络</h3>
        <p>作者: 谢希仁</p>
        <p style="color:#ffd04b">价格: 23元</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Business',
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