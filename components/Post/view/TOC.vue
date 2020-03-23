<template>
  <div id="post-toc" :class="{hide: this.active === false, sticky: this.stickyTop}">
    <ul>
      <li class="toc-level-1">
        <a href="#">처음</a>
      </li>
      <li v-for="(item, index) in $page.headers"
        :key="index"
        :class="`toc-level-${item.level}`">
        <a class="sidebar-link"
          :class="{active: isActive(item.slug)}"
          :href="`#${item.slug}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import throttle from 'lodash.throttle'

  export default {
    data () {
      return {
        active: true,
        stickyTop: false,
        eventListener: null
      }
    },
    mounted () {
      this.eventListener = window.addEventListener('scroll', this.onScrollEvent)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScrollEvent)
    },
    methods: {
      onScrollEvent: throttle(function (event) {
        if (window.scrollY > this.contentOffset()) {
          this.stickyTop = true
        } else {
          this.stickyTop = false
        }
      }, 300),
      contentOffset () {
        return window.pageYOffset + document.querySelector('.page-header').getBoundingClientRect().top - 36
      },
      browserHeight () {
        return window.innerHeight
      },
      isActive (hashPath) {
        return this.$route.hash === `#${hashPath}`
      }
    },
    computed: {
      isVisible() {
        return event.pageY < this.contentOffset() - this.browserHeight() && this.active
      }
    }
    // watch: {
    //   '$route.hash': (value) => {
    //     alert(value)
    //   }
    // }
  }
</script>

<style lang="scss">

</style>