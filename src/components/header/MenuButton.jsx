import React from 'react';
import { icons } from "../../assets/data/constants"

const MenuButton = ({ isActive, toggleMenu }) => {
  return (
    <>
      <button className={`menu-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        <img alt='' className='icon32' src={icons.menu_list}/>
      </button>
    </>
  );
};

export default MenuButton;
