import React from 'react'; 

const Nav = props => {
    return (

<nav className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <a href="#" className="nav-link" data-toggle="dropdown">
              <i className="material-icons">fingerprint</i> Despre noi
            </a>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="nav-link" data-toggle="dropdown">
              <i className="material-icons">build</i> Servicii
            </a>
          </li>
          <li className="button-container nav-item iframe-extern">
            <a href="#" target="_blank" className="btn  btn-rose   btn-round btn-block">
              <i className="material-icons">call</i> Contacteaza-ne
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Nav;