import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};  

export interface MenuProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  toggleSidebar?: () => void;
  handleMenuBtnChange?: () => void;
  isOpen?: boolean;
  handleItemClick: (index: number) => void;
}

export const Menu = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  toggleSidebar,
  handleMenuBtnChange,
  isOpen = true,
  handleItemClick,
}: MenuProps) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <ul className="nav-list">
      {[
        { icon: "bx bx-grid-alt", name: "Dashboard" },
        { icon: "bx bx-search", name: "Explorador" },
        { icon: "bx bx-book-open", name: "Aprendizaje" },
        { icon: "bx bx-user", name: "Perfil" },
        { icon: "bx bx-bullseye", name: "Objetivos" },
        { icon: "bx bx-heart", name: "Comunidad" },
        { icon: "bx bx-loader-circle", name: "Evaluaciones" },
        { icon: "bx bx-briefcase-alt", name: "Oferta" },
      ].map((item, index) => (
        <li
          key={index}
          className={`li `}
          onClick={() => handleItemClick(index)}
        >
          <a href="#">
            <i className={item.icon}></i>
            <span className="links_name">{item.name}</span>
          </a>
          <span className="tooltip">{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);
