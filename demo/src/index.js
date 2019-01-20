// @flow
import React from 'react';
import {render} from 'react-dom';
import {Button} from '../../src';

const App = () => {
  return (
    <div>
      <Button type={'primary'}>Test button</Button>
    </div>
  );
};

const root = document.getElementById('root');

if (root !== null) {
  render(<App />, root);
}
