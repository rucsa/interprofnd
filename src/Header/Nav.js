import React, { Component } from 'react'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Nav extends Component {
  state = {
    isTop: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY > 600;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  };

  render () {
    return (

<nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="collapse navbar-collapse">
        <ul className={this.state.isTop ? "navbar-nav ml-auto nav-dark" : "navbar-nav ml-auto" } >
          <li className="dropdown nav-item">
            <AnchorLink offset={() => 100} href='#about' className="nav-link">
              <i className="material-icons">fingerprint</i> Despre noi
            </AnchorLink>
          </li>
          <li className="dropdown nav-item">
            <AnchorLink offset={() => 100} href='#service' className="nav-link">
              <i className="material-icons">build</i> Servicii
            </AnchorLink>
          </li>
          <li className="button-container nav-item iframe-extern">
            <AnchorLink offset={() => 20} href='#form' className="btn  btn-rose   btn-round btn-block">
              <i className="material-icons">call</i> Contactează-ne
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )};
}

export default Nav;