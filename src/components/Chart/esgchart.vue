<template>
    <div class="header">
      <div>登陆/注册</div>
      <div>联系我们</div>
      <div>语言</div>
    </div>
    <div class="overview-box">
      <div class="title">
      <img src="../assets/logo.png" class="logo" />
      <div @click="goToHome">首页</div>
      <div @click="goToEsg">数据集分析</div>
      <div @click="goTomodel">模型体验</div>
      <div>关于我们</div>
    </div>
    </div>
    <div class="display-container">
      <div class="display-box">
        <Chart />
      </div>
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
      const goToEsg = () => {
        console.log('esg')
        router.push({
          path: '/esg'
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
      return {
        goToEsg,
        goToHome,
        goTomodel
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .overview-box {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .display-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  