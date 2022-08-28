import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    Rick and Morty
    <div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  </header>
);

export default Header;
