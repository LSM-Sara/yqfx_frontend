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
      <div @click="goTomodel">模型体验</div>
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
        default-active="0"
        text-color="#fff"
        @select="handleSelect"
      >
        <el-menu-item index="0">
          <span>ATEPC多任务学习模型</span>
        </el-menu-item>
        <el-menu-item index="1">
          <span>LEBERT词汇增强型模型</span>
        </el-menu-item>
        <el-menu-item index="2" disabled>
          <span>敬请期待</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
    <div class="display-box">
    <el-empty description="还没有输入" v-if="!empty"/>
    <div v-if="empty">
      <div v-for="(item, index) in dialogs" :key="index" class="list-item">
        <el-avatar class="el-avatar"> {{item.type}} </el-avatar>
        <p class="content">{{ item.text }}</p>
    </div>
    </div>
      <el-input 
        class="input-box" 
        v-model="input" 
        placeholder="请输入内容" 
        clearable    
      >
      <template #append>
        <el-button :loading="uploadable" @click="handleUpload">
          <img src="../assets/upload.svg" class="icon" v-show="!uploadable"/>
        </el-button>
      </template>
      </el-input>
    </div>
    
  </div>
  <Footer show-border />
</template>

<script>
import { defineComponent,ref,onMounted, handleError } from 'vue'
import router from '@/router'
import Chart from '@/components/Chart/chart.vue'
export default defineComponent({
  name: 'model',
  components: { Chart },
  setup() {
    const empty=ref(true);
    const input=ref('');
    const uploadable=ref(false);
    const dialogs=ref([]);
    let key=0;
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
    const handleSelect=(index, indexPath)=>{
      console.log(index, indexPath)
      key=index;
    }
    const fetchData = async () => {
      try {
        uploadable.value=false
        // 使用 Fetch API 发送异步请求
        const response = await fetch('https://your-api-endpoint.com/your-list-endpoint',{method:'post',
				body:JSON.stringify({
					'text':input.value,
          'model':key
				}),
				headers:{
					'Content-Type':'application/json'
				}
			})
			.then(data => {
        data=data.json();// 将服务器响应转换为 JSON 数据
        dialogs.value[dialogs.value.length - 1].text=data['text'] // 更新组件的数据
				return data;
			})
			.then(data =>{
				console.log(data);
			})
      .finally(data=>{
        uploadable.value=true
      })
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    const handleUpload=()=>{
      dialogs.value.push({type:'user',text:input.value})
      input.value='';
      dialogs.value.push({type:'model',text:''})
      fetchData();
    }
    return {
      empty,
      input,
      uploadable,
      dialogs,
      goToEsg,
      goToHome,
      goTomodel,
      handleSelect,
      handleUpload
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
  border-top: solid rgba(0, 0, 0, 0.1) 1px;
  width: 90vw;
  height:70vh;
  position: relative;
  .input-box{
    position: absolute;
    bottom: 20px;
    height:40px;
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
.icon {
  height: 15px;
  font-weight: 500;
}

.list-item{
  min-height: 10vh;
  width: 82vw;
  border-bottom: 0.5px rgba(0, 0, 0, 0.1) solid;
  padding: 10px;
  .el-avatar{
    margin-left: 1.5vw;
    margin-top: 0.5vh;
  }
  .content{
    margin-left: 5vw;
    margin-top: 1vh;
    min-height: 6vh;
  }
  
}
</style>
