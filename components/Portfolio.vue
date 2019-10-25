<template>
  <layout-container>
    <section id="layout-portfolio" class="layout-fluid-container">
    </section>
  </layout-container>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            year: 2018,
            title: 'VuePress Theme - Typewriter',
            description: `Theme 'Typewriter' is focus on typograph. using less design point and improve accessibility. this Theme is open-source, check this theme on Github.`,
            image: {
              thumbnail: '',
              original: ''
            },
            links: [
              {
                name: "Go to Repository",
                href: "https://github.com/mAKEkr/vuepress-theme-typewriter"
              }
            ],
            tags: [
              'type:design',
              'type:programming',
              'type:frontend',
              'tech:webpack',
              'tech:vuejs',
              'cms:vuepress',
            ]
          },
          {
            year: 2018,
            title: 'unveild project',
            description: 'this project has ongoing and ',
            image: {
              thumbnail: '',
              original: ''
            },
            links: [
            ],
            tags: [
              'type:design',
              'type:programming',
              'type:backend',
              'tech:vuejs',
              'tech:electron',
            ]
          },
          {
            year: 2017,
            title: 'XpressEngine Add-on',
            description: 'XpressEngine is one of famous CMS in South Korea. made some of application called "Add-on" using for better CMS use experiences',
            links: [
              {
                name: "XpressEngine Official "
              }
            ],
            image: {
              thumbnail: '',
              original: ''
            }
          },
          {
            year: 2014,
            title: 'XpressEngine Theme and module skin make',
            description: ''
          }
        ],
        sortKey: []
      }
    }
  }
</script>

<style lang="scss">
  section#layout-portfolio {

  }
</style>