/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import CreateUser from './components/create-user';
import Users from './components/users';

function App() {
  return (
  <BrowserRouter>
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">React Axios Tutorial</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/create-user">Create User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-user' element={<CreateUser />} />
              <Route path='/users' element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
