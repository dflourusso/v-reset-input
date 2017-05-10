<template lang="pug">
div(style="text-align: center;")
  h2 Type something, then click in the "&#10006;" button to clear the input
  div.input-group
    input.reset-input(v-model='demo_input', v-reset-input='')
  div
    br
    pre {{demo_input}}
</template>

<script>
import Vue from 'vue'
import ResetInput from '../src/ResetInput.js'
Vue.directive('reset-input', ResetInput)
export default {
  name: 'demo',
  data () {
    return {
      demo_input: 'Test input content'
    }
  }
}
</script>

<style src="./style.css"></style>
<style lang="stylus">
.reset-input
  font-size 1.5em
  padding 10px 15px
  box-shadow none
  border 1px solid #157977
  width 100%
  outline none
  background-color #eee
</style>
