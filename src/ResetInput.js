var component = null
module.exports = (vue) => {
  return {
    name: 'reset-input',
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

      var ResetComponent = vue.extend({
        render (h) { return h('span', {
          on: { click: clickHandler },
          domProps: { innerHTML: '&#10006;' },
          class: { 'v-reset-input': true },
          style: { position: 'absolute', cursor: 'default'}
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
}
