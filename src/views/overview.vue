<template>
  <el-affix :offset="0">
    <header class="header">
      <div>登陆/注册</div>
      <div>联系我们</div>
      <div>语言</div>
    </header>
  </el-affix>
  <div class="overview-box">
    <el-affix :offset="30">
    <div class="title">
      <img
        src="https://www.whu.edu.cn/images/toplog1.png"
        class="logo"
      >
      <div @click="goToHome">
        首页
      </div>
      <div @click="goToChart">
        数据集分析
      </div>
      <div @click="goTomodel">
        模型体验
      </div>
      <div @click="goToAbout">
        关于我们
      </div>
    </div>
    </el-affix>
    <div class="main-title-container">
      <img
        class="background"
        :style="{ opacity: opacity }"
        src="../assets/images/china_all.png"
      >
      <div
        v-show="showTitle"
        class="main-title"
      >
        中美台三方媒体实体情感分析
      </div>
      <div
        v-show="showTitle"
        class="sub-title"
      >
        舆情分析结课实验
      </div>
    </div>
    <div class="data-container">
      <div v-show="!showTitle">
        <el-carousel
          height="400px"
          direction="vertical"
          type="card"
          :autoplay="true"
          class="news-pic-box"
        >
          <el-carousel-item
            v-for="item in 4"
            :key="item"
            class="news-pics"
            pause-on-hover
            style="background-color:#00000042"
          >
            <el-image
              :src="url[item]"
              fit="fill"
              style="width: 99.7%; height: 99.2%;"
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="side-box">
        <div class="discribsion">
          <div v-show="!showTitle">
            <span><i>从中台</i></span>
            <span><i>4</i></span>
            <span><i>家媒体中</i></span>
          </div>
          <div v-show="!showTitle">
            <span><i>获取</i></span>
            <span><i>31243条</i></span>
            <span><i>数据</i></span>
          </div>
        </div>
        <div class="chart-box">
          <div
            v-show="!showTitle"
            id="newsLine"
          ></div>
        </div>
      </div>
    </div>

    <div class="box-container">
      <WordCloud :keywords="keyWordsList" v-if="showWordCloud"/>
      <div class="worcloud-dis-box">
        <div class="discribsion">
          <div v-show="showWordCloud">
            <span><i>从中提取出实体</i></span>
            <span><i>4880个</i></span>
          </div>
          <div v-show="showWordCloud">
            <span><i style="color:rgb(0, 53, 0);font-weight:bold;font-size:35px">正面实体</i></span>&nbsp;
            <span><i style="color:rgb(136, 0, 0);font-weight:bold;font-size:35px">负面实体 </i></span>&nbsp;
            <span><i style="color:gray;font-weight:bold;font-size:35px">中立实体</i></span>&nbsp;
            <span><i>分别有2775、1378、729个</i></span>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="subtitle">
        中美台关系媒体关注事件TOP3
      </div>
      <div class="card-container">
        <div class="card">
          <img
            class="news-pic"
            src="../assets/images/1.jpeg"
          >
          <div class="icon-box">
            <img
              class="icon"
              src="../assets/news.svg"
            >
            <div>新闻</div>
          </div>
          <div class="card-title">
            国际社会强烈谴责佩洛西窜访中国台湾地区
          </div>
          <div class="news-time">
            2022年, 8月4日 人民日报
          </div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a
                href="http://world.people.com.cn/n1/2022/0804/c1002-32493777.html"
                class="href"
              >了解更多</a>
            </div>
          </div>
        </div>
        <div class="card">
          <img
            class="news-pic"
            src="../assets/images/2.jpg"
          >
          <div class="icon-box">
            <img
              class="icon"
              src="../assets/news.svg"
            >
            <div>新闻</div>
          </div>
          <div class="card-title">
            国台办：坚持“九二共识”、反对“台独”才是通往美好未来的康庄大道
          </div>
          <div class="news-time">
            2023年, 11月29日 中国新闻网
          </div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a
                href="http://www.news.cn/tw/2023-11/29/c_1129999452.htm"
                class="href"
              >了解更多</a>
            </div>
          </div>
        </div>
        <div class="card">
          <img
            class="news-pic"
            src="../assets/images/3.jpg"
          >
          <div class="icon-box">
            <img
              class="icon"
              src="../assets/news.svg"
            >
            <div>新闻</div>
          </div>
          <div class="card-title">
            中评智库》美对台政策民意变化影响
          </div>
          <div class="news-time">
            2023年, 11月15日 中国日报
          </div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a
                href="https://www.chinatimes.com/opinion/20231115000015-262110?chdtv"
                class="href"
              >了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistics">
      <div class="subtitle">
        新闻实体立场统计
      </div>
      <div class="charts-box">
        <div class="circle-charts-box">
        <div id="chart1"></div>
        <div id="chart2"></div>
        <div id="chart3"></div>
        <div id="chart4"></div>
        <div id="chart5"></div>
      </div>
      </div>
    </div>
    <div class="goto-model" @click="goTomodel">意犹未尽？点此即刻体验！>>></div>
    <Footer show-border />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import WordCloud from '@/components/WordCloud/Word_cloud.vue'
