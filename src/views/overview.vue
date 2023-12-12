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
      <div>ESG责任投资</div>
      <div style="position: relative" @click="goToEsg">ESG数据</div>
      <div>研究与洞见</div>
      <div>关于我们</div>
    </div>

    <div class="main-title-container">
      <img class="background" src="../assets/images/china_all.png" />
        <div class="main-title">中美台三方媒体实体情感分析</div>
      <div class="sub-title">舆情分析第x组结课实验</div>
    </div>


    <div class="box-container">
      <WordCloud :keywords="keyWordsList" />
    </div>
    <div class="news">
      <div class="subtitle">近期新闻与研究</div>
      <div class="card-container">
        <div class="card">
          <img class="news-pic" src="../assets/report.JPG" />
          <div class="icon-box">
            <img class="icon" src="../assets/report.svg" />
            <div>报告</div>
          </div>
          <div class="card-title">2023 ESG白皮书：可持续消费不能通过“道德绑架”实现</div>
          <div class="news-time">2023年, 4月11日 周东旭</div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a href="https://www.caixin.com/2023-04-11/102017587.html" class="href">了解更多</a>
            </div>
          </div>
        </div>
        <div class="card">
          <img class="news-pic" src="../assets/news1.JPG" />
          <div class="icon-box">
            <img class="icon" src="../assets/news.svg" />
            <div>新闻</div>
          </div>
          <div class="card-title">“京”诚相伴 共创美好生活——北京银行发布2022年社会责任暨ESG报告</div>
          <div class="news-time">2023年, 4月10日 财经报道网</div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a href="https://finance.stockstar.com/IG2023041000013865.shtml" class="href"
                >了解更多</a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <img
            class="news-pic"
            src="https://n.sinaimg.cn/spider20230331/89/w1080h609/20230331/c7c4-c0ef3705f80974243a9e0326db4abf3c.png"
          />
          <div class="icon-box">
            <img class="icon" src="../assets/news.svg" />
            <div>新闻</div>
          </div>
          <div class="card-title">ESG洞见 | 硅谷银行倒闭和瑞信危机，从ESG角度我们能学到什么？</div>
          <div class="news-time">2023年, 03月31日 市场资讯</div>
          <div class="learn-more-box">
            <div class="learn-more">
              <a
                href="https://finance.sina.com.cn/esg/2023-03-31/doc-imynuhay7619976.shtml"
                class="href"
                >了解更多</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="statistics">
      <div class="subtitle">ESG数据</div>
      <div class="circle-charts-box">
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
    <div class="clients-box">
      <div class="subtitle">我们的客户</div>
      <div class="clients-grid">
        <div class="box">
          <div class="name">政府</div>
          <div class="text">
            ESG评级反映企业环保、社会责任和治理的状况，可以为政策制定提供参考，有效助力银行业发展.
          </div>
          <div class="button">政府</div>
        </div>
        <div class="box">
          <div class="name">企业</div>
          <div class="text">
            ESG评级可以帮助银行业发现和改进自身短板，提高整体表现和绩效，提升自身的品牌价值和社会形象。
          </div>
          <div class="button">企业</div>
        </div>
        <div class="box">
          <div class="name">投资者</div>
          <div class="text">
            ESG评级可以评估银行业的长期价值和可持续性，为其投资决策提供更加科学的依据。
          </div>
          <div class="button">投资者</div>
        </div>
      </div>
    </div>
    <Footer show-border />
  </div>
</template>

<script>
import { defineComponent, ref, onMounted  } from 'vue'
import WordCloud from '@/components/Chart/Word_cloud.vue'
import * as echarts from 'echarts'
import router from '@/router'
import { wordCloudData }  from '@/data/cloud'

export default defineComponent({
  name: 'Overview',
  components: {
    WordCloud
  },
  setup() {
    const keyWordsList = ref([])
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
    keyWordsList.value = wordCloudData
    onMounted(() => {
    });
    return {
      keyWordsList,
      goToEsg,
      goToHome,
      goToEsgData
    }
  },
  mounted() {
    const myChart = echarts.init(document.getElementById('chart1'))
    const myChart2 = echarts.init(document.getElementById('chart2'))
    const myChart3 = echarts.init(document.getElementById('chart3'))
    const myChart4 = echarts.init(document.getElementById('chart4'))
    const lineChart = echarts.init(document.getElementById('line'))
    const barChart = echarts.init(document.getElementById('bar'))

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
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s; /* 过渡时间，可以根据需要调整 */
}
.fade-enter {
  opacity: 0;
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
  .rolling {
    width: 99vw !important;
    height: 70vh !important;
    overflow: hidden;
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
.search-box {
  width: 99vw;
  height: 5.2vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1vh;
  border: rgba(128, 128, 128, 0.497) solid 1px;
  border-radius: 5px;
}
.input {
  height: 5vh;
  width: 95vw;
}
.search-button {
  border-radius: 5px;
  height: 5vh;
  width: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5vw;
}
.search {
  height: 3vh;
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
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px;
}
.clients-box {
  width: 100vw;
  height: auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
}
.clients-grid {
  width: 66vw;
  display: grid;
  grid-template-columns: repeat(3, 22vw);
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.clients-grid .box {
  height: 30vh;
  width: 22vw;
  background-color: rgb(0, 32, 63);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.name {
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
}
.text {
  width: 17vw;
  height: 5.2vh;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  font-weight: 450;
}
.button {
  background-color: rgb(1, 1, 209);
  padding: 10px;
  border-radius: 5px;
  font-weight: 550;
  font-size: 16px;
  margin-top: 20px;
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
}
.news-time {
  font-size: 15px;
  color: darkgray;
  margin-top: 15px;
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
  display: flex;
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
.list {
  position: absolute;
  top: 30px;
  left: 0;
  width: 150%;
  height: 85px;
  font-size: 14px;
  line-height: 30px;
  padding-top: 5px;
  margin-top: 5px;
  background-color: white;
  z-index: 100;
  padding-left: 5px;
  box-shadow:
    2.8px 2.8px 2.2px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
.input-list {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 85px;
  font-size: 14px;
  line-height: 30px;
  padding-top: 5px;
  margin-top: 5px;
  background-color: white;
  z-index: 100;
  padding-left: 5px;
  box-shadow:
    2.8px 2.8px 2.2px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
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
  .main-title{
    font-size:6.2rem;
    margin-bottom: 2rem;
    background-image: linear-gradient(75deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 33.33%, rgba(0, 0, 0, 0) 66.67%, rgba(0, 0, 0, 0) 100%);
    background-size: 300% 100%;
    background-position-x: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: 2s background-position-x ease-in-out;
  }
  .main-title:hover{
    cursor: pointer;
    background-position-x:0%;
  }
  .sub-title{
    font-size:2rem;
    color:rgba(0, 0, 0, 0.683);
  }
  .background{
    position: absolute;
    height: 90%;
    top:10%;
    z-index: -100;
    opacity: 0.6;
  }
}
</style>
