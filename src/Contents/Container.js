import React from 'react'; 
import About from './About'
import Form from './Form'

const Container = props => {

	return (
	<div className="main main-raised">
	    <div className="container">
	      <div className="section">
	      <About />
	        <div className="features text-center" id='service'>
	        	<h2 className="title">Cum te putem ajuta</h2>
						<h4>Reparăm monitoare, unități de calcul, servere, cântare electronice (făra intervenție in sistemul de măsură și calibrare) și oferim împământări profesionale. Completăm serviciile prin oferirea de soluții de prevenție prin implementarea</h4>
						<h4>ECHIPAMENTULUI INTELIGENT DE SUPRAVEGHERE ȘI INTERVENȚIE CONTROLATĂ. </h4>
				<div className="row">
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card-body">
							<div className="styled-div_1">
							</div>
						</div>
					</div>
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card-body">
							<a href="#pablo">
								<h3 className="card-title">{'Service'}</h3>
							</a>
							<p className="card-description">
						  Ne place să ne diferențiem prin oferirea de servicii de încredere și tratăm fiecare asistență cu seriozitate.
							Ne mândrim cu experința noastră și 
							ne place să vă facem recomandări cu privire la soluționarea cauzelor 
							astfel încat defecțiunile să nu se mai repete. Suntem de părere că întodeuna când apar probleme în funcționarea echipamentelor eletronice 
							trebuie înlăturată cauza, nu numai piesele defecte. 
							</p>
            </div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card-body">
							<a href="#pablo">
								<h3 className="card-title">{'Prevenție'}</h3>
							</a>
							<p className="card-description">							
							Durata de bună funcționare a unor echipamente electronice poate fi mărita considerabil 
							dacă s-ar ține seama de calitatea sursei de energie electrică utilizată în alimentarea lor. 
							În marea majoritate a locațiilor din țară puterea instalată este depașită în anumite 
							perioade de timp de puterea consumată, drept consecință apar în rețea fluctuații de tensiune, 
							șocuri de curenți și întreruperi de scurtă sau lungă durată. 
							Astfel echipamentele electronice sunt afectate din punct de vedere funcțional.
							</p>
						</div>
					</div>
					<div className="col-md-6 ml-auto mr-auto">
						<div className="card-body">
							<div className="styled-div_2">
							</div>
            			</div>
					</div>
				</div>
				<div className="text-center">
					<h4>Oferim spre vânzare echipamente de prevenție pentru calculatoare, servere, monitoare și cântare electronice.
					</h4>
				</div>
	        </div>
			<div className="features text-center">
				<h2 className="title">Cum lucrăm</h2>
				<div className="row process-card cum-lucram">
					<div className="col-md-3 ml-auto mr-auto">
						<i className="material-icons blue-icon">chat</i>
						<h3 className="card-title">Ne contactezi</h3>
						<p className="description">
							Primul pas este să ne contactezi la numărul de telefon de mai jos!  
							Așa discutăm problema și 
							decidem împreună tipul de evaluare potrivită, plata și prețul serviciilor.
						</p>
					</div>
					<div className="col-md-3 ml-auto mr-auto">
						<i className="material-icons blue-icon">assignment</i>
						<h3 className="card-title">Evaluăm</h3>
						<p className="description">
						Evaluarea se face  în unele cazuri la telefon sau la fața locului. Îți vom pune câteva întrebări simple pentru a descoperi problema.
						</p>
					</div>
					<div className="col-md-3 ml-auto mr-auto">
						<i className="material-icons blue-icon">build</i>
						<h3 className="card-title">Intervenim</h3>
						<p className="description">
						În timpul stabilit de comun acord venim la fața locului pentru reparații sau instalarea echipamentului de prevenție.
						</p>
					</div>
					<div className="col-md-3 ml-auto mr-auto">
						<i className="material-icons red-icon">done</i>
						<h3 className="card-title">Garantăm lucrarea</h3>
						<p className="description">
						Iți oferim 12 luni garanție la echipamentele inteligente de protecție și intervenție controlată. În caz de apar probleme, ne găsești la un apel distanță. 
						</p>
					</div>
				</div>
			</div>
	      </div>
		  <Form />
	    </div>
	  </div>
  );
}

export default Container;