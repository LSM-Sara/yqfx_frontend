<template>
  <div ref="refChart" class="word-cloud-box"></div>
</template>

<script>
import { defineComponent, nextTick, ref } from 'vue'
import * as Echarts from 'echarts'
import 'echarts-wordcloud'
import maskImagePath from '@/assets/images/E.png'

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
      const maskImage = new Image()

      const options = {
        tooltip: {},
        series: [
          {
            type: 'wordCloud',
            sizeRange: [6, 25],
            rotationRange: [-90, 90],
            gridSize: 0,
            shape: 'pentagon',
            maskImage: maskImage,
            drawOutOfBound: false,
            layoutAnimation: true,
            keepAspect: true,
            textStyle: {
              fontWeight: 'bold',
              color: function () {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 20),
                    Math.round(Math.random() * 50) + 100,
                    Math.round(Math.random() * 50) + 30
                  ].join(',') +
                  ')'
                )
              }
            },
            emphasis: {
              textStyle: {
                color: 'rgb(4, 82, 146)'
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
  width: 28vw;
  height: 50vh;
}
</style>
