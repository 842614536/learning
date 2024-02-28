module.exports = function(sourceCode){
  return `
    let style = document.createElement('style')
    style.innerHTML = \`${sourceCode}\`
    document.body.append(style)
  `;
}