import * as echarts from 'echarts'
import router from '@/router'
import { wordCloudData } from '@/data/cloud'

export default defineComponent({
  name: 'Overview',
  components: {
    WordCloud
  },
  setup () {
    const keyWordsList = ref([])
    const showTitle=ref(true)
    const opacity = ref(0.6)
    const showWordCloud=ref(false)
    const url = ref(['','https://s2.loli.net/2023/12/13/IGrbqcgJ8kKCUAo.jpg','https://s2.loli.net/2023/12/13/c4x2lC8VjmbK6o9.png','https://s2.loli.net/2023/12/13/gwNmVnyDBAfSrYP.png','https://s2.loli.net/2023/12/13/QOqVPBrvAym3WkR.png'])
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
    keyWordsList.value = wordCloudData.slice(0, 500)
    onMounted(() => {
      // 监听滚动事件
      window.addEventListener('scroll', handleScroll)

      // 在组件销毁时移除滚动事件监听
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    })
    // 处理滚动事件的函数
    const handleScroll = () => {
      // 获取滚动的垂直偏移量
      const scrollY = window.scrollY || window.pageYOffset

      // 计算透明度，根据实际需求调整
      opacity.value = 0.6 - scrollY / 500 // 500 是滚动的偏移量，可以根据需要调整
      if(scrollY>=360) showTitle.value=false
      if(scrollY<360) showTitle.value=true
    if(scrollY>900) {
      showWordCloud.value=true
      showTitle.value=true
    }
      if(scrollY<900){
        showWordCloud.value=false
      } 
    }
    return {
      keyWordsList,
      opacity,
      showTitle,
      showWordCloud,
      url,
      goToChart,
      goToHome,
      goTomodel,
      goToAbout
    }
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('chart1'))
    const myChart2 = echarts.init(document.getElementById('chart2'))
    const myChart3 = echarts.init(document.getElementById('chart3'))
    const myChart4 = echarts.init(document.getElementById('chart4'))
    const myChart5 = echarts.init(document.getElementById('chart5'))
    const newsLineChart= echarts.init(document.getElementById('newsLine'))

    const option = {
      legend: {
        // 位置设置在右侧
        right: '0%',
        bottom:"-7%"
    },
      title: {
        text: '{b|频率前十实体}',
        subtext: '{a|词频分析}',
        subtextStyle: {
          rich: {
            a: {
              fontSize: '20'
            }
          }
        },
        textStyle: {
          rich: {
            b: {
              fontSize: '26'
            }
          }
        },
        left: 'center',
        top: '45%'
      },
      tooltip: {},
      series: [
        {
          name: '实体频率',
          type: 'pie', //环形图的type和饼图相同
          radius: ['50%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#85dbe1', '#258bbc','#7aa9e6','#34b8be','#2da2bf','#afe5e9','#cde3d9','#6ea39f','#349f9c','#cddff0'],
          label: {
            show: true,
            position: 'inside',
            color:'#fff',
            formatter: '{c}',
            emphasis: {
              //选中时候的样式
              show: true
            }
          }, //提示文字
          labelLine: {
              show: true,
          },
          data: [
            { value: 2881, name: '台湾' },
            { value: 2500, name: '美国' },
            { value: 1261, name: '中国' },
            { value: 1229, name: '大陆' },
            { value: 1034, name: '中国大陆' },
            { value: 486, name: '民进党当局' },
            { value: 393, name: '两岸同胞' },
            { value: 369, name: '一个中国原则' },
            { value: 343, name: '民进党' },
            { value: 301, name: '美方' }
          ]
        }
      ]
    }
    const option1 = {
      legend: {
        orient: 'vertical',
        right: '15%',
    },
      title: {
        text: '{b|不同情感}',
        subtext: '{a|立场分布}',
        subtextStyle: {
          rich: {
            a: {
              fontSize: '16'
            }
          }
        },
        textStyle: {
          rich: {
            b: {
              fontSize: '26'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: '情感频率',
          type: 'pie', //环形图的type和饼图相同
          radius: ['50%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['rgb(0, 53, 0,0.5)','#cccccc', 'rgb(136, 0, 0,0.5)'],
          label: {
            show: true,
            position: 'inside',
            color:'#fff',
            formatter: '{c}',
            emphasis: {
              //选中时候的样式
              show: true
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 2775, name: 'positive' },
            { value: 729, name: 'neutral' },
            { value: 1378, name: 'negative' }
          ]
        }
      ]
    }
    const option2 = {
      title: {
        text: '{b|台湾}',
        subtext: '{a|情感分析}',
        subtextStyle: {
          rich: {
            a: {
              fontSize: '16'
            }
          }
        },
        textStyle: {
          rich: {
            b: {
              fontSize: '26'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: '情感频率',
          type: 'pie', //环形图的type和饼图相同
          radius: ['50%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#85dbe1', '#258bbc','#7aa9e6'],
          label: {
            show: true,
            position: 'inside',
            color:'#fff',
            formatter: '{c}',
            emphasis: {
              //选中时候的样式
              show: true
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 328, name: 'positive' },
            { value: 1641, name: 'neutral' },
            { value: 939, name: 'negative' }
          ]
        }
      ]
    }
    const option3 = {
      title: {
        text: '{b|美国}',
        subtext: '{a|情感分析}',
        subtextStyle: {
          rich: {
            a: {
              fontSize: '16'
            }
          }
        },
        textStyle: {
          rich: {
            b: {
              fontSize: '26'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: '情感频率',
          type: 'pie', //环形图的type和饼图相同
          radius: ['50%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#34b8be','#2da2bf','#afe5e9'],
          label: {
            show: true,
            position: 'inside',
            color:'#fff',
            formatter: '{c}',
            emphasis: {
              //选中时候的样式
              show: true
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 328, name: 'positive' },
            { value: 76, name: 'neutral' },
            { value: 2402, name: 'negative' }
          ]
        }
      ]
    }
    const option4 = {
      title: {
        text: '{b|中国}',
        subtext: '{a|情感分析}',
        subtextStyle: {
          rich: {
            a: {
              fontSize: '16'
            }
          }
        },
        textStyle: {
          rich: {
            b: {
              fontSize: '26'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: '情感频率',
          type: 'pie', //环形图的type和饼图相同
          radius: ['50%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#6ea39f','#349f9c','#cddff0'],
          label: {
            show: true,
            position: 'inside',
            color:'#fff',
            formatter: '{c}',
            emphasis: {
              //选中时候的样式
              show: true
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 1252, name: 'positive' },
            { value: 6, name: 'neutral' },
            { value: 3, name: 'negative' }
          ]
        }
      ]
    }
    const newsOption = {
      grid: [
        {
          left: 0,
          top: 40,
          right: 40,
          bottom: 40,
          containLabel: true
        }
      ],
      yAxis: {
        data: ['TVB','新华网','中国日报','中国新闻网'],
        axisTick: {show: false}
      },
      xAxis: {
        splitLine: {show: false},
        axisLabel: {show:false}
      },
      series: [
        {
          type: 'bar',
          data: [5476, 7785 , 9946 ,8036],
          label: {
            show: true,
            position: 'right', //数值展示的位置
            textStyle: {
              color: '#000',
              fontSize: 13
            }
          },
          itemStyle: {
            color: {
              type: 'linear',
              x: 1, // 右
              y: 0, // 下
              x2: 0, // 左
              y2: 0, // 上
              colorStops: [
                {
                  offset: 0,
                  color: ' rgb(0, 36, 82,0.8)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: ' rgb(110, 128, 150)' // 90% 处的颜色
                }
              ]
            }
          }
        }
      ]
    }

    newsLineChart.setOption(newsOption)
    myChart5.setOption(option4)
    myChart4.setOption(option3)
    myChart3.setOption(option2)
    myChart2.setOption(option1)
    myChart.setOption(option)
  }
})
</script>

<style lang="scss" scoped>
@font-face{
 font-family: REEJI-CHAO-RanSerifGB-Flash;
 src:url("./assets/font/潮字社国风冉宋简-闪(REEJI-CHAO-RANSERIFGB-FLASH).TTF");
}

@keyframes fadeIn {
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
}

@keyframes swift-up {
   to {
   top: 0rem;
   }
 }


.overview-box {
 display: flex;
 flex-direction: column;
 align-items: center;
 .box-container {
   display: flex;
   flex: 1;
   margin: 0 auto;
   overflow: hidden !important;
   height: 100vh !important;
   position: relative;
   margin-bottom: 15vh;
 }
 .title {
   height: 15vh;
   width: 100vw;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   font-size: 18px;
   position: relative;
   padding-left: 10vw;
   background-color: white;
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
 position: sticky;
}
.logo {
 height: 10vh;
 position: absolute;
 left: 15px;
}
.news {
 height: 50vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin: 0;
 padding: 0;
 margin-bottom: 50px;
}
.subtitle {
  font-family: REEJI-CHAO-RanSerifGB-Flash;
 font-size: 35px;
 font-weight: 500;
 margin-bottom: 20px;
}
.news-pic {
 width: 20vw;
 height: 16vh;
}
.card {
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 1px solid rgba(128, 128, 128, 0.1);
 padding-top: 20px;
 padding-bottom: 20px;
}
.card-title {
 font-size: 20px;
 margin-top: 10px;
 font-weight: 700;
 width: 20vw;
 height: 7vh;
 margin-bottom: 10px;
}
.news-time {
 font-size: 15px;
 color: darkgray;
 margin-top: 20px;
 font-weight: 500;
 width: 20vw;
 font-style: italic;
}
.card-container {
 margin-top: 10px;
 width: 70vw;
 display: grid;
 grid-template-columns: repeat(3, 22vw);
 gap: 2vw;
}
.icon {
 width: 30px;
 height: 22px;
}
.icon-box {
 display: flex;
 width: 20vw;
 align-items: center;
 color: #8a8a8a;
 font-weight: 800;
 margin-top: 20px;
 font-size: 14px;
}
.learn-more {
 margin-top: 20px;
 height: 35px;
 line-height: 35px;
 color: white;
 width: 80px;
 text-align: center;
 font-weight: 800;
 background-color: rgba(0, 0, 178, 0.872);
}
.learn-more-box {
 width: 20vw;
}
.charts-box{
  display: flex;
  width: 95vw;
  align-items: center;
  justify-content: center;
.circle-charts-box {
 width: 60vw;
 height:55vh;
 display: grid;
 grid-template-rows: 8fr 7fr;
 grid-template-columns: 1fr 1fr 1fr 1.5fr 1.5fr 1.5fr;
 grid-template-areas: "a b b b"
                      "a c d d";
 div:nth-of-type(1){
  width: 27vw;
  height: 50vh;
  grid-area: 1/1/3/3;
 }
 div:nth-of-type(2){
  width: 36vw;
  height: 30vh;
  grid-area: 1/3/3/6;
  margin-top:5vh;
 }
 div:nth-of-type(3){
  width: 12vw;
  height: 25vh;
  grid-area: 2/3/4/4;
 }
 div:nth-of-type(4){
  width: 12vw;
  height: 25vh;
  grid-area: 2/4/4/5;
 }
 div:nth-of-type(5){
  width: 12vw;
  height: 25vh;
  grid-area: 2/5/4/6;
 }
 
}
}
.statistics {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 50px;
 margin-top:20vh;
}
.title div:hover {
 cursor: pointer;
 user-select: none;
}
.href {
 text-decoration: none;
 color: white;
}
.main-title-container{
 font-family:  REEJI-CHAO-RanSerifGB-Flash;
 height:70vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 overflow: hidden;

 @keyframes fadeIn{
   0% {
     background-position-x: 100%;
   }
   50% {
     background-position-x: 50%;
   }
 100% {
   background-position-x:0%;
 }
 }
 .main-title{
   font-size:6.2rem;
   margin-bottom: 2rem;
   background-image: linear-gradient(75deg, rgb(0, 0, 0, 0.8) 0%, rgb(0, 0, 0, 0.8) 33.33%, rgba(0, 0, 0, 0) 66.67%, rgba(0, 0, 0, 0) 100%);
   background-size: 300% 100%;
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   animation: fadeIn 3.5s 0.5s ease-in-out 1;
 }
 .sub-title{
   font-size:2rem;
   background-image: linear-gradient(75deg, rgb(0, 0, 0, 0.8) 0%, rgb(0, 0, 0, 0.8) 33.33%, rgba(0, 0, 0, 0) 66.67%, rgba(0, 0, 0, 0) 100%);
   background-size: 300% 100%;
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   animation: fadeIn 3s  1s ease-in-out 1;
 }
 .background{
   position: absolute;
   height: 90%;
   top:10%;
   z-index: -100;
   opacity: 0.6;
 }
}
.discribsion{
   font-size: 2rem;
   font-family:  REEJI-CHAO-RanSerifGB-Flash;
   align-self: flex-start;
   width: 36vw;
   height:22vh;
   margin-left: 5vw;
   margin-top: 4vh;
   color: black;
   span {
   display: inline-block;
   overflow: hidden;
   position: relative;
   top: .8rem;
   animation: .3s swift-up ease-in-out forwards;
   }
   i {
   font-style: normal;
   position: relative;
   top: 4.2rem;
   animation: .5s swift-up ease-in-out forwards;
   }

   span:nth-of-type(1) i {
   animation-delay: 0s;
   }

   span:nth-of-type(2) i {
     animation-delay: .1s;
   }
   span:nth-of-type(3) i {
     animation-delay: .2s;
   }
   span:nth-of-type(4) i {
     animation-delay: .3s;
   }
   span:nth-of-type(5) i {
     animation-delay: .4s;
   }

span:nth-of-type(6) i {
 animation-delay: .5s;
}

span:nth-of-type(1) {
 animation-delay: 0s;
}

span:nth-of-type(2) {
 animation-delay: .1s;
}

span:nth-of-type(3) {
 animation-delay: .2s;
}

span:nth-of-type(4) {
 animation-delay: .3s;
}

   span:nth-of-type(5) {
 animation-delay: .4s;
   }

   span:nth-of-type(6) {
     animation-delay: .5s;
   }
 }
.data-container{
 margin-top: 8vh;
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: space-around;
 .side-box{
   height: 65vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   span:nth-of-type(2) i {
     animation-delay: .1s;
     font-size: 4.2rem;
     background-image: linear-gradient(to right, rgb(0, 36, 82), rgb(110, 128, 150));
     background-clip: text;
     -webkit-background-clip: text;
     color: transparent;
     font-weight: bold;
   }
   span:nth-of-type(5) i {
     animation-delay: .4s;
     font-size: 4.2rem;
     background-image: linear-gradient(to right, rgb(0, 36, 82), rgb(110, 128, 150));
     background-clip: text;
     -webkit-background-clip: text;
     color: transparent;
     font-weight: bold;
   }
 .chart-box{
   width: 32vw;
   div{
     width: 32vw;
     height:30vh;
   }
 }
 }
 .news-pic-box{
   width: 40vw;
   .news-pics{
     height: 21vh;
   }
 }
}
.worcloud-dis-box{
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.goto-model{
  text-decoration: underline;
  font-size: 1.2rem;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
