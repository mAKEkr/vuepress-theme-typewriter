<template>
  <footer id="layout-footer">
    <div class="layout-fluid-container">
      <p>
        Powered by VuePress
        <template v-if="$site.themeConfig.copyright">
          <br />
          {{ $site.themeConfig.copyright }}
        </template>
      </p>
      <div class="links">
        <a :href="`/${$site.themeConfig.feed}`" target="_blank" v-if="typeof $site.themeConfig.feed === 'string'">
          <img src="../../assets/icon-feed.svg" alt="feed link" />
        </a>
        <a :href="`https://github.com/${$site.themeConfig.github}`" target="_blank" v-if="$site.themeConfig.github !== undefined">
          <img src="../../assets/icon-github.svg" alt="github repository" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'layout-footer'
  }
</script>
