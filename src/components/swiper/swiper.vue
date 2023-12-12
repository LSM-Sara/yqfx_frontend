<template>
  <div id="swipercom">
    <div id="swiperIndex" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, i) in imgs" :key="i" class="swiper-slide">
          <img :src="item.pic" alt="" class="img" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next" style="color: #fff"></div>
      <div class="swiper-button-prev" style="color: #fff"></div>
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/bundle'
import ImagePath from '@/assets/images/background.jpg'
import ImagePath2 from '@/assets/images/city.jpg'
import ImagePath3 from '@/assets/images/earth.jpg'
export default {
  name: 'Swiper',
  data() {
    return {
      imgs: [{ pic: ImagePath }, { pic: ImagePath2 }, { pic: ImagePath3 }]
    }
  },
  mounted() {
    const mySwiper = new Swiper('#swiperIndex', {
      //配置分页器内容

      loop: true, // 循环模式选项
      pagination: {
        el: '.swiper-pagination', //换页器与哪个标签关联
        clickable: true //分页器是否可以点击
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      //如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    })
  }
}
</script>

<style lang="less">
#swipercom {
  overflow: hidden;
  #swiperIndex.swiper-container {
    border-radius: 0.1rem;
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .swiper-slide img {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: #fff;
      height: 1vh;
      width: 1vh;
    }
    .swiper-pagination-bullet {
      height: 1vh;
      width: 1vh;
    }
  }
}
</style>
