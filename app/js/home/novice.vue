<template lang="html">
  <panel title="新手特权">
    <section class="content">
      <div class="item">
        <h4>下载APP<span class="red">送888元礼包</span></h4>
        <p>新手专项</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
      </div>
      <div class="item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4 class="red">领128元新手礼包</h4>
            <p>立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
            <h4>打白条<span class="red">享免息</span></h4>
            <p>立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components: {
      Panel
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/element.scss';
  .panel {
    @include panel;
    /deep/ .title {
      border-bottom: 1px solid #ddd;
    }
    .content {
      @include list(row);
      .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
          padding: 32px 20px;
          text-align: center;
          img {
            width: 132px;
            height: 132px;
            margin: 20px auto 0;
          }
          border-right: 1px solid #ddd;
        }
        h4 {
          font-size: 26px;
          line-height: 40px;
        }
        .red {
          color: #f00;
        }
        p {
          font-size: 24px;
          color: #999;
          margin-top: 6px;
        }
        ul {
          width: 100%;
          li {
            width: 100%;
            height: 144px;
            padding: 32px 28px;
            box-sizing: border-box;
            img {
              width: 80px;
              height: 80px;
              float: right;
            }
            h4 {
              overflow: hidden;
              @include nowrap;
            }
            &:first-child {
              border-bottom: 1px solid #ddd;
            }
          }
        }
      }
    }
  }
</style>
