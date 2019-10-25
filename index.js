const path = require('path')

module.exports = {
  name: 'vuepress-theme-typewriter',
  layoutDir: 'theme',
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    '@vuepress/active-header-links',
    'vuepress-plugin-medium-zoom',
    'vuepress-plugin-nprogress',
    '@vuepress/google-analytics',
    [
      '@vuepress/register-components', {
      componentsDir: [
        path.resolve(__dirname, 'components')
      ]
    }]
  ]
}