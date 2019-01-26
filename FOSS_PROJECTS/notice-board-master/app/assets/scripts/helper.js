var Helper = function() {
  function init() {
    checkIfEmptyRemoteURL();
    checkForEmptyAssign();
  }
  
  function checkIfEmptyRemoteURL() {
    Handlebars.registerHelper('checkIfEmptyRemoteURL', function(val, options) {
      if(val) {
        return '<a href="' + val + '" target="_blank">' + val + '</a>';
      } else {
        return '-';
      }
    });
  }
  
  function checkForEmptyAssign() {
    Handlebars.registerHelper('checkIfEmptyAssigned', function(val, options) {
      if(val) {
        return val;
      } else {
        return '-';
      }
    });
  }
  
  return {
    init: init
  }
}();

Helper.init();