<template>
  <div ref="refChart" class="word-cloud-box"></div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'
import * as Echarts from 'echarts'
import 'echarts-wordcloud'
import maskImagePath from '@/assets/images/mask-image.png'

export default defineComponent({
  name: 'WordCloud',
  props: {
    keywords: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props) {
    const refChart = ref(null)
    const chartInstance = ref(null)

    nextTick(() => {
      chartInstance.value = Echarts.init(refChart.value)
      const maskImage = new Image(4000,3500)
      function getColorBySentiment(sentiment) {
        if (sentiment === 'positive') {
          return 'rgb(0, 53, 0)';
        } 
        else if (sentiment === 'negative') {
          return 'rgb(136, 0, 0)';
        } 
        else {
          return 'gray';
        }
      }

      const options = {
        tooltip: {},
        series: [
          {
            type: 'wordCloud',
            sizeRange: [10, 80],
            rotationRange: [-90, 90],
            gridSize: 0,
            shape: 'pentagon',
            maskImage: maskImage,
            width: "80%",
            height: "80%",
            drawOutOfBound: false,
            layoutAnimation: true,
            keepAspect: true,
            textStyle: {
              fontWeight: 'bold',
              color: function (params) {
                  // 使用 getColorBySentiment 函数根据情感极性设置颜色
                  return getColorBySentiment(params.data.sentiment);
              }
            },
            emphasis: {
              textStyle: {
                    opacity: 0.7  // 设置 hover 时的透明度
                    
                }
            },
            data: props.keywords
          }
        ]
      }

      maskImage.onload = () => {
        chartInstance.value.setOption(options)
      }
      maskImage.src = maskImagePath
    })
    return {
      maskImagePath,
      refChart
    }
  }
})
</script>

<style lang="scss" scoped>
.word-cloud-box {
  width: 50vw;
  height: 70vh;
}
</style>
