webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTooltip = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tooltip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-tooltip/assets/bootstrap.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function preventDefault(e) {
	  e.preventDefault();
	}
	
	var Test = _react2.default.createClass({
	  displayName: 'Test',
	  getInitialState: function getInitialState() {
	    return {
	      visible: false
	    };
	  },
	  onVisibleChange: function onVisibleChange(visible) {
	    this.setState({
	      visible: visible
	    });
	  },
	  onDestroy: function onDestroy() {
	    this.setState({
	      destroy: true
	    });
	  },
	  render: function render() {
	    if (this.state.destroy) {
	      return null;
	    }
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { marginTop: 300, marginLeft: 100, marginBottom: 100 } },
	        _react2.default.createElement(
	          _rcTooltip2.default,
	          {
	            visible: this.state.visible,
	            animation: 'zoom',
	            onVisibleChange: this.onVisibleChange,
	            trigger: 'click',
	            overlay: _react2.default.createElement(
	              'span',
	              null,
	              'i am a tooltip'
	            )
	          },
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: preventDefault },
	            'trigger'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.onDestroy },
	        'destroy'
	      )
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=onVisibleChange.js.map