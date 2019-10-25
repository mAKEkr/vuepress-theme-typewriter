<template>
  <footer id="layout-footer">
    <div class="layout-fluid-container">
      <p>
        Powered by VuePress<br />
        Copyright 2010-2019 AKE.kr all rights reserved.
      </p>
      <div class="links">
        <a href="/feed.xml" target="_blank" v-if="$site.themeConfig.feed === true">
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

<style lang="scss">
#layout-footer {
  background-color:$oc-gray-0;
  padding:6px 12px;
  font-size:14px;

  & > .layout-fluid-container {
    display:flex;
    flex-direction:row;
  }

  p {
    margin:6px 18px 6px 0;
    line-height:24px;
  }

  img {
    width:32px;
    height:32px;
  }

  div.links {
    margin-left:auto;
    align-self:center;
  }
}
</style>