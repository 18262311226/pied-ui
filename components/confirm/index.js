import { h, render } from "vue"
import confirmComponent from './index.vue'

export const confirm = (title, content, cancelText, confirmText) => {
    return new Promise((resolve, reject) => {
        if(title && !content){
            content = title
            title = ''
        }

        const close = () => {
            render(null, document.body)
        }

        const cancelHandler = () => {
            reject(new Error('取消按钮'))
        }

        const confirmHandler = () => {
            resolve()
        }

        const vnode = h(confirmComponent, {
            title,
            content,
            cancelText,
            confirmText,
            close,
            cancelHandler,
            confirmHandler
        })

        render(vnode, document.body)
    })
}