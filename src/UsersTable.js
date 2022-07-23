import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const UsersTable = () => {
  const [usersData, setUsersData] = useState([]);
  const [sort, setSort] = useState('');
  const [sortColumn, setSortColumn] = useState();

  useEffect(() => {
    if (usersData !== undefined) {
      const data = api.get('users').then((response) => {
        setUsersData(response.data);
      });
    }
  }, [usersData]);

  return (
    <div id="usersTable">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
        <tbody>
          {usersData &&
            usersData.map((val, key) => {
              return (
                <tr>
                  <td key={key}>{val.id}</td>
                  <td key={key}>{val.name}</td>
                  <td key={key}>{val.username}</td>
                  <td key={key}>{val.email}</td>
                  <td key={key}>{val.website}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
