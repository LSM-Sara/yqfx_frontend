<template>
    <el-affix :offset="0">
    <header class="header">
    <div>登陆/注册</div>
    <div>联系我们</div>
    <div>语言</div>
  </header>
  </el-affix>
  <div class="overview-box">
    <div class="title">
      <img src="https://www.whu.edu.cn/images/toplog1.png" class="logo" />
      <div @click="goToHome">首页</div>
      <div @click="goToChart">数据集分析</div>
      <div @click="goTomodel">模型体验</div>
      <div @click="goToAbout">关于我们</div>
    </div>
    <div class="authors-title">作者</div>
    <div class="authors">佘添翼</div>
    <div class="authors">廉厶铭</div>
    <div class="authors">孙梦圆</div>
    <div class="authors">杨文韬</div>
    <div class="authors-title">特别感谢</div>
    <fiv class="authors">李霏教授的教导</fiv>
  </div>
  <Footer show-border />
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import router from '@/router'
  import Chart from '@/components/Chart/chart.vue'
  
  export default defineComponent({
    name: 'model',
    components: { Chart },
    setup() {
      const goToChart = () => {
        console.log('chart')
        router.push({
          path: '/chart'
        })
      }
      const goToHome = () => {
        console.log('home')
        router.push({
          path: '/'
        })
      }
      const goTomodel = () => {
        console.log('model')
        router.push({
          path: '/model'
        })
      }
      const goToAbout = () => {
        console.log('About')
        router.push({
          path: '/about'
        })
      }
      return {
        goToHome,
        goTomodel,
        goToChart,
        goToAbout
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .overview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    height:80vh;
    .title {
      height: 15vh;
      width: 100vw;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 18px;
      position: relative;
      padding-left: 10vw;
    }
  }
  .header {
    height: 6vh;
    width: 100vw;
    padding-left: 70vw;
    line-height: 6vh;
    display: flex;
    justify-content: space-evenly;
    font-size: 15px;
    border-bottom: 0.8px solid rgba(128, 128, 128, 0.375);
    color: grey;
  }
  
  .logo {
    height: 10vh;
    position: absolute;
    left: 15px;
  }
  .title div:hover {
    cursor: pointer;
    user-select: none;
  }
  .display-box {
    width: 90vw;
  }
  .authors{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 20px;
}
.authors-title{
  font-size: 22px;
  font-weight: bold;
  line-height: 40px;
}
  </style>
  