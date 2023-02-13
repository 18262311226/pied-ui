module.exports = {
    title: 'Pied-design-ui',
    description: 'Just playing around.',
    themeConfig: {
        siteTitle: 'Pied-design-ui',
        algolia: {
            apiKey: 'your_api_key',
            indexName: 'index_name'
        },
        sidebar: [
            {
              text: 'plugin',
              items: [
                { text: '安装', link: '../router/install.md' },
                { text: '快速上手', link: '../router/use.md' },
              ]
            },
            {
              text: 'Basic',
              items: [
                { text: 'Icon 图标', link: '../components/icon.md' },
                { text: 'RowCol 行列', link: '../components/rowcol.md' },
                { text: 'Container 布局', link: '../components/container.md' },
                { text: 'Button 按钮', link: '/../components/button.md' },
              ]
            },
            {
              text: 'Form',
              items: [
                { text: 'Radio 单选框', link: '../components/radio.md' },
                { text: 'Checkbox 多选框', link: '../components/checkbox.md' },
                { text: 'Input 输入框', link: '../components/input.md' },
                { text: 'Select 选择框', link: '../components/select.md' },
                { text: 'Upload 上传文件', link: '../components/upload.md' },
                { text: 'Form 表单', link: '../components/form.md' },
              ]
            },
            {
              text: 'Data',
              items: []
            },
            {
              text: 'Notice',
              items: []
            },
            {
              text: 'Other',
              items: []
            },
            {
              text: 'Work',
              items: []
            }
        ],
        nav: [
            { text: '首页', link: '../index.md' },
            { text: '组件', link: '../content.md' },
            {
                text: '语言',
                items: [
                  { text: 'english'},
                  { text: 'chinese'},
                  { text: 'japan' }
                ]
            },
            { text: '源码', link: 'https://github.com/18262311226/pied-ui' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Gerforey'
        }
    },
    base: '/pied-ui/'
}