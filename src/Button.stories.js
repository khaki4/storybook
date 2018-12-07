import React from 'react';
import { wInfo } from './utils';

import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX('with background',
    wInfo(`
      description
      
      ~~~js
      <Button>blar blar</Button>
      ~~~
   `)(() => (<Button bg="palegoldenrod">Hello world</Button>)))
  .addWithJSX('with background 2', () => <Button bg="green">Hello world</Button>);