import React from 'react';
import './Header.css';

import moment from "moment";

function HeaderTitle() {
    return <div className="header-title">
              <h2 className="header">Lamda School</h2>
              <p className="sub-header">@lamdaschool &#183; {moment().format("Do MMM ")}</p>

    </div>;
  }

  export default HeaderTitle;