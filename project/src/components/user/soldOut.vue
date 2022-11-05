<template>
  <list class="soldout"></list>
</template>

<script>
import list from '../shoppingCar/list';
  export default {
    name:'SoldOut',
    components:{list}
  }
</script>

<style scoped>
  .soldout{
    position: absolute;
    top: 120px;
    left: 220px;
  }
</style>>

</style>