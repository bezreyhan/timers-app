# Timers App

## Run the App
First clone the repo then follow the following steps:
```bash
$ cd timers-app
$ npm install
$ npm run start
```
Then go to http://localhost:3000 to see the app running.

## Visual Testing - Component Documentation
We are using React Storybook for the visual testing and documentation of our base components. To view the components, run:
```bash
$ npm run storybook
```
Then go to http://localhost:9009

## Run the Tests
```bash
$ npm run test
```

### Improvements
- We are using Proptypes to verify the types of props. I've found that using a type system like Typescript has helped reduce the number of runtime errors.
- CSS modules remove the cascading issues with global CSS classes.
- In the Webpack config change resolve.modules to `['node_modules', paths.appSrc]` This allows us to import components without having to provide the full relative path.
- We can do the same as above for CSS `@imports` by adding the following plugin to the PostCSS loader `require('postcss-import')({ path: 'src' })`