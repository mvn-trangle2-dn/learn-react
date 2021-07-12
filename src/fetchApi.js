import React, { useState, useEffect } from 'react';

const FetchApi = () => {

  const [listUser, setListUser] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [listPage, setListPage] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json()).then(res => {
      setListUser(res.data);
      setTotalPage(res.total_pages);
    });
  }, [page]);

  useEffect(() => {
    let list = [];
    for (let i = 1; i <= totalPage; i++) {
      list.push(i);
    }
    setListPage(list);
  }, [totalPage]);

  function nextPage() {
    if (page < totalPage) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function onChangePage(e) {
    setPage(e);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          { 
            listUser.length
            ? listUser.map((user) =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td><img src={user.avatar}/></td>
              </tr>
            ): <tr><td className="txt-center" colSpan="5">No user information</td></tr>
          }
        </tbody>
      </table>
      <ul className="pagination d-flex justify-center">
        <li className="paginate-item"><button onClick={prevPage} disabled={page === 1}>&laquo;</button></li>
        {
          listPage.map(x =>
            <li className="paginate-item" key={x}>
              <button className={x == page ? 'active' : ''} onClick={() => onChangePage(x)}>{x}</button>
            </li>
          )
        }
        <li className="paginate-item"><button onClick={nextPage} disabled={page === totalPage}>&raquo;</button></li>
      </ul>
    </>
  );
}

export default FetchApi;
