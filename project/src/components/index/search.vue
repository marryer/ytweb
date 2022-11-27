<template>
  <div>
    <el-row class="demo-autocomplete middle">
      <el-col :span="12">
        <!-- <div class="sub-title">激活即列出输入建议</div> -->
        <el-autocomplete
          class="inline-input middle-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入搜索内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
  </el-row>
  <div class="search-box" @click="Search"><a href="javascript:;">搜索</a></div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Search',
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: '',
        searchBookList:[],
      };
    },
    methods: {
      Search(){
      axios.get(`http://localhost:8080/api/book/search/网?bookName=${this.state1}`).then(
        response=>{
          this.searchBookList = response.data.data
        },error=>{
         alert(error.message)
        })
        this.$bus.$emit("searchBook", this.searchBookList)
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "C语言", "address": "长宁区新渔路144号" },
          { "value": "Node.js", "address": "上海市长宁区淞虹路661号" },
          { "value": "计算机网络", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "计算机操作系统", "address": "天山西路438号" },
          { "value": "UI设计", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "Java SE", "address": "上海市长宁区金钟路633号" },
          { "value": "电子商务法", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "组织行为学", "address": "上海市普陀区同普路1435号" },
          { "value": "苏格拉底的申辩", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "四书集注", "address": "上海市嘉定区新郁路817号" },
          { "value": "市场营销", "address": "嘉定区曹安路1611号" },
          { "value": "欧洲文明", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "正义论", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "Python", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "高等数学", "address": "上海市长宁区天山西路119号" },
          { "value": "概率论与数理统计", "address": "上海市长宁区仙霞西路" },
          { "value": "离散数学", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": " 线性代数", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "大学生创新创业基础", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "中国近现代史纲要", "address": "上海市普陀区棕榈路" },
          { "value": "数据库原理与应用", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "马泽东思想和中国特色社会主义理论体系概论", "address": "上海市长宁区天山西路" },
          { "value": "数据结构与算法", "address": "上海市长宁区通协路" },
          { "value": "大学物理", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "马克思主义基本原理", "address": "长宁区仙霞西路88号1305室" },
          { "value": "财务管理", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "消费心理学", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style scoped>
a{
  display: block;
  text-decoration: none;
  color: #fff;
}
/* 设置整个搜索框的位置 */
  .middle{
    position: relative;
    top: 30px;
    left: 300px;
  }
  /* 设置搜索框的大小 */
  .middle-input{
    width: 600px;
    background-color: #f2f3f4;
  }
  /* 设置搜索框的搜索按钮 */
  .search-box{
    position: absolute;
    width:70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 3px;
    background-color: #67C23A;
    top: 99px;
    left: 243px;
    color: #fff;
    font-size: 14px;
  }
</style>