<template>
  <div>
    <el-row :class="[rBtn]">
      <router-link :to="{ name: 'releasePage' }">
        <el-button type="success" :class="btn1">发布</el-button>
      </router-link>
      <router-link :to="{ name: 'releaseList' }" class="fabu">
        <el-button type="success" :class="btn2" @click="sendBook"
          >发布历史</el-button
        >
      </router-link>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReleaseBtn",
  data() {
    return {
      rBtn: "r_btn",
      btn1: "btn1",
      btn2: "btn2",
      bookData: "",
    };
  },
  mounted() {
    axios({
      method: "post",
      url: "/api/history_product_release",
      data: {
        userId: 1,
      },
    }).then(
      (response) => {
        console.log("请求成功！");
        this.bookData = response.data;
      },
      (error) => {
        console.log(error.message);
      }
    );
  },

  methods: {
    sendBook() {
      this.$bus.$emit("getMsg", this.bookData.data);
    },
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  position: absolute;
  left: 30px;
}
.fabu {
  position: absolute;
  left: 40px;
}
/* 发布按钮样式 */
.r_btn {
  /* 发布按钮位置 */
  position: absolute;
  margin-top: 40px;
  left: 60px;
  /* 发布按钮大小 */
  display: inline-block;
  font-size: 60px;
  top: 40px;
  left: 20px;
}
.btn1 {
  width: 200px;
  height: 60px;
}
.btn2 {
  position: absolute;
  top: 100px;
  left: -10px;
  width: 200px;
  height: 60px;
}
</style>