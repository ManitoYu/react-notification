import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import './NotificationsList.scss'

import {
  Notification
} from '../'

export default class NotificationsList extends Component {
  render() {
    const { notifications, onDone } = this.props

    return (
      <div className="NotificationsList">
      {
        _.map(notifications, (n, i) =>
          <Notification key={i} {...n} />
        )
      }
      </div>
    )
  }
}

NotificationsList.propTypes = {
  notifications: PropTypes.array
}
