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
      <img
        src="../assets/logo.png"
        class="logo"
      >
      <div @click="goToHome">
        首页
      </div>
      <div @click="goToEsg">
        数据集分析
      </div>
      <div @click="goTomodel">
        模型体验
      </div>
      <div>关于我们</div>
    </div>

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
        舆情分析第x组结课实验
      </div>
    </div>
    <div class="data-container">
      <div>
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
      <div id="side-box">
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
      <WordCloud :keywords="keyWordsList" />
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
        新闻实体立场信息
      </div>
      <div class="circle-charts-box">
        <div id="chart_all"></div>
        <div id="chart1"></div>
        <div id="chart4"></div>
        <div id="chart3"></div>
        <div id="chart2"></div>
      </div>
      <div class="line-charts-box">
        <div id="line"></div>
        <div id="bar"></div>
      </div>
    </div>

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
    const url = ref(['','https://s2.loli.net/2023/12/13/IGrbqcgJ8kKCUAo.jpg','https://s2.loli.net/2023/12/13/c4x2lC8VjmbK6o9.png','https://s2.loli.net/2023/12/13/gwNmVnyDBAfSrYP.png','https://s2.loli.net/2023/12/13/QOqVPBrvAym3WkR.png'])
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
    keyWordsList.value = wordCloudData
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
      if(scrollY>=350) showTitle.value=false
      if(scrollY<350) showTitle.value=true
    }
    return {
      keyWordsList,
      opacity,
      showTitle,
      url,
      goToEsg,
      goToHome,
      goTomodel
    }
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('chart1'))
    const myChart2 = echarts.init(document.getElementById('chart2'))
    const myChart3 = echarts.init(document.getElementById('chart3'))
    const myChart4 = echarts.init(document.getElementById('chart4'))
    const lineChart = echarts.init(document.getElementById('line'))
    const barChart = echarts.init(document.getElementById('bar'))
    const newsLineChart= echarts.init(document.getElementById('newsLine'))

    const option = {
      title: {
        text: '{b|6.55 }',
        subtext: '{a|国有银行平均得分}',
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
              fontSize: '30'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: 'ESG分数',
          type: 'pie', //环形图的type和饼图相同
          radius: ['60%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#eeeeee', '#a00b09'],
          label: {
            normal: {
              //正常的样式
              show: false
            },
            emphasis: {
              //选中时候的样式
              show: false
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 3.45, name: '' },
            { value: 6.55, name: '国有银行平均得分' }
          ]
        }
      ]
    }
    const option1 = {
      title: {
        text: '{b|6.30}',
        subtext: '{a|农村商业银行平均得分}',
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
              fontSize: '30'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: 'ESG分数',
          type: 'pie', //环形图的type和饼图相同
          radius: ['60%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#eeeeee', '#69d139'],
          label: {
            normal: {
              //正常的样式
              show: false
            },
            emphasis: {
              //选中时候的样式
              show: false
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 3.7, name: '' },
            { value: 6.3, name: '农村商业银行平均得分' }
          ]
        }
      ]
    }
    const option2 = {
      title: {
        text: '{b|5.39}',
        subtext: '{a|城市商业银行平均得分}',
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
              fontSize: '30'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: 'ESG分数',
          type: 'pie', //环形图的type和饼图相同
          radius: ['60%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#eeeeee', '#AFF6FF'],
          label: {
            normal: {
              //正常的样式
              show: false
            },
            emphasis: {
              //选中时候的样式
              show: false
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 4.61, name: '' },
            { value: 5.39, name: '城市商业银行平均得分' }
          ]
        }
      ]
    }
    const option3 = {
      title: {
        text: '{b|5.52}',
        subtext: '{a|股份制银行平均得分}',
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
              fontSize: '30'
            }
          }
        },
        left: 'center',
        top: '38%'
      },
      tooltip: {},
      series: [
        {
          name: 'ESG分数',
          type: 'pie', //环形图的type和饼图相同
          radius: ['60%', '80%'], //饼图的半径，第一个为内半径，第二个为外半径
          avoidLabelOverlap: false,
          color: ['#eeeeee', '#F9D858'],
          label: {
            normal: {
              //正常的样式
              show: false
            },
            emphasis: {
              //选中时候的样式
              show: false
            }
          }, //提示文字
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 4.48, name: '' },
            { value: 5.52, name: '股份制银行平均得分' }
          ]
        }
      ]
    }

    const color = '#5470C6'
    const option4 = {
      title: {
        text: '中国金融业ESG表现',
        textStyle: {
          fontSize: '24',
          color: '#606060'
        },
        left: 'center',
        top: '30'
      },
      color: color,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['多元金融', '银行'],
        top: 40,
        right: 80
      },
      grid: {
        top: 70,
        bottom: 50
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: color
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  'USD/PRICE  ' +
                 params.value +
                 (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                )
              }
            }
          },
          data: ['2018', '2019', '2020', '2021', '2022', '2023']
        }
      ],
      yAxis: [
        {
          type: 'value',
          max: 7,
          min: 5
        }
      ],
      series: [
        {
          name: '银行',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [5.76, 5.7, 5.63, 6.27, 6.01, 6.52],
          itemStyle: {
            normal: {
              color: '#AAE708', //改变折线点的颜色
              lineStyle: {
                color: '#AAE708' //改变折线颜色
              }
            }
          }
        },
        {
          name: '多元金融',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: [5.9, 5.94, 6.01, 6, 6.14, 6.22]
        }
      ]
    }
    const option5 = {
      title: {
        text: 'ESG评分前五银行',
        textStyle: {
          fontSize: '20',
          color: '#606060',
          lineHeight: '30'
        },
        left: 'center',
        top: '30'
      },
      yAxis: {
        type: 'category',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#9BA1B5'
          }
        },
        axisTick: {
          show: false
        },
        data: ['平安银行', '兴业银行', '农业银行', '渝农银行', '招商银行']
      },
      xAxis: {
        type: 'value',
        max: 10,
        axisLine: {
          lineStyle: {
            color: '#9BA1B5'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      grid: {
        // 控制Y轴到柱的距离
        left: 60,
        bottom: 52
      },
      series: [
        {
          type: 'bar',
          barWidth: 43,
          barGap: '10%',
          stack: '1',
          itemStyle: {
            color: '#88c383'
          },
          data: [1.68, 2.64, 2.82, 2.67, 2.07],
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          barWidth: 43,
          barGap: '10%',
          stack: '1',
          itemStyle: {
            color: '#9dd4e3'
          },
          data: [2.0, 1.77, 1.63, 1.95, 1.97],
          emphasis: {
            focus: 'series'
          }
        },
        {
          type: 'bar',
          barWidth: 43,
          barGap: '10%',
          stack: '1',
          itemStyle: {
            color: '#ffdc7f'
          },
          data: [3, 2.31, 2.31, 2.24, 3.2],
          emphasis: {
            focus: 'series'
          }
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
    barChart.setOption(option5)
    lineChart.setOption(option4)
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
.circle-charts-box {
 width: 80vw;
 display: grid;
 
}
.circle-charts-box div {
 width: 27vw;
 height: 35vh;
}
.statistics {
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 50px;
 margin-top:20vh;
}
.line-charts-box {
 width: 80vw;
 height: 55vh;
 display: flex;
}
.line-charts-box :nth-child(1) {
 width: 48vw;
 height: 55vh;
}
.line-charts-box :nth-child(2) {
 width: 32vw;
 height: 55vh;
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
.el-carousel__item h3 {
 color: #475669;
 opacity: 0.75;
 line-height: 200px;
 margin: 0;
 text-align: center;
}

.el-carousel__item:nth-child(2n) {
 background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
 background-color: #d3dce6;
}
.data-container{
 margin-top: 8vh;
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: space-around;
 #side-box{
   height: 65vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   .discribsion{
   font-size: 2rem;
   font-family:  REEJI-CHAO-RanSerifGB-Flash;
   align-self: flex-start;
   width: 35vw;
   height:20vh;
   margin-left: 5vw;
   margin-bottom: 2vh;
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
     font-size: 4.2rem;
     background-image: linear-gradient(to right, rgb(0, 36, 82), rgb(110, 128, 150));
     background-clip: text;
     -webkit-background-clip: text;
     color: transparent;
     font-weight: bold;
   }
   span:nth-of-type(3) i {
     animation-delay: .2s;
   }
   span:nth-of-type(4) i {
     animation-delay: .3s;
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
</style>
