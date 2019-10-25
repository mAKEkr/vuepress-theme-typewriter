<template>
  <layout-container>
    <div class="layout-fluid-container">
      <post-list :items="$tag.posts" />
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