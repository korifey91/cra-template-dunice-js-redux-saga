## Create React App template dunice-js-redux-saga  

Template for Create React App supporting SCSS files.  
Included with:  
 - [Prettier](https://github.com/prettier/prettier)  
 - [Stylelint](https://github.com/stylelint/stylelint)  
 - ESlint config recommended by [Airbnb](https://github.com/iamturns/eslint-config-airbnb-typescript)  
 - [Husky](https://github.com/typicode/husky) with pre-commit hook
 - Redux
 - Redux-toolkit
 - Saga
 - Axios
 - qs

### Installation  

Creating a React project using a custom template.  

```
npx create-react-app app-name --template dunice-js-redux-saga
```

### After installation  
The CRA Custom Template does not yet have support for `devDependencies`, so I recommend edit your `package.json` to like this:  
```
{
  "name": "project-name",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --ext .js,.jsx ./src"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.4.0",
    "axios": "^0.20.0",
    "qs": "^6.9.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.1",
    "react-scripts": "3.4.3",
    "redux-saga": "^1.1.3"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-import-helpers": "^1.1.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.4",
    "eslint-plugin-react-hooks": "^4.1.2",
    "husky": ">=4",
    "lint-staged": ">=10",
    "prettier": "^2.1.2",
    "stylelint": "^13.7.2",
    "stylelint-config-standard": "^20.0.0"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.{js,jsx}": [
      "prettier --write",
      "eslint --cache --ext '.js,.jsx' --fix"
    ],
    "*.scss": "stylelint --syntax=scss"
  }
}
```  

CRA will fail with husky `pre-commit` setup, so you need to install it manually after initiating.  

```
yarn add -D husky
```
  
###### License  
[MIT](https://choosealicense.com/licenses/mit)
