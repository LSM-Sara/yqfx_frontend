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
      <div @click="goToEsgData">模型体验</div>
      <div>关于我们</div>
    </div>
    <div>
      <div class="class-title">构建原则</div>
      <div class="rules-box">
        <div class="rule-box">
          <img src="../assets/windcar.svg" class="icon" />
          <div class="rule-content">
            <div class="rule-title">中国特色</div>
            <div class="rule-text">
              引入反映本土特色的ESG指标，如乡村振兴、实体经济、区域协调发展等国家重点战略
            </div>
          </div>
        </div>
        <div class="rule-box">
          <img src="../assets/earth.svg" class="icon" />
          <div class="rule-content">
            <div class="rule-title">国际接轨</div>
            <div class="rule-text">吸纳全球达成共识的可持续发展议题和指标，对接SDGs</div>
          </div>
        </div>
        <div class="rule-box">
          <img src="../assets/unique.svg" class="icon" />
          <div class="rule-content">
            <div class="rule-title">行业聚焦</div>
            <div class="rule-text">
              重点关注银行业，提出并着重考虑与金融业高度关联的指标，特色鲜明
            </div>
          </div>
        </div>
        <div class="rule-box">
          <img src="../assets/secure.svg" class="icon" />
          <div class="rule-content">
            <div class="rule-title">实效保证</div>
            <div class="rule-text">
              从识别银行业ESG风险出发，选择并增加反映企业未来财务状况的指标权重
            </div>
          </div>
        </div>
        <div class="rule-box">
          <img src="../assets/hit.svg" class="icon" style="width: 29px; font-weight: 800px" />
          <div class="rule-content">
            <div class="rule-title">定期完善</div>
            <div class="rule-text">
              根据国内外金融业ESG发展情况，持续完善改进评级体系，优化评级效果
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="class-title">评价体系</div>
      <div class="rating">
        评级体系包括<span style="color: darkgreen">三个维度，18个一级指标，100余个二级指标</span>
      </div>
      <div class="esg">
        <div class="esg-container">
          <div class="esg-box">
            环境<br />
            ( E )
          </div>
          <div class="esg-content">
            <div class="esg-title">◇ 气候变化</div>
            <div class="esg-text">· 能源消耗</div>
            <div class="esg-text">· 纸张消耗</div>
            <div class="esg-text">· 水资源消耗</div>
          </div>
          <div class="esg-content">
            <div class="esg-title">◇ 绿色金融</div>
            <div class="esg-text">· 绿色贷款</div>
            <div class="esg-text">· 绿色债券</div>
            <div class="esg-text">· ESG理财</div>
          </div>
          <div class="esg-content">
            <div class="esg-title">◇ 排放管理</div>
            <div class="esg-text">· 温室气体排放</div>
            <div class="esg-text">· 废水排放</div>
            <div class="esg-text">· 有害废弃物排放</div>
          </div>
          <div class="esg-content">
            <div class="esg-title">◇ 节能减排</div>
            <div class="esg-text">· 绿色建筑</div>
            <div class="esg-text">· 绿色办公</div>
            <div class="esg-text">· 绿色采购</div>
          </div>
          <div class="esg-content">
            <div class="esg-title">◇ 气候风险管理</div>
            <div class="esg-text">· “双碳”战略实施</div>
            <div class="esg-text">· 绿色贷款风险评估情况</div>
          </div>
        </div>
        <div class="esg-container">
          <div class="esg-box" style="background-color: green">
            社会<br />
            ( S )
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: green">◇ 客户保护</div>
            <div class="esg-text">· 隐私与信息保护</div>
            <div class="esg-text">· 客户投诉率</div>
            <div class="esg-text">· 产品责任</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: green">◇ 供应链管理</div>
            <div class="esg-text">· 责任采购</div>
            <div class="esg-text">· 供应链风险</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: green">◇ 员工管理</div>
            <div class="esg-text">· 员工培训</div>
            <div class="esg-text">· 女性比例</div>
            <div class="esg-text">· 员工流失率</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: green">◇ 社区投资</div>
            <div class="esg-text">· 公益捐赠</div>
            <div class="esg-text">· 志愿服务</div>
            <div class="esg-text">· 基建投资</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: green">◇ 实体经济</div>
            <div class="esg-text">· 科创板融资规模</div>
            <div class="esg-text">· 创新创业公司债</div>
            <div class="esg-text">· 股权债权融资总额</div>
          </div>
        </div>
        <div class="esg-container">
          <div class="esg-box" style="background-color: rgb(0, 135, 0, 0.8)">
            治理<br />
            ( G )
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: rgb(0, 75, 0)">◇ 风险控制</div>
            <div class="esg-text">· 声誉管理</div>
            <div class="esg-text">· 不良贷款率</div>
            <div class="esg-text">· 拨备覆盖率</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: rgb(0, 75, 0)">◇ 董监高组成</div>
            <div class="esg-text">· 独立董事比例</div>
            <div class="esg-text">· 性别比例</div>
            <div class="esg-text">· 非执行董事比例</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: rgb(0, 75, 0)">◇ 股东管理</div>
            <div class="esg-text">· 高管薪酬</div>
            <div class="esg-text">· 奖金结构</div>
            <div class="esg-text">· “三会一层”结构</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: rgb(0, 75, 0)">◇ 内控合规</div>
            <div class="esg-text">· 反腐败</div>
            <div class="esg-text">· 反贿赂</div>
            <div class="esg-text">· 反洗钱</div>
          </div>
          <div class="esg-content">
            <div class="esg-title" style="color: rgb(0, 75, 0)">◇ 透明度与信息披露</div>
            <div class="esg-text">· ESG报告披露情况</div>
            <div class="esg-text">· 年度报告披露情况</div>
            <div class="esg-text">· 第三方认证</div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
  <Footer show-border />
