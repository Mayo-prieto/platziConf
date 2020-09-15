import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/56fefd21b2b190f92dc28a4a8c1fb49a?s=80"
            alt="Avatar"
          />
          <h1>
            Mayerly <br /> Prieto
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Graphic Designer</h3>
          <div>@mayofura</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
