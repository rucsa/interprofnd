import React from 'react'; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Cover = () => {
    return (

<div className="page-header header-filter" data-parallax="true">
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h1 className="title cover-title">InterProfND</h1>
          <h4 className="cover-subtitle">Servicii profesionale de reparații electronice.<br/>Vânzare echipamente de protecție pentru aparatura electronică.</h4>
          <AnchorLink offset={() => 100} href='#about' className="btn btn-info btn-raised btn-lg">
            <i className="material-icons">drag_indicator</i> Află mai multe
            </AnchorLink>
          <span> </span>
          <AnchorLink offset={() => 20} href='#form' className="btn btn-rose btn-raised btn-lg">
            <i className="material-icons">call</i> Contacteaza-ne
          </AnchorLink>
        </div>
      </div>
    </div>
  </div>


    );
}
export default Cover;