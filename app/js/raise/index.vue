<template lang="html">
  <div>
    <heador></heador>
    <slider></slider>
    <daily></daily>
    <in></in>
    <more></more>
    <footor class="mfooter"></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '../public/header.vue';
  import Footor from '../public/footer.vue';
  import Slider from './rslider.vue';
  import Daily from './daily.vue';
  import In from './in.vue';
  import More from './more.vue';
  import Navbar from '../public/navbar.vue';

  export default {
    components: {
      Heador,
      Slider,
      Daily,
      In,
      More,
      Footor,
      Navbar
    }
  }
</script>

<style lang="scss">
  .mfooter {
    margin-top: 0 !important;
    ul {
      li:first-child {
        display: none;
      }
    }
  }
</style>
