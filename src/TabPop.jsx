import RcTabs from 'rc-tabs';
import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {Icon, Popover } from 'antd';
import 'antd/lib/tabs/style';
import Trigger from 'rc-trigger'
export default class Tabs extends React.Component {
  static TabPane = RcTabs.TabPane;

  static defaultProps = {
    prefixCls: 'ant-tabs',
    animation: 'slide-horizontal',
    type: 'line', // or 'card' 'editable-card'
    onChange() {},
    onEdit() {},
    hideAdd: false,
    popupConfirm() {}
  }
  state={
    popupVisible: false
  }
  createNewTab = (targetKey) => {
    this.props.onEdit(targetKey, 'add');
  }

  removeTab = (targetKey, e) => {
    e.stopPropagation();
    if (!targetKey) {
      return;
    }
    this.props.onEdit(targetKey, 'remove');
  }

  handleChange = (activeKey) => {
    this.props.onChange(activeKey);
  }

  render() {
    let { prefixCls, size, tabPosition, animation, type,
          children, tabBarExtraContent, hideAdd } = this.props;
    let className = classNames({
      [this.props.className]: !!this.props.className,
      [`${prefixCls}-mini`]: size === 'small' || size === 'mini',
      [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
      [`${prefixCls}-card`]: type.indexOf('card') >= 0,
      [`${prefixCls}-${type}`]: true,
    });
    if (tabPosition === 'left' || tabPosition === 'right' || type.indexOf('card') >= 0) {
      animation = null;
    }
    // only card type tabs can be added and closed
    let childrenWithCross;
    if (type === 'editable-card') {
      childrenWithCross = [];
      React.Children.forEach(children, (child, index) => {
        childrenWithCross.push(cloneElement(child, {
          tab: (
            <Trigger 
              action={['click']}
              key={index}
              popupStyle={{
                width: 140,
                height: 100,
                border: '1px solid #d9d9d9',
                background: 'white',
                borderRadius: 8,
                boxShadow: '0 1px 6px rgba(0,0,0,.2)',
                display: this.state[`${index}popupVisible`] ? 'block' : 'none'
              }}
              popupVisible={this.state[`${index}popupVisible`]}
              popup={
                <div
                  style={{
                    borderRadius: 5,
                    backgroundColor: 'white',
                    color: 'rgb(51, 51, 51)'
                }}>
                <p
                  style={{
                    paddingLeft: 20,
                    boxSizing: 'border-box',
                    marginTop: 20,
                    marginBottom: 20
                  }}
                >确定要删除吗</p>
                <ul
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                  }}
                >
                  <li
                  >
                    <button
                      style={{
                        width: 50,
                        height: 24,
                        backgroundColor: 'white',
                        border: '1px solid #d9d9d9',
                        color: 'rgba(0,0,0,.65)',
                        textAlign: 'center',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        borderRadius: 4
                      }}
                      type="button"
                      onClick={
                        () => {
                          this.setState({[`${index}popupVisible`]: false});
                        }
                      }
                    >取消
                    </button>
                  </li>
                  <li
                  >
                    <button
                      style={{
                        width: 50,
                        height: 24,
                        backgroundColor: 'white',
                        border: '1px solid #d9d9d9',
                        color: 'rgba(0,0,0,.65)',
                        textAlign: 'center',
                        lineHeight: 1.5,
                        fontWeight: 500,
                        borderRadius: 4
                      }}
                      type="button"
                      onClick={
                        () => {
                          this.props.popupConfirm();//点击确定方法
                          this.setState({[`${index}popupVisible`]: false});
                        }
                      }
                    >确定
                    </button>
                  </li>
                </ul>
                </div>
              }
              popupAlign={{
                points: ['br', 'tr'],
                offset: [0, 3]
              }}
              >
            <div>
              {child.props.tab}
                <Icon type="cross" onClick={(e) => {
                  //e.stopPropagation();
                  this.setState({[`${index}popupVisible`]: true});
                  this.removeTab(child.key, e)}
                } />
            </div>
            </Trigger>
          ),
          key: child.key || index,
        }));
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = (
          <span>
            <Icon type="plus" className={`${prefixCls}-new-tab`} onClick={this.createNewTab} />
            {tabBarExtraContent}
          </span>
        );
      }
    }

    tabBarExtraContent = tabBarExtraContent ? (
      <div className={`${prefixCls}-extra-content`}>
        {tabBarExtraContent}
      </div>
    ) : null;

    return (
      <RcTabs {...this.props}
        className={className}
        tabBarExtraContent={tabBarExtraContent}
        onChange={this.handleChange}
        animation={animation}
        popupBox={
            <div
              style={{
                width: 100,
                height: 70,
                border: '1px solid gray',
                borderRadius: 5,
                backgroundColor: 'white',
                color: '#333333'
            }}>
            <p>确定要删除吗</p>
            <ul>
              <li
                style={{
                  display: 'inlineblock'
                }}
              >
                <input
                  type="button"
                  value="取消"
                  onClick={
                    () => {
                      this.setState({[`${index}popupVisible`]: false});
                    }
                  }
                />
              </li>
              <li
                style={{
                  display: 'inlineblock'
                }}
                type="button"
                value="确定"
                onClick={
                  () => {
                    this.props.popupConfirm();//点击确定方法
                    this.setState({[`${index}popupVisible`]: false});
                  }
                }
              >
                <input type='button' />
              </li>
            </ul>
            <span
              onClick={() => {
                this.setState({[`${index}popupVisible`]: false});
              }}
              style={{
                width: 50,
                height: 50,
                border: '1px solid red'
              }}
            >
            popup</span>
            </div>
        }
      >
        {childrenWithCross || children}
      </RcTabs>
    );
  }
}
