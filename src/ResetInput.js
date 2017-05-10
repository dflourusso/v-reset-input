import Vue from 'vue'

var component = null

export default {
  name: 'v-reset-input',
  inserted (el, binding, vnode) {
    el.onfocus = () => {
      vnode.elm.parentElement.style.position = 'relative'
      if (el.value) component.$el.classList.add('v-reset-input-active')
    }
    el.onblur = () => { setTimeout(() => { component.$el.classList.remove('v-reset-input-active') }, 150) }

    let clickHandler = () => {
      el.value = ''
      el.dispatchEvent(new Event('input'))
    }

    var ResetComponent = Vue.extend({
      render (h) { return h('span', {
        on: { click: clickHandler },
        domProps: { innerHTML: '&#10006;' },
        class: { 'v-reset-input': true },
        style: { position: 'absolute'}
      })}
    })

    let span = document.createElement('span')
    el.after(span)
    component = new ResetComponent().$mount(span)
  },

  update (el, binding, vnode) {
    if (!el.value) {
      component.$el.classList.remove('v-reset-input-active')
    } else {
      component.$el.classList.add('v-reset-input-active')
    }
  }
}
