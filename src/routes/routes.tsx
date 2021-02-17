import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from '../app';

const Test = () => (<h1>Other Page</h1>);

export const Routes: FC = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={App}
      />
      <Route
        exact
        path="/ttt"
        component={Test}
      />
    </Switch>
  );
}
