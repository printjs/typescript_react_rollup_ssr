import React from 'react';
import ReactDOM from 'react-dom';
import { RoutesClientSide } from './routes';


ReactDOM.render(<RoutesClientSide />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  const ws = new WebSocket('ws://localhost:8080');

  ws.onopen = () => {
    console.log('Connection open ...');
    ws.send('Hello WebSockets!');
  };

  ws.onmessage = (evt) => {
    console.log(`Received Message: ${evt.data}`);
    window.location.reload();
    ws.close();
  };

  ws.onclose = () => {
    console.log('Connection disconnected you need refresh browser or lanuch your server');
  };
}
