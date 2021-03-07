import React from 'react'; 

const Form = (props) => {
    return (
        <div className="section section-contacts" id='form'>
	        <div className="row">
	          <div className="ml-auto mr-auto">
	            <h2 className="text-center title">Contactează-ne</h2>
	            <form className="contact-form">
	              <div className="row">
	                <div className="col-md-12">
	                  <div className="form-group">
					  	<h4 className="text-center centered-text">Pentru a stabili o programare sau pentru orice alte nelămuriri sună-ne sau lasă-ne un mesaj și revenim noi în cel mai scurt timp.</h4>
						<div className="text-action">
							<a href="tel:+40721090222"><h4 className="text-center"><i className="material-icons red-icon">call</i>+4 0721  090 222</h4></a>
						</div>
						<h4 className="text-center">Luni - Vineri: 08:00 - 18:00</h4>
					  	<h3 className="text-center text-localizare">Bucuresti, Sector 6</h3>
	          </div>
	                </div>
	                {/* <div className="col-md-6 text-left">
	                  <div className="form-group">
					  	<label className="bmd-label-floating">Nume</label>
	                    <input type="email" className="form-control"/>
	                    <label className="bmd-label-floating">Telefon</label>
	                    <input type="email" className="form-control"/>
						<label htmlFor="exampleMessage" className="bmd-label-floating">Mesaj</label>
	                	<textarea type="email" className="form-control" rows="4" id="exampleMessage"></textarea>
						<div className="text-center">
							<button className="btn btn-rose btn-raised">Trimite</button>
						</div>
	                  </div>
	                </div> */}
	              </div>
	            </form>
	          </div>
	        </div>
	      </div>
    );
}

export default Form;