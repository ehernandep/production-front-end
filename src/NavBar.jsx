import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h1>holaa</h1>
      <nav>
        <ul>
          <li>
            <Link to='/cultivo'>Seguimieto cultivo</Link>
          </li>
          <li>
            <Link to='/parcelas'>Parcelas</Link>
          </li>
          <li>
            <Link to='/semillas'>Semillas</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
