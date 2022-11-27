<template>
  <list class="soldout"></list>
</template>

<script>
// import axios from 'axios';
import list from '../components/shoppingCar/list';
  export default {
    name:'orderHistroy',
    components:{list},
  
  }
</script>

<style scoped>
  .soldout{
    position: absolute;
    top: 120px;
    left: 220px;
  }
</style>