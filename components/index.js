import { defineAsyncComponent } from 'vue'
import '../src/assets/icons/iconfont.css'

export default {
    install (app) {
        const components = import.meta.glob('./*/index.vue')
        for (const [fullPath, fn] of Object.entries(components)) {
            const componentName = 'pied-' + fullPath.replace('./', '').split('/')[0]
            app.component(componentName, defineAsyncComponent(fn))
        }
    }
}