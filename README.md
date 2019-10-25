# Typewriter
Typewriter is Blog Theme based on VuePress. design focus on article.

support responsive design, comment service(utteranc.es)

[Demo](https://ake.kr/)

## Installation

``` bash
npm install vuepress-theme-typewriter --save # npm
yarn add vuepress-theme-typewriter # yarn
```

## Configuration

open your VuePress Project, go to `.vuepress/config.js` and add these lines read comments.
``` javascript
module.exports =
  scss: { // this configuration required for color preset using in theme
    data: '@import "@theme/styles/global-variables.scss";'
  },
  themeConfig: {
    nav: [ // setting global header nav items
      {
        text: 'Blog', // display context on menu
        link: '/' // link
      }, // if want more, add like this
    ],
    copyright: 'Copyright 2019 Typewriter all rights reserved.', // write copyright on layour footer.
    github: 'mAKEkr', // if want add github icon, write username or repository id(example, mAKEkr or mAKEkr/vuepress-theme-typewriter)
    feed: true, // if your project publishing rss feed, this value set to true. add links on footer.
    comment: { // support utteranc.es comment service based on github issue. if this value(comment) dosen't exists, theme is considered unavailable for comment service.
      // support repo, issue-term and theme setting.
      'repo': 'mAKEkr/blog', 
      'issue-term': 'url'
    }
  }
}

```
