import {React, useState } from "react";

const FormHooks = () => {
  const [id, setId] = useState(1)
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      country: '',
      gender: 0,
      other: ''
    }
  );
  const [listUser, setListUser] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
      ...form,
      [name]: value
    });
  }

  function onSubmit(e) {
    e.preventDefault()
    setId(id + 1);
    setListUser([
      ...listUser,
      {...form, id}
    ]);
  }

  function removeUser(id) {
    setListUser(listUser.filter(user => user.id !== id));
  }

  return (
    <div className="d-flex align-start justify-between">
     <form onSubmit={onSubmit} className="col-3">
        <h2 className="text-center">Register Form</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address</label>
          <input name="email" id="email" onChange={handleChange} type="text"/>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input name="password" id="password" onChange={handleChange} type="password"/>
        </div>
        <div className="form-group">
          <label className="form-label">Your country</label>
          <div className="form-select">
            <select name="country" onChange={handleChange}>
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
            <input checked={form.gender === 0} name="gender" id="male" value='0' onChange={handleChange} type="radio" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-radio">
            <input checked={form.gender === 1} name="gender" id="female" value='1' onChange={handleChange} type="radio" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Other information</label>
          <textarea onChange={handleChange} name="other" cols="30" rows="5"></textarea>
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
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
                <td>{user.other}</td>
                <td>
                  <button onClick={() => removeUser(user.id)}>Remove</button>
                </td>
              </tr>
            ): <tr><td className="txt-center" colSpan="6">No user information</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default FormHooks;
