// let a = require('loader-query')
 function fn (sourceCode){
  return `
    let style = document.createElement('style')
    style.innerHTML = \`${sourceCode}\`
    document.body.append(style)
  `;
}
fn.pitch = function () {
  return ''
}
module.exports = fn