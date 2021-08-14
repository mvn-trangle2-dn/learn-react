import React, { Component } from 'react'

export default class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{user.other}</td>
        <td>
          <button className="btn-remove" onClick={() => this.props.onRemoveUser(user.id)}><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    )
  }
}
