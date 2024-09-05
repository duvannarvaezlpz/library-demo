import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  toggleSidebar?: () => void;
  handleMenuBtnChange?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  handleMenuBtnChange,
  toggleSidebar,
}: HeaderProps) => (
  <header>
    <div className="logo-details" onClick={toggleSidebar}>
      <i className={`bx bx-menu-alt-left`} id="btn"></i>
    </div>
    {/* <div className="">
      <i className="bx bx-menu" id="btn"></i>
    </div> */}

    <div className="logos">
      <img
        src="https://cdn.prod.website-files.com/62bbfb429eaf728cd08009f8/65aacf48bde4467e127570ba_logo-lapzo2-p-500.png"
        alt=""
      />
    </div>
    <div className="busqueda">
      <i className="bx bx-search"></i>
      <input className="search-input" placeholder="Comienza a buscar..." />
      <i className="bx bx-filter"></i>
    </div>

    <div className="items">
      <ul className="elements">
        <li>
          <a href="#">
            <i className="bx bx-bell"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-grid"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
);
