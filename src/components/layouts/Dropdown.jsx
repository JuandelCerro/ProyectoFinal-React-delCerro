import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <>
          <li className="nav-item dropdown">
            <Link className="listDropdown nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">¿Qué comemos hoy?</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to={`/categoria/1`}>{lista[0]}</Link>
              <Link className="dropdown-item" to={`/categoria/2`}>{lista[1]}</Link>
              <Link className="dropdown-item" to={`/categoria/3`}>{lista[2]}</Link>
              <Link className="dropdown-item" to={`/categoria/4`}>{lista[3]}</Link>
            </div>
          </li>  
        </>
    );
}

export default Dropdown;
