<template>
  <header id="layout-header" :class="{'active-header-cover': isHeaderCover}">
    <div class="layout-header-cover"
         v-if="isHeaderCover"
         :style="{
          'background-image': `url('${this.$page.frontmatter.theme.headerCover}')`
         }"></div>
    <div class="header-container" :style="{color: getHeaderColor}">
      <h1><router-link to="/">AKE.kr</router-link></h1>
      <header-nav></header-nav>
    </div>
  </header>
</template>

<script>
  import HeaderNav from './header/nav'

  export default {
    name: 'layout-header',
    components: {
      HeaderNav
    },
    computed: {
      isHeaderCover () {
        return this.$page.frontmatter.theme !== undefined &&
          this.$page.frontmatter.theme.hasOwnProperty('headerCover')
      },
      getHeaderColor () {
        return this.$page.frontmatter.theme !== undefined &&
          this.$page.frontmatter.theme.hasOwnProperty('headerColor') ? this.$page.frontmatter.theme.headerColor : false
      }
    }
  }
</script>
