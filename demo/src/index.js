// @flow
import React from 'react';
import {render} from 'react-dom';
import {Button, Alert, Card, Image} from '../../src';

const App = () => {
  return (
    <div>
      <Button type={'primary'}>Test button</Button>
      <Alert closeIcon>default alert</Alert>
      <Card title="Title card">lorem</Card>
      <Image
        src="http://www.turkishfashion.net/re_images/1375705159_offer_HM5.jpg"
        alt="my-image"
        type="square"
      />
    </div>
  );
};

const root = document.getElementById('root');

if (root !== null) {
  render(<App />, root);
}
