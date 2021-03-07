import React from 'react'; 

const About = (props) => {
    return (
        <div className="row about-us" id='about'>
            <div className="col-md-8 ml-auto mr-auto">
            <h2 className="title">Despre Noi</h2>
            <h5 className="description">
                Activitatea firmei a luat naștere cu moțivatia de a oferi servicii de cea mai bună calitate.
                În marea majoritate a cazurilor servisarea echipamentelor electronice se rezumă la
                înlocuirea piesei defecte, fără a se analiza și îndepărta cauza.
                În timp defecțiunea se poate repeta.</h5>
            <h4 className="description"> Nouă nu ne place să ne întoarceam pe unde am mai trecut.</h4>
            <h5 className="description">
                Ne place să fim meticuloși și să vă facem recomandări detaliate 
                cu privire la cauzele și soluțiile defecțiunilor. 
                Experiența ne-a învățat că e mai sustenabil și economic să prevenim eventualele probleme.
                De aceea oferim consultanță și vânzare de echipamente de prevenție a defecțiunilor electronice.</h5>
            </div>
            <div className="col-md-4">
                <div className="about-us-pic"></div>
            </div>
        </div>
    );
}

export default About;