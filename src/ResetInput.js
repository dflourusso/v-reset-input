import Vue from 'vue'
export default {
  name: 'v-reset-input',
  inserted (el, binding, vnode) {
    el.onfocus = () => {
      vnode.elm.parentElement.style.position = 'relative'
      component.$el.style.display = 'block'
    }
    el.onblur = () => { setTimeout(() => { component.$el.style.display = 'none' }, 150) }

    let clickHandler = () => {
      el.value = ''
      el.dispatchEvent(new Event('input'))
    }
    var MyComponent = Vue.extend({
      render (h) { return h('span', {
        on: { click: clickHandler },
        domProps: { innerHTML: '&#10006;' },
        class: { 'v-reset-input': true },
        style: { display: 'none', position: 'absolute', top: '8px', right: '25px', fontSize: '1.5em', opacity: 0.8}
      })}
    })

    let span = document.createElement('span')
    el.after(span)
    var component = new MyComponent().$mount(span)
  }
}
