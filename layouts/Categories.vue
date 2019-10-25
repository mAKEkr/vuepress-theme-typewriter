<template>
  <layout-container>
    <div class="layout-fluid-container">
      <article
        v-for="(item, index) in $frontmatterKey.list"
        :key="index">
        <header>
          <h2>{{ item.name }}<span>({{ item.pages.length }})</span></h2>
        </header>
        <post-list :items="item.pages" />
      </article>
    </div>
  </layout-container>
</template>

<script>
  import PostList from '@theme/components/Post/List.vue'

  export default {
    name: 'layout-category-list',
    components: {
      PostList
    },
  }
</script>