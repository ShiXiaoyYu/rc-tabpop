webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tooltip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tooltip/assets/bootstrap_white.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var text = _react2.default.createElement(
	  'span',
	  null,
	  '\u63D0\u793A\u6587\u5B57'
	);
	var styles = {
	  display: 'inline-block',
	  lineHeight: '40px',
	  height: '40px',
	  width: '80px',
	  textAlign: 'center',
	  background: '#f6f6f6',
	  marginRight: '1em',
	  marginBottom: '1em',
	  borderRadius: '6px'
	};
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'left',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u5DE6\u8FB9'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'top',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0A\u8FB9'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'bottom',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0B\u8FB9'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'right',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u53F3\u8FB9'
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'leftTop',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u5DE6\u4E0A'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'leftBottom',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u5DE6\u4E0B'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'rightTop',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u53F3\u4E0A'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'rightBottom',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u53F3\u4E0B'
	        )
	      ),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'topLeft',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0A\u5DE6'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'topRight',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0A\u53F3'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'bottomLeft',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0B\u5DE6'
	        )
	      ),
	      _react2.default.createElement(
	        _rcTooltip2.default,
	        {
	          placement: 'bottomRight',
	          overlay: text,
	          arrowContent: _react2.default.createElement('div', { className: 'rc-tooltip-arrow-inner' })
	        },
	        _react2.default.createElement(
	          'a',
	          { href: '#', style: styles },
	          '\u4E0B\u53F3'
	        )
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=arrowContent.js.map