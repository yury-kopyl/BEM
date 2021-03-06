(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _btn = require('./btn.json');

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Btn = function () {
	function Btn() {
		_classCallCheck(this, Btn);

		this.buttons = document.querySelectorAll('.' + _btn2.default.INIT_CLASS);

		this.init();
	}

	_createClass(Btn, [{
		key: 'init',
		value: function init() {
			this.addEventListener();
			this.buttons.forEach(function (button) {
				button.classList.remove('.' + _btn2.default.INIT_CLASS);
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
			if (element.classList.contains('.' + _btn2.default.DISABLED_CLASS)) {
				event.preventDefault();
			}
		}
	}]);

	return Btn;
}();

var btn = new Btn();

exports.default = btn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyJdLCJuYW1lcyI6WyJCdG4iLCJidXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiSU5JVF9DTEFTUyIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9yRWFjaCIsImJ1dHRvbiIsInJlbW92ZSIsImVsZW1lbnQiLCJldmVudCIsInN0b3BFdmVudENsaWNrIiwiY29udGFpbnMiLCJESVNBQkxFRF9DTEFTUyIsInByZXZlbnREZWZhdWx0IiwiYnRuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFTUEsRztBQUNMLGdCQUFjO0FBQUE7O0FBQ2IsT0FBS0MsT0FBTCxHQUFlQyxTQUFTQyxnQkFBVCxPQUE4QkMsY0FBVUMsVUFBeEMsQ0FBZjs7QUFFQSxPQUFLQyxJQUFMO0FBQ0E7Ozs7eUJBRU07QUFDTixRQUFLQyxnQkFBTDtBQUNBLFFBQUtOLE9BQUwsQ0FBYU8sT0FBYixDQUFxQixrQkFBVTtBQUM5QkMsV0FBT0wsU0FBUCxDQUFpQk0sTUFBakIsT0FBNEJOLGNBQVVDLFVBQXRDO0FBQ0EsSUFGRDtBQUdBOzs7cUNBUWtCO0FBQ2xCLFFBQUtKLE9BQUwsQ0FBYU8sT0FBYixDQUFxQixtQkFBVztBQUMvQkcsWUFBUUosZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0ssS0FBRCxFQUFXO0FBQzVDWixTQUFJYSxjQUFKLENBQW1CRCxLQUFuQixFQUEwQkQsT0FBMUI7QUFDQSxLQUZEO0FBR0EsSUFKRDtBQUtBOzs7aUNBWnFCQyxLLEVBQU9ELE8sRUFBUztBQUNyQyxPQUFLQSxRQUFRUCxTQUFSLENBQWtCVSxRQUFsQixPQUErQlYsY0FBVVcsY0FBekMsQ0FBTCxFQUFrRTtBQUNqRUgsVUFBTUksY0FBTjtBQUNBO0FBQ0Q7Ozs7OztBQVdGLElBQU1DLE1BQU0sSUFBSWpCLEdBQUosRUFBWjs7a0JBRWVpQixHIiwiZmlsZSI6ImJ0bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBjbGFzc0xpc3QgZnJvbSAnLi9idG4uanNvbic7XHJcblxyXG5jbGFzcyBCdG4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5idXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NMaXN0LklOSVRfQ0xBU1N9YCk7XHJcblxyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XHJcblx0XHR0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZShgLiR7Y2xhc3NMaXN0LklOSVRfQ0xBU1N9YCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzdG9wRXZlbnRDbGljayhldmVudCwgZWxlbWVudCkge1xyXG5cdFx0aWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgLiR7Y2xhc3NMaXN0LkRJU0FCTEVEX0NMQVNTfWApICkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkRXZlbnRMaXN0ZW5lcigpIHtcclxuXHRcdHRoaXMuYnV0dG9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0QnRuLnN0b3BFdmVudENsaWNrKGV2ZW50LCBlbGVtZW50KTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBidG4gPSBuZXcgQnRuKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidG47Il19
},{"./btn.json":2}],2:[function(require,module,exports){
module.exports={
	"INIT_CLASS":     "btn-js",
	"DISABLED_CLASS": "btn_disabled"
}
},{}],3:[function(require,module,exports){
"use strict";

var _btn = require("../blocks/btn/btn");

var _btn2 = _interopRequireDefault(_btn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnRuIGZyb20gXCIuLi9ibG9ja3MvYnRuL2J0blwiO1xuIl19
},{"../blocks/btn/btn":1}]},{},[3])