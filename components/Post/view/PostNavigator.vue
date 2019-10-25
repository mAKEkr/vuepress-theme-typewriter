<template>
  <div class="post-navigator">
    <div class="post-navigator-next"
         @click.prevent="$router.push(nextPost.path)"
         v-if="nextPost !== null">
      <span>Next Post</span>
      <h1>
        {{ nextPost.title }}
      </h1>
      <h2 v-if="nextPost.frontmatter.subtitle !== undefined">
        {{ nextPost.frontmatter.subtitle }}
      </h2>
    </div>
    <div class="post-navigator-prev"
         @click.prevent="$router.push(prevPost.path)"
         v-if="prevPost !== null">
      <span>Previous Post</span>
      <h1>
        {{ prevPost.title }}
      </h1>
      <h2 v-if="prevPost.frontmatter.subtitle !== undefined">
        {{ prevPost.frontmatter.subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        prevPost: null,
        currentPost: null,
        nextPost: null
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.updateNav()
      })
    },
    methods: {
      updateNav() {
        const navData = this.getNavigationData
        this.prevPost = navData.prevPost
        this.currentPost = navData.currentPost
        this.nextPost = navData.nextPost
      }
    },
    computed: {
      getNavigationData() {
        const postList = this.$site.pages.filter(post => post.id === 'post')
          .sort((prev, next) => {
            // https://vuepress-plugin-blog.ulivz.com/pagination/#sorter
              const prevTime = new Date(prev.frontmatter.date).getTime()
            const nextTime = new Date(next.frontmatter.date).getTime()
            return prevTime - nextTime > 0 ? -1 : 1
          })
        const currentPost = postList.findIndex(post => {
          return post.path === this.$router.currentRoute.path
        })

        return {
          prevPost: (currentPost + 1 < postList.length) ? postList[currentPost + 1] : null,
          currentPost: postList[currentPost],
          nextPost: (currentPost > 0) ? postList[currentPost - 1] : null
        }
      }
    }
  }
</script>

<style lang="scss">
.post-navigator {
  display:flex;
  border-top:1px solid $oc-gray-3;
  border-bottom:1px solid $oc-gray-3;
  padding:6px 0;

  & > .post-navigator-prev,
  & > .post-navigator-next {
    width:100%;
    cursor:pointer;

    &:nth-child(2) {
      border-left:1px solid $oc-gray-3;
    }
  }

  & > div {
    display:flex;
    flex-direction:column;
    padding:12px 24px;

    & > span {
      font-family:'Roboto';
      text-decoration:uppercase;
      margin:0 auto 18px auto;
      font-size:12px;
      padding:6px 12px;
      border:1px solid $oc-gray-4;
      color:$oc-gray-6;
      border-radius:6px;
    }

    & > h1 {
      margin:0;
      font-size:36px;
      font-weight:700;
      word-break:keep-all;
    }

    & > h2 {
      text-decoration:none;
      color:$oc-gray-7;
      font-size:18px;
      font-weight:400;
    }

    &:nth-child(2) {
      text-align:right;
    }
  }
}
</style>