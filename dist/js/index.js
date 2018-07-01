(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Btn = function () {
	function Btn() {
		_classCallCheck(this, Btn);

		this.buttons = document.querySelectorAll('.btn-js');

		this.init();
	}

	_createClass(Btn, [{
		key: 'init',
		value: function init() {
			this.addEventListener();
			this.buttons.forEach(function (button) {
				button.classList.remove('btn-js');
			});
		}
	}, {
		key: 'addEventListener',
		value: function addEventListener() {
			this.buttons.forEach(function (element) {
				element.addEventListener('click', function (event) {
					Btn.stopEventClick(event, element);
				});
			});
		}
	}], [{
		key: 'stopEventClick',
		value: function stopEventClick(event, element) {
			if (element.classList.contains('btn_disabled')) {
				event.preventDefault();
			}
		}
	}]);

	return Btn;
}();

var btn = new Btn();

exports.default = btn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyJdLCJuYW1lcyI6WyJCdG4iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiYnV0dG9uIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZWxlbWVudCIsImV2ZW50Iiwic3RvcEV2ZW50Q2xpY2siLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0IiwiYnRuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztJQUVNQSxHO0FBQ0wsZ0JBQWM7QUFBQTs7QUFDYixPQUFLQyxPQUFMLEdBQWVDLFNBQVNDLGdCQUFULENBQTBCLFNBQTFCLENBQWY7O0FBRUEsT0FBS0MsSUFBTDtBQUNBOzs7O3lCQUVNO0FBQ04sUUFBS0MsZ0JBQUw7QUFDQSxRQUFLSixPQUFMLENBQWFLLE9BQWIsQ0FBcUIsa0JBQVU7QUFDOUJDLFdBQU9DLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0EsSUFGRDtBQUdBOzs7cUNBUWtCO0FBQ2xCLFFBQUtSLE9BQUwsQ0FBYUssT0FBYixDQUFxQixtQkFBVztBQUMvQkksWUFBUUwsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ00sS0FBRCxFQUFXO0FBQzVDWCxTQUFJWSxjQUFKLENBQW1CRCxLQUFuQixFQUEwQkQsT0FBMUI7QUFDQSxLQUZEO0FBR0EsSUFKRDtBQUtBOzs7aUNBWnFCQyxLLEVBQU9ELE8sRUFBUztBQUNyQyxPQUFLQSxRQUFRRixTQUFSLENBQWtCSyxRQUFsQixDQUEyQixjQUEzQixDQUFMLEVBQWtEO0FBQ2pERixVQUFNRyxjQUFOO0FBQ0E7QUFDRDs7Ozs7O0FBV0YsSUFBTUMsTUFBTSxJQUFJZixHQUFKLEVBQVo7O2tCQUVlZSxHIiwiZmlsZSI6ImJ0bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEJ0biB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpzJyk7XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XHJcblx0XHR0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWpzJyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzdG9wRXZlbnRDbGljayhldmVudCwgZWxlbWVudCkge1xyXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnRuX2Rpc2FibGVkJykgKSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRFdmVudExpc3RlbmVyKCkge1xyXG5cdFx0dGhpcy5idXR0b25zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRCdG4uc3RvcEV2ZW50Q2xpY2soZXZlbnQsIGVsZW1lbnQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGJ0biA9IG5ldyBCdG4oKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ0bjsiXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _btn = require("../blocks/btn/btn");

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnRuIGZyb20gXCIuLi9ibG9ja3MvYnRuL2J0blwiO1xuIl19
},{"../blocks/btn/btn":1}]},{},[2])