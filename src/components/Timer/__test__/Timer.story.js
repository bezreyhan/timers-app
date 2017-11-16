import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Timer from '../';

storiesOf('Timer', module).add('default', () => (
  <Timer title="New Timer" onDelete={action('clicked')} />
));
