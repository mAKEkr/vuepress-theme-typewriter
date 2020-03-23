<template>
  <layout-container>
    <div class="layout-fluid-container">
      <h2 class="category-header">{{ $currentCategory.key }}</h2>
      <post-list :items="$pagination.pages" searchType="category" :searchQuery="$category.path" />
    </div>
  </layout-container>
</template>

<script>
  import PostList from '@theme/components/Post/List.vue'

  export default {
    components: {
      PostList
    },
  }
</script>
