import React from 'react';
import {render} from 'react-dom';
import {Button} from '../../src';

const App = () => {
  return (
    <div>
      <Button>Test button</Button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
