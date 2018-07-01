(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColResize = function () {
	function ColResize(table, options) {
		_classCallCheck(this, ColResize);

		this.table = table;
		this.heads = this.table.querySelectorAll('thead tr:first-child th');
		this.headsFixed = this.table.querySelectorAll('thead tr:first-child th[data-width]');
		this.options = Object.assign({}, ColResize.defaults, options);

		this.init();
	}

	_createClass(ColResize, [{
		key: 'init',
		value: function init() {
			this.setHeadsWidth();
			this.setTableClass();
		}
	}, {
		key: 'setHeadsWidth',
		value: function setHeadsWidth() {
			var _this = this;

			var tableWidth = this.table.parentElement.offsetWidth;

			console.log(tableWidth);
			console.log(this.headsFixed);

			this.headsFixed.forEach(function (head) {
				tableWidth -= head.attributes['data-width'].nodeValue;
			});

			console.log(tableWidth);

			this.heads.forEach(function (head) {
				/*if ( head.attributes['data-width'] ) {
    	let width = head.attributes['data-width'] ? head.attributes['data-width'].nodeValue : tableWidth / (this.heads.length - this.headsFixed.length);
    			head.style.width = `${width}px`
    }*/

				var width = head.attributes['data-width'] ? head.attributes['data-width'].nodeValue : tableWidth / (_this.heads.length - _this.headsFixed.length);

				head.style.width = width + 'px';
			});
		}
	}, {
		key: 'setTableClass',
		value: function setTableClass() {
			if (!this.options.isFit) {
				this.table.classList.add('table_width_full');
			}
		}
	}]);

	return ColResize;
}();

exports.default = ColResize;


ColResize.defaults = {
	minWidth: 80
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbFJlc2llLmpzIl0sIm5hbWVzIjpbIkNvbFJlc2l6ZSIsInRhYmxlIiwib3B0aW9ucyIsImhlYWRzIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRzRml4ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0cyIsImluaXQiLCJzZXRIZWFkc1dpZHRoIiwic2V0VGFibGVDbGFzcyIsInRhYmxlV2lkdGgiLCJwYXJlbnRFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImhlYWQiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwid2lkdGgiLCJsZW5ndGgiLCJzdHlsZSIsImlzRml0IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluV2lkdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lBRU1BLFM7QUFDTCxvQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFDM0IsT0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0UsS0FBTCxHQUFhLEtBQUtGLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEIseUJBQTVCLENBQWI7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLEtBQUtKLEtBQUwsQ0FBV0csZ0JBQVgsQ0FBNEIscUNBQTVCLENBQWxCO0FBQ0EsT0FBS0YsT0FBTCxHQUFlSSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsVUFBVVEsUUFBNUIsRUFBc0NOLE9BQXRDLENBQWY7O0FBRUEsT0FBS08sSUFBTDtBQUNBOzs7O3lCQUVNO0FBQ04sUUFBS0MsYUFBTDtBQUNBLFFBQUtDLGFBQUw7QUFDQTs7O2tDQUVlO0FBQUE7O0FBQ2YsT0FBSUMsYUFBYSxLQUFLWCxLQUFMLENBQVdZLGFBQVgsQ0FBeUJDLFdBQTFDOztBQUVBQyxXQUFRQyxHQUFSLENBQVlKLFVBQVo7QUFDQUcsV0FBUUMsR0FBUixDQUFZLEtBQUtYLFVBQWpCOztBQUVBLFFBQUtBLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCLGdCQUFRO0FBQy9CTCxrQkFBY00sS0FBS0MsVUFBTCxDQUFnQixZQUFoQixFQUE4QkMsU0FBNUM7QUFDQSxJQUZEOztBQUlBTCxXQUFRQyxHQUFSLENBQVlKLFVBQVo7O0FBRUEsUUFBS1QsS0FBTCxDQUFXYyxPQUFYLENBQW1CLGdCQUFRO0FBQzFCOzs7OztBQU1BLFFBQUlJLFFBQVFILEtBQUtDLFVBQUwsQ0FBZ0IsWUFBaEIsSUFBZ0NELEtBQUtDLFVBQUwsQ0FBZ0IsWUFBaEIsRUFBOEJDLFNBQTlELEdBQTBFUixjQUFjLE1BQUtULEtBQUwsQ0FBV21CLE1BQVgsR0FBb0IsTUFBS2pCLFVBQUwsQ0FBZ0JpQixNQUFsRCxDQUF0Rjs7QUFFQUosU0FBS0ssS0FBTCxDQUFXRixLQUFYLEdBQXNCQSxLQUF0QjtBQUNBLElBVkQ7QUFXQTs7O2tDQUVlO0FBQ2YsT0FBSyxDQUFDLEtBQUtuQixPQUFMLENBQWFzQixLQUFuQixFQUEyQjtBQUMxQixTQUFLdkIsS0FBTCxDQUFXd0IsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsa0JBQXpCO0FBQ0E7QUFDRDs7Ozs7O2tCQUdhMUIsUzs7O0FBRWZBLFVBQVVRLFFBQVYsR0FBcUI7QUFDcEJtQixXQUFVO0FBRFUsQ0FBckIiLCJmaWxlIjoiY29sUmVzaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb2xSZXNpemUge1xyXG5cdGNvbnN0cnVjdG9yKHRhYmxlLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnRhYmxlID0gdGFibGU7XHJcblx0XHR0aGlzLmhlYWRzID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aCcpO1xyXG5cdFx0dGhpcy5oZWFkc0ZpeGVkID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aFtkYXRhLXdpZHRoXScpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgQ29sUmVzaXplLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnNldEhlYWRzV2lkdGgoKTtcclxuXHRcdHRoaXMuc2V0VGFibGVDbGFzcygpO1xyXG5cdH1cclxuXHJcblx0c2V0SGVhZHNXaWR0aCgpIHtcclxuXHRcdGxldCB0YWJsZVdpZHRoID0gdGhpcy50YWJsZS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHRhYmxlV2lkdGgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5oZWFkc0ZpeGVkKTtcclxuXHJcblx0XHR0aGlzLmhlYWRzRml4ZWQuZm9yRWFjaChoZWFkID0+IHtcclxuXHRcdFx0dGFibGVXaWR0aCAtPSBoZWFkLmF0dHJpYnV0ZXNbJ2RhdGEtd2lkdGgnXS5ub2RlVmFsdWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyh0YWJsZVdpZHRoKTtcclxuXHJcblx0XHR0aGlzLmhlYWRzLmZvckVhY2goaGVhZCA9PiB7XHJcblx0XHRcdC8qaWYgKCBoZWFkLmF0dHJpYnV0ZXNbJ2RhdGEtd2lkdGgnXSApIHtcclxuXHRcdFx0XHRsZXQgd2lkdGggPSBoZWFkLmF0dHJpYnV0ZXNbJ2RhdGEtd2lkdGgnXSA/IGhlYWQuYXR0cmlidXRlc1snZGF0YS13aWR0aCddLm5vZGVWYWx1ZSA6IHRhYmxlV2lkdGggLyAodGhpcy5oZWFkcy5sZW5ndGggLSB0aGlzLmhlYWRzRml4ZWQubGVuZ3RoKTtcclxuXHJcblx0XHRcdFx0aGVhZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YFxyXG5cdFx0XHR9Ki9cclxuXHJcblx0XHRcdGxldCB3aWR0aCA9IGhlYWQuYXR0cmlidXRlc1snZGF0YS13aWR0aCddID8gaGVhZC5hdHRyaWJ1dGVzWydkYXRhLXdpZHRoJ10ubm9kZVZhbHVlIDogdGFibGVXaWR0aCAvICh0aGlzLmhlYWRzLmxlbmd0aCAtIHRoaXMuaGVhZHNGaXhlZC5sZW5ndGgpO1xyXG5cclxuXHRcdFx0aGVhZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHNldFRhYmxlQ2xhc3MoKSB7XHJcblx0XHRpZiAoICF0aGlzLm9wdGlvbnMuaXNGaXQgKSB7XHJcblx0XHRcdHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGVfd2lkdGhfZnVsbCcpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sUmVzaXplO1xyXG5cclxuQ29sUmVzaXplLmRlZmF1bHRzID0ge1xyXG5cdG1pbldpZHRoOiA4MFxyXG59OyJdfQ==
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.classList = exports.table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colResie = require('./_table.js/colResie');

var _colResie2 = _interopRequireDefault(_colResie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
	function Table() {
		_classCallCheck(this, Table);

		this.tables = document.querySelectorAll('.table-js');

		this.init();
	}

	_createClass(Table, [{
		key: 'init',
		value: function init() {
			this.tables.forEach(function (table) {
				var colResizeOptions = JSON.parse(table.attributes['data-bem'].nodeValue);
				new _colResie2.default(table, colResizeOptions.table.colResize || {});

				table.classList.remove('table-js');
			});
		}
	}]);

	return Table;
}();

var table = new Table();
var classList = {
	INIT_CLASS: 'table-js'
};

exports.table = table;
exports.classList = classList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbIlRhYmxlIiwidGFibGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdCIsImZvckVhY2giLCJjb2xSZXNpemVPcHRpb25zIiwiSlNPTiIsInBhcnNlIiwidGFibGUiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwiQ29sUmVzaXplIiwiY29sUmVzaXplIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiSU5JVF9DTEFTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUNBOzs7Ozs7OztJQUVNQSxLO0FBQ0wsa0JBQWM7QUFBQTs7QUFDYixPQUFLQyxNQUFMLEdBQWNDLFNBQVNDLGdCQUFULENBQTBCLFdBQTFCLENBQWQ7O0FBRUEsT0FBS0MsSUFBTDtBQUNBOzs7O3lCQUVNO0FBQ04sUUFBS0gsTUFBTCxDQUFZSSxPQUFaLENBQW9CLGlCQUFTO0FBQzVCLFFBQUlDLG1CQUFtQkMsS0FBS0MsS0FBTCxDQUFXQyxNQUFNQyxVQUFOLENBQWlCLFVBQWpCLEVBQTZCQyxTQUF4QyxDQUF2QjtBQUNBLFFBQUlDLGtCQUFKLENBQWNILEtBQWQsRUFBcUJILGlCQUFpQkcsS0FBakIsQ0FBdUJJLFNBQXZCLElBQW9DLEVBQXpEOztBQUVBSixVQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixVQUF2QjtBQUNBLElBTEQ7QUFNQTs7Ozs7O0FBR0YsSUFBTU4sUUFBUSxJQUFJVCxLQUFKLEVBQWQ7QUFDQSxJQUFNYyxZQUFZO0FBQ2pCRSxhQUFZO0FBREssQ0FBbEI7O1FBSVFQLEssR0FBQUEsSztRQUFPSyxTLEdBQUFBLFMiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBDb2xSZXNpemUgZnJvbSAnLi9fdGFibGUuanMvY29sUmVzaWUnO1xyXG5cclxuY2xhc3MgVGFibGUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy50YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUtanMnKTtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnRhYmxlcy5mb3JFYWNoKHRhYmxlID0+IHtcclxuXHRcdFx0bGV0IGNvbFJlc2l6ZU9wdGlvbnMgPSBKU09OLnBhcnNlKHRhYmxlLmF0dHJpYnV0ZXNbJ2RhdGEtYmVtJ10ubm9kZVZhbHVlKTtcclxuXHRcdFx0bmV3IENvbFJlc2l6ZSh0YWJsZSwgY29sUmVzaXplT3B0aW9ucy50YWJsZS5jb2xSZXNpemUgfHwge30pO1xyXG5cclxuXHRcdFx0dGFibGUuY2xhc3NMaXN0LnJlbW92ZSgndGFibGUtanMnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdGFibGUgPSBuZXcgVGFibGUoKTtcclxuY29uc3QgY2xhc3NMaXN0ID0ge1xyXG5cdElOSVRfQ0xBU1M6ICd0YWJsZS1qcydcclxufTtcclxuXHJcbmV4cG9ydCB7dGFibGUsIGNsYXNzTGlzdH07Il19
},{"./_table.js/colResie":1}],3:[function(require,module,exports){
"use strict";

var _table = require("../blocks/table/table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFibGUgZnJvbSBcIi4uL2Jsb2Nrcy90YWJsZS90YWJsZVwiO1xuIl19
},{"../blocks/table/table":2}]},{},[3])