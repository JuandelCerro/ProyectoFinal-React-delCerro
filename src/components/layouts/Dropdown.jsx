import {memo} from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <>
          <li className="nav-item dropdown">
            <Link className="listDropdown nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">¿Qué comemos hoy?</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to={`/categoria/clasicas`}>{lista[0]}</Link>
              <Link className="dropdown-item" to={`/categoria/especiales`}>{lista[1]}</Link>
              <Link className="dropdown-item" to={`/categoria/veggie`}>{lista[2]}</Link>
              <Link className="dropdown-item" to={`/categoria/otros`}>{lista[3]}</Link>
            </div>
          </li>  
        </>
    );
}

export default memo (Dropdown);
