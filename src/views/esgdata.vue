<template>
  <el-affix :offset="0">
    <div class="header">
    <div>登陆/注册</div>
    <div>联系我们</div>
    <div>语言</div>
  </div>
  </el-affix>
  <div class="overview-box">
    <div class="title">
      <img src="../assets/logo.png" class="logo" />
      <div @click="goToHome">首页</div>
      <div @click="goToEsg">数据集分析</div>
      <div @click="goToEsgData">模型体验</div>
      <div>关于我们</div>
    </div>
  </div>
  <div class="display-container">
    <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="nav"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
    <div class="display-box">
    <el-empty description="还没有输入" />
     <el-input class="input-box" v-model="input" placeholder="Please input" />
    </div>
    
  </div>
  <Footer show-border />
</template>

<script>
import { defineComponent } from 'vue'
import router from '@/router'
import Chart from '@/components/Chart/chart.vue'
export default defineComponent({
  name: 'EsgData',
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
    const goToEsgData = () => {
      console.log('esgdata')
      router.push({
        path: '/esgdata'
      })
    }
    const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
    return {
      goToEsg,
      goToHome,
      goToEsgData,
      handleOpen,
      handleClose
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
  background-color: white;
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
  height:70vh;
  position: relative;
  .input-box{
    position: absolute;
    bottom: 10px;
    width: 95%;
    left: 2%;
  }
}
.display-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav{
  width: 15vw;
  height: 70vh;
}
</style>
