// need to use require instead of import (changes from babel 5 to 6)
const ResetInput = require('./ResetInput.js')
ResetInput.install = vue => vue.directive(ResetInput.name, ResetInput(vue))
ResetInput.version = proccess.env.VERSION

module.exports = ResetInput
