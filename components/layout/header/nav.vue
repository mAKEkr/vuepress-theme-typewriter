<template>
  <nav>
    <ul>
      <li v-for="(item, index) in $site.themeConfig.nav"
        :key="index">
        <router-link :to="item.link">{{ item.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>