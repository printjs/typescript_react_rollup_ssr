import React, { Fragment, FC } from 'react';
import { Link } from 'react-router-dom';


import rollup from '../assets/images/rollup.png';
import ts from '../assets/images/ts.png';
import react from '../assets/images/react.png';
import '../styles/app.scss';

export const App: FC = () => {
  return (
    <Fragment>
      <h2>
        Rollup + TypeScript + React = ⚡ + ❤️
      </h2>
      <div className="flex-box">
        <img src={rollup} alt="rollup" className="rollup" />
        +
        <img src={ts} alt="ts" className="ts" />
        +
        <img src={react} alt="react" className="react" />
        = ⚡ + ❤️
      </div>
      <Link to="/ttt">Click Here you will go to another page</Link>
    </Fragment>
  );
}
