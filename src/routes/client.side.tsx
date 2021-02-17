import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

export const RoutesClientSide: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
