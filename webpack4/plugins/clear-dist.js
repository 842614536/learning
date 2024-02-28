const fs = require('fs');
const path = require('path')

class ClearDist {
  apply (complier) {
    complier.hooks.run.tap('ClearDist', function (compilation) {
      fs.rmdirSync(path.resolve(__dirname + '/../dist'), {recursive: true})
    })
  }
}

module.exports = ClearDist