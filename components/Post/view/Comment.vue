<template>
  <div>
    <h2>Comment</h2>
    <div id="utternaces-comment" ref="commentContainer"></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.callCommentService()
    },
    methods: {
      callCommentService () {
        this.$nextTick(() => {
          const commentConfig = this.$site.themeConfig.comment

          const script = window.document.createElement('script')
          script.src = 'https://utteranc.es/client.js'
          script.setAttribute('repo', commentConfig.repo)
          script.setAttribute('issue-term', 'url')

          if (commentConfig.label !== undefined) {
            script.setAttribute('label', commentConfig.label)
          }
          if (commentConfig.theme !== undefined) {
            script.setAttribute('theme', commentConfig.theme)
          }

          script.setAttribute('crossorigin', 'anonymous')
          script.setAttribute('async', 'async')
          this.$refs.commentContainer.appendChild(script)
        })
      }
    }
  }
</script>