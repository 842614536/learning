(function (modules) {
  var installModule = {}
  function webpack_require (moduleId) {
    if (installModule[moduleId]) {
      return installModule[moduleId]
    }
    var module = {
      exports: {}
    }
    modules[moduleId].call(module.exports, module, module.exports, webpack_require)
    installModule[moduleId] = module.exports
    return module.exports
  }
  webpack_require('main.js')
})({
  'main.js': function (module, exports, webpack_require) {
    var b = webpack_require('b.js')
    var c = webpack_require('c.js')
  },
  'b.js': function (module, exports, webpack_require) {
    var obj = webpack_require('jquery.js')
    obj.hh = 2
    console.log(obj.add(1, 2), 'b.js')
  },
  'c.js': function (module, exports, webpack_require) {
    var obj = webpack_require('jquery.js')
    console.log(obj.hh)
  },
  'jquery.js': function (module, exports, webpack_require) {
    function add (a, b) {
      return a + b
    }
    
    module.exports = {
      add,
      hh: 1
    }
  }
})



