/** Dependencies */
import React from 'react';

/** Icons */
import SearchIcon from '../Icons/NavbarIcons/SearchIcon';
import SettingsIcon from '../Icons/NavbarIcons/SettingsIcon';
import InfoIcon from '../Icons/NavbarIcons/InfoIcon';
import BellIcon from '../Icons/NavbarIcons/BellIcon';
import PostIcon from '../Icons/NavbarIcons/PostIcon';

/** Styles */
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>GLOMİL</span>
      </div>
      <div className="navbar-search">
        <div className="search-container">
          <SearchIcon />
          <input type="text" placeholder="Kaynakları, hizmetleri ve belgeleri arayın" />
        </div>
      </div>
      <div className="navbar-links">
        <PostIcon />
        <SettingsIcon />
        <BellIcon />
        <InfoIcon />
      </div>
      <div className="navbar-user">
        <div className="navbar-user-name">
          <span>MURAT TUFAN</span>
          <a>murat.tufan@glomil.com</a>
        </div>
        <div className="navbar-avatar">MT</div>
      </div>
    </nav>
  );
};

export default Navbar;
