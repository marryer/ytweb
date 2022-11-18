<template>
  <div class="headerTop">书单（全部{{index}}）</div>
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
    border: 1px solid rgba(227, 227, 227, 0.863);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 20px;
  }

</style>