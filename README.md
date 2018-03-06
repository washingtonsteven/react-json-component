# react-json-component

_Inspired by [this tweet](https://twitter.com/NTulswani/status/964421799399141376)_

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import JSONComponent from 'react-json-component';

const componentJson = {
  type:"span",
  props:{
    style:{
      backgroundColor:"#0000ff"
    }
  },
  children:"This is a cool JSON component"
};

ReactDOM.render(<JSONComponent jsonSrc={componentJson} />, document.getElementById('root'));
```

## Props

```javascript
{
  jsonSrc: Object
  componentMap: Object
}
```

## JSON Properties

```javascript
{
  type: String | Function
  props: Object
  children: String | Array | Function
}
```


### `componentMap`

`componentMap` is a way to match strings to components. You can define `type` to be a custom React Component if you create the `componentMap` in JS to relate the string to the actual component function or class.

#### Example

##### `component.json`

```javascript
{
  "type":'TableComponent' // this is a string, since we can't put functions / classes in JSON!
  "props":{
    // ... props here
    "data":[
      // ... table data
    ]
  }
}
```

##### `TableComponent.js`

```javascript
import React from 'react';

export default (props) => (
  <table>
    // ... render props.data here
  </table>
)
```

##### `index.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';
import JSONComponent from './JSONComponent';

import jsonSrc from 'component.json';

const props = { jsonSrc, componentMap:{ TableComponent } };
ReactDOM.render(<JSONComponent {...props} />, document.getElementById('root'));
```

## Examples

Check out the sample app (scaffolded with [Create React App](https://github.com/facebook/create-react-app)):

1. `cd react-json-component-sample`
2. `yarn install`
3. `yarn start`

View [`./react-json-component-sample/src/index.js`]('react-json-component-sample/src/index.js') for a number of different ways to define your component object (in JS and JSON)

## Why?

Because I am not a coward.
