module.exports = {
  require: function(module) {
    require('./lib/closure-library/closure/goog/bootstrap/nodejs.js');
    require('./deps.js');
    global.CLOSURE_IMPORT_SCRIPT = function(src) {
      var E2E_PATH = './';
      var CLOSURE_SOURCE = './lib/closure-library/closure/goog/';
      try {
        require(CLOSURE_SOURCE + src);
      } catch (err) {
        require(E2E_PATH + src);
      }
      return true;
    };
    goog.require(module);
    return true;
  }
};