</template>

<script>
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  name: 'Esg',
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
    return {
      goToEsg,
      goToHome,
      goToEsgData
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
.rules-box {
  display: grid;
  grid-template-columns: repeat(3, 26vw);
  gap: 10px;
  row-gap: 30px;
}
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.rule-title {
  font-size: 14px;
  font-weight: 600;
}
.icon {
  height: 30px;
  font-weight: 500;
}
.class-title {
  font-size: 18px;
  font-weight: 1000;
  line-height: 20px;
  height: 25px;
  margin: 30px;
  width: 80vw;
}
.rule-box {
  display: flex;
}
.rule-text {
  height: 5vh;
}
.rule-content {
  padding-left: 8px;
}
.rating {
  background-image: linear-gradient(to right, #bbdbb961, #ffffff);
  line-height: 35px;
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}
.esg {
  width: 100%;
}
.esg-container {
  background-color: rgb(245, 245, 245);
  height: 22vh;
  margin-bottom: 4vh;
  display: grid;
  grid-template-columns: repeat(7, 12vw);
  align-content: center;
  justify-content: center;
}
.esg-content:nth-last-child(1) {
  border: none;
}
.esg-content:nth-last-child(1) .esg-text {
  width: 11vw;
  margin-left: 16% !important;
}
.esg-content:nth-last-child(1) .esg-title {
  margin-left: 16% !important;
  width: 20vw;
}
.esg-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(122, 226, 122);
  color: white;
  height: 22vh;
  font-size: 18px;
  font-weight: 1000;
}
.esg-title {
  color: rgb(0, 183, 0);
  font-size: 16px;
  height: 4vh;
  font-weight: 600;
  margin-left: 22%;
}
.esg-text {
  font-size: 14px;
  font-weight: 500;
  height: 3vh;
  width: 7.5vw;
  margin-left: 22%;
}
.esg-content {
  border-right: #d0d0d0 solid 0.5px;
  height: 80%;
  padding-top: 10%;
  margin-top: 10%;
}
</style>
