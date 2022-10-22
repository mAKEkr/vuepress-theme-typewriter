<template>
  <nav>
    <ul>
      <li v-for="(item, index) in $site.themeConfig.nav"
        :key="index">
        <a :href="item.link" v-if="item.outLink === true" :target="{ '_blank': item.newWindow}">{{ item.text }}</a>
        <router-link :to="item.link" v-else>{{ item.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export defualt {
  name: 'layout-header-nav'
}
</script>
