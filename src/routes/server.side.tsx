import React, { FC } from 'react';
import { StaticRouter } from 'react-router-dom';
import { Routes } from './routes';

export const RoutesServerSide: FC<RoutesServerSidePropTypes> = (props) => {
  return (
    <StaticRouter location={props.location}>
      <Routes />
    </StaticRouter>
  );
}

interface RoutesServerSidePropTypes {
  location: string,
};
