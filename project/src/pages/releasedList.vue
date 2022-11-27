<template>
  <div class="box">
    <div class="infinite-list" style="overflow: scroll">
      <div
        v-for="(item, index) in bookData"
        class="infinite-list-item"
        :key="index"
        @click="useMsg(item)"
      >
        <router-link :to="{ name: 'releaseHistory' }" active="routerActive">{{
          item.bookName
        }}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "releasedList",
  data() {
    return {
      count: 0,
      bookData: [],
    };
  },
  beforeCreate() {
    this.$bus.$on("getMsg", (data) => {
      this.bookData = data;
      this.count = this.bookData.length;
    });
  },

  methods: {
    useMsg(item) {
      this.$bus.$emit("getBookMsg", item);
    },
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  top: 160px;
  top: 280px;
  left: 50px;
  width: 200px;
  background-color: #ebeaea;
}
a {
  display: inline-block;
  width: 180px;
  height: 60px;
  color: #000;
  text-decoration: none;
}
.infinite-list {
  height: 400px;
}
.infinite-list-item {
  height: 60px;
  text-align: center;
  list-style: none;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
.infinite-list-item:hover {
  background-color: #67c23a;
}
.routerActive {
  background-color: #67c23a;
}
</style>