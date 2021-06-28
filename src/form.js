import React, { Component } from "react";
import UserRow from './userRow';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inforUser: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        other: ''
      },
      listUser: [],
      id: 0
    }
  }

  handleChange = (e) => {
    this.setState(prevState => ({
        inforUser: {
          ...prevState.inforUser,
          [e.target.name]: e.target.value
        }
    }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.state.id += 1
    this.setState(prevState => ({
        listUser: [...prevState.listUser,{...this.state.inforUser, id: this.state.id}]
    }))
  }

  removeUser = (id) => {
    this.setState({
      listUser: this.state.listUser.filter(user => user.id != id)
    })
  }

  render() {
    const form = this.state.inforUser
    const {listUser} = this.state
    return (
      <div className="d-flex align-start justify-between">
        <form onSubmit={this.onSubmit} className="col-3">
          <h2 className="text-center">Register Form</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input name="email" id="email" onChange={this.handleChange} type="text"/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input name="password" id="password" onChange={this.handleChange} type="password"/>
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <div className="form-select">
              <select name="country" onChange={this.handleChange}>
                <option value="">Please choose</option>
                <option value="VietNam">VietNam</option>
                <option value="Lao">Lao</option>
                <option value="Thai Lan">America</option>
                <option value="Campuchia">Japan</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Gender</label>
            <div className="form-radio">
              <input checked={form.gender == 0} name="gender" id="male" value='0' onChange={this.handleChange} type="radio" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input checked={form.gender == 1} name="gender" id="female" value='1' onChange={this.handleChange} type="radio" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea onChange={this.handleChange} name="other" cols="30" rows="5"></textarea>
          </div>
          <button className="btn btn-submit" type="submit">Submit</button>
        </form>
        <table className="col-6">
          <thead>
            <tr>
              <th>STT</th>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Other Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listUser.length
              ? listUser.map((user) =>
                <UserRow key={user.id} user={user} onRemoveUser={this.removeUser}/>)
              : <tr><td className="txt-center" colSpan="6">No user information</td></tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}
