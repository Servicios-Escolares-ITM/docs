const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Servicios Escolares ITM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/docs/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#800000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://www.itmerida.mx/imagenes/tec.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.itmerida.mx/imagenes/tec.png',
        rel: 'shortcut icon'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Servicios-Escolares-ITM',
    editLinks: false,
    logo: 'https://www.itmerida.mx/imagenes/tec.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Ventanilla Digital',
        link: '/ventanilla/'
      },
      {
        text: 'Enfermeria',
        link: '/nursing/'
      },
      {
        text: 'Psicología',
        link: '/psychology/'
      }
    ],
    sidebar: {
      '/ventanilla/': [
        {
          title: 'API',
          collapsable: true,
          children: ['', 'tramites', 'titulacion']
        },
        {
          title: 'Dashboard',
          collapsable: true,
          children: ['frontend']
        }
        
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
