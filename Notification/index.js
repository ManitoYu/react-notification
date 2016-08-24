import React, { Component, PropTypes } from 'react'
import './Notification.scss'

import OkIcon from './assets/ok-icon.png'
import ErrorIcon from './assets/error-icon.png'

export default class Notification extends Component {
  render() {
    const { title, text, type } = this.props

    return (
      <div className={`Notification Notification--${type}`} ref="ele">
        <div className="Notification-icon">
          <img src={type == 'info' ? OkIcon : ErrorIcon} />
        </div>
        <div className="Notification-text">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

Notification.defaultProps = {
  title: '通知',
  text: '',
  type: 'info'
}

Notification.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['info', 'error'])
}
