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
        <comment class="page-footer-comment" />
      </div>
    </div>
  </layout-container>
</template>

<script>
  import PostNavigator from '@source/.vuepress/components/Post/view/PostNavigator'
  import Comment from '@source/.vuepress/components/Post/view/Comment'
  import Toc from '@source/.vuepress/components/Post/view/TOC'
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
.page-post {
  .layout-fluid-container {
    position:relative;
    overflow:hidden;
  }
  
  .page-header {
    h1.page-title {
      font-size:46px;
      margin:0;
      word-break:break-all;
    }

    p.page-createdDate {
      margin:4px 0 12px 0;
      text-transform:uppercase;
      font-weight:800;
      letter-spacing:-1px;
      color:$oc-gray-6;
    }

    h2.page-subtitle {
      font-size:26px;
      color:$oc-gray-8;
      font-weight:500;
      margin:0;
      word-break:break-all;
    }
  }

  .page-content {
    font-family:'Iropke Batang';
    font-size:14pt;
    line-height:30px;
    word-break:keep-all;

    h1, h2, h3, h4, h5, h6 {
      font-family:'Noto Sans KR';
      display:flex;
      text-align:left;
      margin:1em 0 0.5em;

      .header-anchor {
        visibility:hidden;
        width:24px;
        font-size:14px;
        background-color:$oc-gray-6;
        text-align:center;
        color:#fff;
        margin-left:6px;
        border-radius:6px;
        line-height:24px;
        text-decoration:none;
        align-self:center;
      }

      &:hover > .header-anchor {
        visibility:visible;
      }
    }

    h1 {
      font-size:46px;
      line-height:52px;
    }

    h2 {
      font-size:38px;
      line-height:44px;
    }

    h3 {
      font-size:28px;
      line-height:32px;
    }

    h4 {
      font-size:24px;
      line-height:26px;
    }

    h5 {
      font-size:14pt;
      line-height:18px;
    }

    ul {
      padding-left:24px;
      & > li {
        font-size:20px;
        line-height:32px;

        ul > li {
          font-size:16px;
          line-height:28px;
        }
      }
    }

    img {
      display:flex;
      margin:0 auto;
      max-width:100%;
      height:auto;
    }

    code {
      display:inline-block;
      background-color:$oc-gray-1;
      padding:0 6px;
      border-radius:6px;
      font-size:12px;
      font-family:Consolas, Monaco, monospace;
      vertical-align:top;
    }

    blockquote {
      border-left:6px solid $oc-gray-6;
      padding:2px 12px;
      margin:6px 12px;
      background-color:$oc-gray-0;

      & > p {
        margin:12px 0;
      }
    }

    .image-block {
      padding:12px;
      margin:0;
      background-color:$oc-gray-0;
      border:1px solid $oc-gray-2;

      p {
        margin:0;
      }

      img {
        max-width:100%;
      }

      figcaption {
        margin:12px 0 0;
        text-align:center;
      }

      &.full-size img{
        width:100%;
      }
    }
  }

  .page-footer {
    .page-footer-navigator {
      display:block;
    }

    .page-footer-comment {
      padding:32px 0;

      h2 {
        font-family:'Roboto';
        font-weight:400;
        text-transform:uppercase;
      }

      #utternaces-comment .utterances {
        max-width:100%;
      }
    }
  }
}
</style>
