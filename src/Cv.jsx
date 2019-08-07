import React from 'react';
import './Cv.scss';

function Cv() {
  return(
    <div className="Cv">
      <h1>DÉVELOPPEUR WEB ET WEB MOBILE JAVASCRIPT/REACT/NODE.JS</h1>
      <div className="cv-texte">
        <div className="contact-propos">
          <div className="contact">
            <h2>CONTACT</h2>
            <p>31/07/1980</p>
            <p>06 18 01 02 46</p>
            <p>mathiastujague@gmail.com</p>
            <p>10 rue Saint-François,</p>
            <p>33000 Bordeaux</p>
            <p>https://github.com/Math80</p>
            <p>véhiculé / permis B</p>
          </div>
          <div className="propos">
            <h2>À PROPOS</h2>
            <p>Artiste plasticien de formation, très curieux
               de technologies et de développement web,
               j'ai décidé de me former à la Wild Code
               School durant cinq mois pour apprendre les
               rudiments de JavaScript/React et Node.js.
               Formé également aux méthodes agiles,
               notamment SCRUM, me voici plus que
               motivé pour intégrer une entreprise au sein
               d'une équipe de développeurs afin de
               monter en compétence.</p>
          </div>
        </div>

        <div className="formation-experience">
          <div className="formation">
            <h2>FORMATION</h2>
            <h3>WILD CODE SCHOOL</h3>
            <h4>Formation développeur web et web mobile</h4>
            <p>HTML5, CSS3, SCSS, JavaScript</p>
            <p>REACT/Node.js</p>
            <p>Git/GitHub</p>
            <p>Méthode Agile SCRUM</p>

            <h3>EBABX</h3>
            <h4>École Supérieur des Beaux-Arts de Bordeaux</h4>
            <p>DNSEP (Diplôme National d'Expression Plastique) 2009</p>
            <p>DNAP (Diplôme National d'Arts-Plastiques) 2007</p>

            <h3>STAPS</h3>
            <h4>Sciences et Techniques des Activités Physiques et Sportives</h4>
            <p>Licence STAPS 2001</p>
            <p>Brevet d'État d'éducateur sportif, Surf</p>
          </div>

          <div className="experience">
            <h2>EXPÉRIENCE</h2>
            <h3>WILD CODE SCHOOL</h3>
            <h4>Formation développeur web et web mobile React/Node.js</h4>
            <h5>Projet 1 : Trombinoscope</h5>
            <p>Réalisation d'un site statique "trombinoscope" pour la WCS</p>
            <p>(HTML5, CSS3, Git, GitHub, SCRUM)</p>
            <h5>Projet 2 : Le Petit Pêcheur</h5>
            <p>Réalisation d'un site vitrine pour un restaurant bistronomique</p>
            <p>(REACT, JavaScript, HTML5, CSS3, Git, GitHub, SCRUM)</p>

            <h5>Projet 3 : Droit à la Déconnexion</h5>
            <p>Réalisation d'un site, Back End, Front End</p>
            <p>(REACT, JavaScript, Node.js, Express, HTML5, CSS3, Git, GitHub, SCRUM)</p>
          </div>
        </div>

        <div className="skills-hobbies">
          <div className="hard-skills">
            <h2>HARD SKILLS</h2>
            <p>HTML5, CSS3, SCSS, JavaScript</p>
            <p>React/Redux/Express</p>
            <p>BootStrap/ReactStrap</p>
            <p>Node.js/SQL/MySQL/Express</p>
            <p>Git/GitHub</p>
            <p>Méthode Agile SCRUM</p>
            <p>Photoshop/InDesign</p>
            <p>Anglais lu/parlé</p>
          </div>
          <div className="soft-skills">
            <h2>SOFT SKILLS</h2>
            <p>Travail en équipe</p>
            <p>Communication</p>
            <p>Écoute</p>
            <p>Patience</p>
            <p>Rigueur</p>
            <p>Aime apprendre</p>
          </div>
          <div className="hobbies">
            <h2>HOBBIES</h2>
            <p>Art</p>
            <p>Musique</p>
            <p>Cinéma</p>
            <p>Surf</p>
          </div>
        </div>

      </div>
      <div className="cv-logos">
        <div className="logos">
          <img src="/images/logos/html5-js-css3.png" alt="html"></img>
          <img src="/images/logos/react.png" alt="html"></img>
          <img src="/images/logos/redux_logo.png" alt="html"></img>
          <img src="/images/logos/sass.png" alt="html"></img>
        </div>
        <div className="logos">
          <img src="/images/logos/nodejs.png" alt="html"></img>
          <img src="/images/logos/nodejs2.png" alt="html"></img>
          <img src="/images/logos/mysql.png" alt="html"></img>
          <img src="/images/logos/expressjs.png" alt="html"></img>
        </div>
        <div className="logos">
          <img src="/images/logos/git.png" alt="html"></img>
          <img src="/images/logos/github.png" alt="html"></img>
        </div>
      </div>

    </div>
  )
}

export default Cv;