<template>
  <layout-container class="page-index">
    <div class="layout-fluid-container">
      <post-list :items="$pagination.pages" />
      <div class="list-pagination" v-if="$pagination">
        <router-link class="prev" v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev Page</router-link>
        <router-link class="next" v-if="$pagination.hasNext" :to="$pagination.nextLink">Next Page</router-link>
      </div>
    </div>
  </layout-container>
</template>

<script>
  import PostList from '@theme/components/Post/List.vue'

  export default {
    name: 'layout-index',
    components: {
      PostList
    },
  }
</script>
