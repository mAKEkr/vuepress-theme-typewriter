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

<style lang="scss">
.post-list {
  & > .post-list-item {
    display:block;
    padding:48px 0;
  }

  span.featured {
    color:$oc-gray-7;
    font-size:12px;
    font-family:'Roboto';
    font-weight:400;
  }

  .post-category-list {
    list-style:none;
    margin:0;
    padding:0;

    & > li {
      display:inline-block;
      margin-right:12px;
    }

    a.category {
      color:$oc-gray-7;
      font-size:18px;
      text-transform:uppercase;
      font-family:'Roboto';
      font-weight:500;
      text-decoration:none;
    }
  }

  h2.post-title {
    margin:0;
    font-size:36px;
    font-weight:600;

    & > a {
      text-decoration:none;
      color:$oc-gray-9;
    }
  }

  p.post-subtitle > a {
    text-decoration:none;
    color:$oc-gray-7;
    font-size:18px;
  }
}
</style>