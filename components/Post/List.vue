<template>
  <div class="post-list">
    <header class="post-list-header" v-if="this.$props.searchQuery !== undefined">
      <h1>{{ `${this.getSearchType}: ${this.getQueryName}` }}</h1>
    </header>
    <div class="post-list-item" v-for="(item, index) in items" :key="index">
      <!-- <span class="featured">Featured Post</span> -->
      <ul class="post-category-list">
        <li v-for="category in item.frontmatter.categories" :key="category">
          <router-link :to="`/category/${category}`" class="category">{{ category }}</router-link>
        </li>
      </ul>
      <h2 class="post-title">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </h2>
      <p class="post-subtitle" v-if="item.frontmatter.subtitle">
        <router-link :to="item.path">{{ item.frontmatter.subtitle }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostList',
    props: {
      items: Array,
      searchType: String,
      searchQuery: String
    },
    computed: {
      getSearchType () {
        switch(this.$props.searchType) {
          case 'category':
            return 'Category'

          case 'tag':
            return 'Tag'
        }
      },
      getQueryName () {
        return this.$props.searchQuery.match('\/(?:tag|category)\/(.+)\.html')[1]
      },
      getTagList () {
        return Object.keys(this.$tags._metaMap)
      },
      getCategoryList () {
        return Object.keys(this.$categories._metaMap)
      }
    }
  }
</script>
