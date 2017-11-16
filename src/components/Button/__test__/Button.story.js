import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../';

storiesOf('Button', module)
  .add('default', () => <Button>Default Button</Button>)
  .add('red', () => <Button red>Red Button</Button>)
  .add('green', () => <Button green>Red Button</Button>)
  .add('blue', () => <Button blue>Blue Button</Button>);
