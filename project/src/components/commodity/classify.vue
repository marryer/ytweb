<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" class="classify"></el-tree>
</template>

<script>
import axios from 'axios';
  export default {
    name:'Classify',
    data() {
      return {
        data: [{
          label:"书本分类",
          children: [
            {
            label: '年级',
            children: [{
              label: '2022',
            },{
              label: '2021',
            }, {
              label: '2020',
            }, {
              label: '2019',
            },
          ]
          }, 
          {
            label: '专业',
            children: [
              {label: '工商管理',},
              {label: '英语',},
              {label: '德语',},
              {label: '资产评估',},
              {label: '供应链管理',},
              {label: '数字经济',},
              {label: '管理科学与工程',},
              {label: '软件工程',},
              {label: '数字媒体技术',},
              {label: '数据科学与大数据技术',},
              {label: '电子信息',},
              {label: '电气类',},
              {label: '机械类',},
              {label: '轨道交通电气与控制',},
              {label: '物联网工程',},
              {label: '网络工程',},
              {label: '电气工程及其自动化',},
              {label: '机械制造及其自动化',},
              {label: '动画',},
              {label: '广播电视编导',},
              {label: '计算机应用技术',},
              {label: '现代通信技术',},
          ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log("classfiy",data);
      }
    },
  }
</script>

<style scoped>
  .classify{
    position: absolute;
    z-index: 9999;
    margin-top: -9px;
    border: 1px solid rgba(227, 227, 227, 0.863);
    box-shadow: 0 0 2px rgba(0, 0, 0, .2);
    padding: 8px;
  }
</style>