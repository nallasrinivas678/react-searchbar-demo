import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import UsersTable from './UsersTable';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users !== undefined) {
      const data = api.get('users').then((response) => {
        setUsers(response.data);
      });
    }
  }, [users]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>Users Data</h1>
      <input
        type="search"
        placeholder="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {users &&
        users
          .filter((val) => {
            if (searchTerm == '') {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
      <hr />
      <UsersTable />
    </div>
  );
}
