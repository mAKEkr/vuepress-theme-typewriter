<template>
  <div class="page-error page-error-notfound">
    <div class="wrap">
      <p>maybe something went wrong direction.<br /><a href="#" @click.prevent="goPreviousPage()">Back to previous page</a> or <a href="/">return to index</a></p>
      <h1>Page Not Found.</h1>
      <h2>404</h2>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$ssrContext !== undefined) {
      this.$ssrContext.userHeadTags += `<meta name="robots" content="noindex, nofollow" />`
    }
  },
  methods: {
    goPreviousPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
  .page-error.page-error-notfound {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;

    & > .wrap {
      margin:0 auto;
      display:flex;
      flex-direction:column;
      align-self:center;
      flex-direction:column-reverse;
    }

    h2 {
      font-size:6rem;
      margin:0;
    }
    h1 {
      margin:0;
      color:$oc-gray-8;
    }
    p {
      color:$oc-gray-6;

      a {
        display:block;
        margin-top:4px;
        color:$oc-gray-9;
      }
    }
  }
</style>