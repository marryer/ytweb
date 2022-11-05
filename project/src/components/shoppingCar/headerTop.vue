<template>
  <div class="headerTop">购物车（全部{{index}}）</div>
</template>

<script>
  export default {
    name:'HeaderTop',
    data(){
      return{
        index:8,
      }
    }
  }
</script>

<style scoped>
  .headerTop{
    width: 1000px;
    height: 45px;
    line-height: 45px;
    margin :0 auto;
    margin-top: 30px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    /* box-shadow: 0 0 2px rgba(0, 0, 0, .2); */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 20px;
  }

</style>