import { h, render } from "vue"
import messageComponent from './index.vue'

export const message = (type, content, duration = 3000) => {
    const onDestory = () => {
        render(null, document.body)
    }

    const vnode = h(messageComponent, {
        type,
        content,
        duration,
        destory: onDestory
    })

    render(vnode, document.body)
}