// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import PiedUi from 'pied-design-ui'
import '../../../node_modules/pied-design-ui/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PiedUi)
  }
}