(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var PLATFORM = global.navigator.platform;
  var SPECIAL_TYPE_RE = /date|datetime|time|month|email/i;
  var deviceIsIOS = /iPhone|iPad|iPod/.test(PLATFORM);

  nx.domFocus = function (inElement) {
    var length;
    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (
        deviceIsIOS
        && inElement.setSelectionRange
        && SPECIAL_TYPE_RE.test(inElement.type)
    ) {
        length = inElement.value.length;
        inElement.setSelectionRange(length, length);
    } else {
        inElement.focus();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domFocus;
  }

}());
