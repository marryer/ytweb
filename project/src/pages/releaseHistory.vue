<template>
  <div :class="box1">
    <!-- 表单 -->
    <el-form ref="form" :model="form" label-width="100px" class="release-page">
      <!-- 书名 -->
      <el-form-item label="书名：" :class="bookName">
        <el-input
          v-model="form.bookName"
          placeholder="请输入书名"
          :class="[inputStyle, inputFocus]"
        ></el-input>
      </el-form-item>
      <!-- 作者 -->
      <el-form-item label="作者：" :class="bookAuthor">
        <el-input
          v-model="form.bookAuthor"
          placeholder="请输入作者"
          :class="[inputStyle, inputFocus]"
        ></el-input>
      </el-form-item>
      <!-- 书籍价格 -->
      <el-form-item label="价格" :class="priceBox">
        <el-input-number
          v-model="form.price"
          :min="0"
          :max="100"
          label="价格"
        ></el-input-number>
      </el-form-item>
      <br />
      <!-- 上传书籍照片 -->
      <div class="bookImg">书籍封面：</div>
      <el-upload
        :class="uploadImg"
        drag
        action="http://124.221.229.229:8888/api/posts/add"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div :class="elUploadTip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>

      <br />
      <!-- 年级 -->
      <el-form-item label="书籍所用年级" :class="selectBox">
        <el-select
          :multiple="false"
          :clearable="true"
          v-model="form.nianji"
          value-key="item.value"
        >
          <el-option
            v-for="item in form.category[0].children[0].children"
            :value="item.value"
            :label="item.label"
            :key="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <br />
      <!-- 专业 -->
      <el-form-item label="所用专业：" :class="bookSpecialty">
        <el-select
          :multiple="true"
          :clearable="true"
          v-model="form.bookSpecialty"
        >
          <el-option
            v-for="item in form.bookSpecialty"
            :value="item.id"
            :label="item.name"
            :key="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 书籍详情 -->
      <el-form-item label="书籍详情" :class="tips">
        <el-input
          type="textarea"
          v-model="form.area"
          cols="70"
          rows="3"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
export default {
  name: "releaseHistory",
  data() {
    return {
      form: {
        bookName: "", // 书名
        bookAuthor: "", // 书籍作者
        price: "", // 价格
        nianji: [], //年级
        bookSpecialty: [], // 书籍专业
        area: "",
        // 书籍分类
        category: [
          {
            label: "书本分类",
            children: [
              {
                label: "年级",
                children: [
                  {
                    label: "2022",
                    value: 3,
                  },
                  {
                    label: "2021",
                    value: 4,
                  },
                  {
                    label: "2020",
                    value: 5,
                  },
                  {
                    label: "2019",
                    value: 6,
                  },
                ],
              },
              {
                label: "专业",
                children: [
                  { label: "工商管理", value: 7 },
                  { label: "英语", value: 8 },
                  { label: "德语", value: 9 },
                  { label: "资产评估", value: 10 },
                  { label: "供应链管理", value: 11 },
                  { label: "数字经济", value: 12 },
                  { label: "管理科学与工程", value: 13 },
                  { label: "软件工程", value: 14 },
                  { label: "数字媒体技术", value: 15 },
                  { label: "数据科学与大数据技术", value: 16 },
                  { label: "电子信息", value: 17 },
                  { label: "电气类", value: 18 },
                  { label: "机械类", value: 19 },
                  { label: "轨道交通电气与控制", value: 20 },
                  { label: "物联网工程", value: 21 },
                  { label: "网络工程", value: 22 },
                  { label: "电气工程及其自动化", value: 23 },
                  { label: "机械制造及其自动化", value: 24 },
                  { label: "动画", value: 25 },
                  { label: "广播电视编导", value: 26 },
                  { label: "计算机应用技术", value: 27 },
                  { label: "现代通信技术", value: 28 },
                ],
              },
            ],
          },
        ],
        bookId: "",
        // 是否删除(默认未删除)
        isDeleted: 1,
      },
      // 最大专业选择数
      selectNum: 3,
      box1: "box1",
      fileList: [],
      bookName: "book_name",
      inputStyle: "input_style",
      bookAuthor: "book_author",
      priceBox: "price_box",
      // imgBox:'img_box',
      uploadImg: "upload_img",
      elUploadTip: "el-upload_tip",
      selectBox: "select_box",
      bookSpecialty: "book_specialty",
      tips: "tips",
      submitBox: "submit_box",
      successBtn: "success_btn",
      inputFocus: "input_focus",
    };
  },
  // 提交操作
  mounted() {
    this.$bus.$on("getBookMsg", (data) => {
      // 获取书籍的作者
      this.form.bookAuthor = data.author;
      // 获取书籍的名字
      this.form.bookName = data.bookName;
      // 获取书籍的价格
      this.form.price = data.price;
      // 将书籍与专业数据分别存储
      [this.form.nianji, ...this.form.bookSpecialty] = data.category;
      // 获取书籍的详情
      this.form.area = data.description;
      this.form.bookId = data.bookId;
      // 获取是否删除信息
      this.form.isDeleted = data.isDeleted;
    });
  },
};
</script>
  
  <style scoped>
.box1 {
  position: absolute;
  margin-top: -600px;
  margin-left: 300px;
  width: 700px;
  height: 600px;
  /* margin-top: 40px; */
  background-color: #dee8ce;
  padding-left: 40px;
}
.input_style {
  margin-left: 20px;
  width: 60%;
}
.book_name {
  position: absolute;
  margin-left: -30px;
}
.book_author {
  position: absolute;
  margin-left: 10px;
}
.book_name,
.book_author {
  position: absolute;
  top: 5%;
  font-size: 40px;
  font-weight: 700;
}

.book_author {
  position: absolute;
  top: 5%;
  left: 30%;
}
.price_box {
  position: absolute;
  top: 5%;
  right: 10px;
}
.bookImg {
  position: absolute;
  top: 30%;
}
.upload_img {
  position: absolute;
  top: 14%;
  left: 130px;
  width: 200px;
  height: 100px;
  font-size: 12px;
}
.el-upload_tip {
  display: inline-block;
  width: 300px;
  font-size: 12px;
}
.select_box {
  position: absolute;
  top: 54%;
}
.book_specialty {
  position: absolute;
  right: 20px;
  top: 54%;
}
.tips {
  position: absolute;
  top: 70%;
}

.input_focus:focus {
  border: 1px #67c23a;
}
</style>