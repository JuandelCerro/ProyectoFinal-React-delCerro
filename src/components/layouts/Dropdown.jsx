import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <>
          <li className="nav-item dropdown">
            <a className="listDropdown nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">¿Qué comemos hoy?</a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to={""}>{lista[0]}</Link>
              <Link className="dropdown-item" to={""}>{lista[1]}</Link>
              <Link className="dropdown-item" to={""}>{lista[2]}</Link>
              <Link className="dropdown-item" to={""}>{lista[3]}</Link>
            </div>
          </li>  
        </>
    );
}

export default Dropdown;
