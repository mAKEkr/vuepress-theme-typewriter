<template>
  <div id="post-toc" :class="{hide: this.active === false}">
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
        scrollEvent: false
      }
    },
    mounted () {
      if (this.scrollEvent === false) {
        window.addEventListener('scroll', this.onScroll)
        this.scrollEvent = true
      }
    },
    beforeDestroy () {
      if (this.scrollEvent === true) {
        window.removeEventListener('scroll', this.onScroll)
        this.scrollEvent = false
      }
    },
    methods: {
      onScroll (event) {
        throttle(function () {
          console.log(event)
          if (event.pageY > this.contentOffset() && this.active === true) {
            this.active = false
          } else if (event.pageY < this.contentOffset() && this.active === false) {
            this.active = true
          }
        }, 300)
      },
      contentOffset () {
        return document.querySelector('.page-content').offsetTop + document.querySelector('.page-content').offsetHeight
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
#post-toc {
  position:fixed;
  margin-left:-220px;
  width:200px;
  opacity:0.3;
  transition:opacity linear 0.232s;

  ul {
    list-style:none;
    margin:0;
    padding:0;
    width:100%;

    li {
      display:block;
      text-align:right;

      & > a {
        display:block;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        text-decoration:none;
        color:$oc-gray-9;
        font-weight:300;
        padding:2px 6px 2px 0;
        font-size:14px;
        border-right:3px solid transparent;
      }

      & > a.active {
        border-right-color:$oc-gray-9;
      }

      &.toc-level-1 {
        margin-bottom:6px;
        
        & > a {
          font-weight:600;
          font-size:18px;
        }
      }

      &.toc-level-2 {
        margin-top:16px;

        & > a {
          font-size:16px;
          font-weight:400;
        }
      }
      &.toc-level-3 {
        margin-top:3px;
      }
    }
  }

  &:hover {
    opacity:1;
  }

  &.hide {
    opacity:0;
    visibility:hidden;
  }
}

@media (max-width: 1600px) {
  #post-toc {
    display:none;
  }
}

</style>