import { configure } from '@storybook/react';

/*
 * Load all files in the src directory that follow the naming convention: *.story.(ts|tsx)
 * Examples:
 *   Good: TextField.story.js
 *   Bad:  TextField.js
*/
const req = require.context('../src/', true, /__test__\/.+\.story\.jsx?$/);
function loadStories() {
  req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);
