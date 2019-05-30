import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
<<<<<<< HEAD
});
=======
});
>>>>>>> 68736bb07ba935b19da608477f7afcf2ef05d62d
