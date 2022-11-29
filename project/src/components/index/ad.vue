<template>
    <div class="ad">
      <img src="../../img/watch-long.png" alt="">
    </div>
</template>

<script>
  export default {
    name:'Ad',
  }
</script>

<style scoped lang="less">
  .ad{
    position: absolute;
    top: 320px;
    right:10px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    transition: all .5s;
    img{
      width: 320px;
    }
  }
  .ad:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    transform: translateY(-4px);
  }
</style>