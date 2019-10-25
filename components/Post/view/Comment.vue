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
          const script = window.document.createElement('script')
          script.src = 'https://utteranc.es/client.js'
          script.setAttribute('repo', 'mAKEkr/blog')
          script.setAttribute('issue-term', 'url')
          script.setAttribute('crossorigin', 'anonymous')
          script.setAttribute('async', 'async')
          this.$refs.commentContainer.appendChild(script)
        })
      }
    }
  }
</script>