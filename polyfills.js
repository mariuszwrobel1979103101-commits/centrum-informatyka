(function () {
  "use strict";

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      var i;
      for (i = 0; i < this.length; i += 1) {
        if (i in this) {
          callback.call(thisArg, this[i], i, this);
        }
      }
    };
  }

  if (!Array.prototype.includes) {
    Array.prototype.includes = function (value, fromIndex) {
      return this.indexOf(value, fromIndex || 0) !== -1;
    };
  }

  if (!String.prototype.includes) {
    String.prototype.includes = function (value, start) {
      return this.indexOf(value, start || 0) !== -1;
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (value, position) {
      position = position || 0;
      return this.substr(position, value.length) === value;
    };
  }

  if (!Array.prototype.find) {
    Array.prototype.find = function (predicate, thisArg) {
      var i;
      for (i = 0; i < this.length; i += 1) {
        if (predicate.call(thisArg, this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
    };
  }

  if (!Array.prototype.flatMap) {
    Array.prototype.flatMap = function (callback, thisArg) {
      var result = [];
      var mapped;
      var i;
      var j;
      for (i = 0; i < this.length; i += 1) {
        mapped = callback.call(thisArg, this[i], i, this);
        if (Object.prototype.toString.call(mapped) === "[object Array]") {
          for (j = 0; j < mapped.length; j += 1) {
            result.push(mapped[j]);
          }
        } else {
          result.push(mapped);
        }
      }
      return result;
    };
  }

  if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
      var result = {};
      var i;
      for (i = 0; i < entries.length; i += 1) {
        result[entries[i][0]] = entries[i][1];
      }
      return result;
    };
  }

  if (!window.Set) {
    window.Set = function (items) {
      this.items = [];
      var i;
      items = items || [];
      for (i = 0; i < items.length; i += 1) {
        if (!this.has(items[i])) {
          this.items.push(items[i]);
        }
      }
    };
    window.Set.prototype.has = function (value) {
      return this.items.indexOf(value) !== -1;
    };
  }

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (window.Element && !Element.prototype.remove) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return window.setTimeout(callback, 16);
    };
  }
}());
