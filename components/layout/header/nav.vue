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

<style lang="scss">
nav {
  vertical-align:middle;
  margin:0 6px 0 auto;
  align-self:center;
  font-size:0;

  & > ul {
    list-style:none;
    margin:0;
    padding:0;

    & > li {
      display:inline-block;
      margin-left:4px;

      a {
        display:block;
        padding:12px 18px;
        text-decoration:none;
        font-weight:500;
        font-size:14px;
        font-family:'Roboto';
        border-bottom:3px solid transparent;

        &:hover {
          opacity:1;
        }

        &:visited {
          color:inherit;
        }
      }
    }
  }
}
</style>