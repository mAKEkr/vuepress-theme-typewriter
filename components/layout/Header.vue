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

<style lang="scss">
  #layout-header {
    width:100%;
    position:relative;

    &.active-header-cover {
      height:560px;
      margin-bottom:36px;
    }

    & > .layout-header-cover {
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:-1;
      background-size:cover;
      background-position:center center;
    }

    .header-container {
      width:100%;
      height:84px;
      display:flex;
      color:$oc-gray-9;
    }

    h1 {
      font-family:'Roboto';
      align-self:center;
      font-size:30px;
      font-weight:400;
      margin:0 0 0 24px;

      a {
        text-decoration:none;
        color:inherit;
      }
    }
  }
</style>