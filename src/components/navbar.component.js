import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light navbar-expand-sm">
        <Link to="/meme-list" className="navbar-brand">X-Meme</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create-meme" className="nav-link">Create Meme</Link>
          </li>
          <li className="navbar-item">
          <Link to="/meme-list" className="nav-link">Memes List</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
