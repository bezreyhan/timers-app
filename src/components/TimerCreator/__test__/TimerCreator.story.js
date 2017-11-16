import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimerCreator from '../';

storiesOf('TimerCreator', module).add('default', () => (
  <TimerCreator onCreate={action('clicked')} />
));
