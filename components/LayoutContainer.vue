<template>
  <div class="akekr-layout">
    <layout-header />
    <slot />
    <layout-footer />
  </div>
</template>

<script>
  import LayoutHeader from './layout/Header.vue'
  import LayoutFooter from './layout/Footer.vue'

  export default {
    name: 'layout-container',
    components: {
      LayoutHeader,
      LayoutFooter
    }
  }
</script>
