<template>
  <div class="more">
   <p>
    <router-link to="/commodity"><span>浏览更多 </span><img src="../../img/arrowRight.png" alt=""/></router-link>
   </p>
  </div>
</template>

<script>
  export default {
    name:'More',
  }
</script>

<style scoped lang="less">
  .more{
    width: 320px;
    height: 135px;
    // line-height: 135px;
    position: absolute;
    border: 1px solid rgba(227, 227, 227, 0.863);
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    // 设置更多平移效果
    transition: all .5s;
    top: 1200px;
    right: 10px;
    font-size: 28px;
    text-align: center;
    a{
      text-decoration: none;
      color: rgba(155, 150, 150, 0.815);
      display:inline-block;
      img{
        margin-bottom: -15px;
      }
  
    }
  }
  .more:hover{
    // 设置更多浮动
    transform: translateY(-4px);
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
</style>