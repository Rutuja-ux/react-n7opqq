import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const dummyFunc = () => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res, 'coming from .then')
  //   })
  // }
  // GET
  // POST
  // PUT
  // DELETE
  useEffect(() => {
    const asyncDemo = async () => {
      let result = await fetch("https://jsonplaceholder.typicode.com/users");
      result = await result.json();
      setUsers(result);
    };
    asyncDemo();
  }, []);
  const renderUsers = () => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredUsers.map(user => <div>{user.name}</div>);
  };
  return (
    <div>
      <h1>Search users</h1>
      <input
        type="search"
        onChange={event => setSearchValue(event.target.value)}
      />
      {renderUsers()}
    </div>
  );
}
