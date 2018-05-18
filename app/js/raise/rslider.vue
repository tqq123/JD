<template>
  <panel title="金融头条" class="panel">
    <section class="content">
      <swiper :options="options">
        <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
        <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
      </swiper>
    </section>
  </panel>
</template>

<script>
  import Panel from '../core/panel.vue';
  import { swiper, swiperSlide } from "vue-awesome-swiper";

  export default {
    data() {
      return {
        options: {
          autoplay: true,
          loop: true,
          direction: 'vertical'
        }
      }
    },
    components: {
      Panel,
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss">
  .swiper-container-vertical {
    height: 72px;
    .swiper-slide {
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
      em {
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "../../css/element.scss";
  .panel {  
    @include panel;
    /deep/ h4 {
      display: none;
    }
    margin-top: 100px;
    .content {
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      padding-left: 178px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
    }
  }
</style>