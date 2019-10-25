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
  import PostList from '@source/.vuepress/components/Post/List.vue'

  export default {
    name: 'layout-index',
    components: {
      PostList
    },
  }
</script>

<style lang="scss">
.list-pagination {
  display:flex;
  flex-direction:column;
  align-items: flex-end;
  padding-bottom:36px;
  text-transform:uppercase;

  & > .prev,
  & > .next {
    text-decoration:none;
    font-weight:600;
    font-size:18pt;
  }
}
</style>