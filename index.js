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
    }],
    ['container', {
      type: 'image',
      before: imageType => `<figure class="image-block ${imageType}">`,
      after: '</figure>'
    }],
    ['container', {
      type: 'imageCaption',
      before: '<figcaption>',
      after: '</figcaption>'
    }],
  ]
}