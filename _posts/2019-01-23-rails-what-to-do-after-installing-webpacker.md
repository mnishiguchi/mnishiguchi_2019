---
layout: post
title: Rails - what to do after installing webpacker
tags:
  - ruby
  - rails
  - webpacker
comments: true
---
This is my note on how I should set up webpacker.


## My Goals

general

- Import all frontend dependencies through Webpacker

js

- Process all JS with Webpacker

scss

- All the shared / global scss files go to app/javascript/scss
- Use asset pipeline for custom styles so that we can use rails helpers
- Use webpacker for react components and third-party styles from node_modules

## Dependencies

- ruby 2.6.2
- rails 5.2.3
- webpacker
- etc

```js
// package.json
{
  "name": "my-app",
  "private": true,
  "dependencies": {
    "@babel/preset-react": "^7.0.0",
    "@rails/actioncable": "^6.0.0-alpha",
    "@rails/activestorage": "^6.0.0-alpha",
    "@rails/ujs": "^6.0.0-alpha",
    "@rails/webpacker": "^4.0.2",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "bootstrap": "^4.3.1",
    "izitoast": "^1.4.0",
    "jquery": "^3.4.0",
    "popper.js": "^1.15.0",
    "prop-types": "^15.7.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "turbolinks": "^5.2.0"
  },
  "devDependencies": {
    "@fortawesome/fontawesome-free": "^5.8.1",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "webpack-dev-server": "^3.3.1",
    "webpack-merge": "^4.2.1"
  }
}
```

## Set up files

#### Add `javascript_pack_tag` and `stylesheet_pack_tag` to a layout file

app/views/layouts/application.slim

```slim
doctype html
html
  head
    /...

    / from asset pipeline
    = stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload'

    / from webpacker
    = stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload'
    = javascript_pack_tag 'application', 'data-turbolinks-track': 'reload'

    /...
```

#### Set up js and css files in `app/javascript/packs`

- `app/javascript/packs/application.js` is the entry point
- `application.js` and `application.css` wil be automatically generated after the compiling based on all the module imported into `app/javascript/packs/application.js`
- The packs folder is only made for webpack entries. The files that are to be imported into the entry  must be outside the packs folder.
  - https://github.com/rails/webpacker/issues/1432#issuecomment-382159016

```
./app/javascript/
├── packs
│   └── application.js # webpack entry
├── channels
│   ├── consumer.js
│   └── index.js
├── js
│   ├── index.js
│   └── some_custom_script.js
└── scss
    ├── _globals.scss
    ├── _mixins.scss
    ├── _variables.scss
    └── index.scss
```

app/javascript/packs/application.js

```js
// initialize rails
require('@rails/ujs').start();
require('turbolinks').start();
require('@rails/activestorage').start();
require('channels');

// import our js and scss
require('../js');
require('../scss');

// senity check
console.log('Webpacker initialized');
```

app/javascript/js/index.js

```js
// Reference third-party js in node_modules
import jquery from 'jquery';
import iziToast from 'izitoast/dist/js/iziToast';

// Immediately invoke third-party js in node_modules
import 'bootstrap/dist/js/bootstrap.bundle.js';

// Immediately invoke custom js
import './some_custom_script.js';

// Expose references to window
window.$ = jquery;
window.iziToast = iziToast;
```

app/javascript/scss/index.scss

```scss
// our custom configs
@import './variables';
@import './mixins';
@import './globals';

// third-party styles from node_modules
@import '~izitoast/dist/css/iziToast';
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-daterangepicker/daterangepicker';

// our custom styles
//...
```

#### Clean up app/assets (optional)

- We no longer need js files in app/assets.

```
./app/assets/
├── config
│   └── manifest.js
├── images
│   ├── feature.png
│   ├── hero.jpg
│   └── logo.png
└── stylesheets
    ├── _breadcrumb.scss
    ├── ...
    ├── application.scss
    ├── ...
```

app/assets/stylesheets/application.scss

```scss
// our custom configs that are defined in app/javascript/scss
@import '../../javascript/scss/variables';
@import '../../javascript/scss/mixins';
@import '../../javascript/scss/globals';

// third-party styles
@import 'font-awesome';

// our custom styles
@import 'breadcrumb';
@import 'header_footer';
@import 'not_logged_in_home';
@import 'sidebar_menu';
@import 'summary';
```

app/assets/config/manifest.js

```js
//= link_tree ../images
//= link_directory ../stylesheets .css
```

## Start app

```bash
# run webback server
bin/webpack-dev-server
```

```bash
# run rails server
bin/rails s
```
