<template lang="html">
  <div>
    <heador></heador>
    <slider></slider>
    <welfare></welfare>
    <service></service>
    <footor></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '../public/header.vue';
  import Footor from '../public/footer.vue';
  import Slider from './islider.vue';
  import Welfare from './welfare.vue';
  import Service from './service.vue';
  import Navbar from '../public/navbar.vue';

  export default {
    components: {
      Heador,
      Slider,
      Welfare,
      Service,
      Footor,
      Navbar
    }
  }
</script>

<style lang="scss">

</style>
