<template>
  <layout-container
    class="page-post"
    :key="$route.path">
    <div class="layout-fluid-container">
      <toc />
      <div class="page-header">
        <h1 class="page-title">{{ $page.frontmatter.title }}</h1>
        <h2 class="page-subtitle" v-if="$page.frontmatter.subtitle">
          {{ $page.frontmatter.subtitle }}
        </h2>
        <p class="page-createdDate">{{ dateFormat($page.frontmatter.date) }}</p>
      </div>
      <div class="page-content markdown-body">
        <Content slot="default"/>
      </div>
      <div class="page-footer">
        <post-navigator />
        <comment class="page-footer-comment" v-if="typeof $site.themeConfig.comment === 'object'" />
      </div>
    </div>
  </layout-container>
</template>

<script>
  import PostNavigator from '@theme/components/Post/view/PostNavigator'
  import Comment from '@theme/components/Post/view/Comment'
  import Toc from '@theme/components/Post/view/TOC'
  import Dayjs from 'dayjs'

  export default {
    name: 'blog-post',
    components: {
      PostNavigator,
      Comment,
      Toc
    },
    methods: {
      dateFormat (date) {
        return Dayjs(date).format('MMM DD, YYYY')
      }
    },
    mounted () {
      if (window.location.hash === '') {
        scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="scss">
</style>
