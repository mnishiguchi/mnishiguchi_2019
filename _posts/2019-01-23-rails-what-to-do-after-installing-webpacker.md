---
layout: post
title: Rails - what to do after installing webpacker
tags:
  - ruby
  - rails
  - webpacker
comments: true
---
This is my note on how to use webpacker after installation.


## dependencies

- ruby 2.5
- rails 5.2
- webpacker
- etc

## set up files

#### app/views/layouts
- add `javascript_pack_tag` and `stylesheet_pack_tag` to a layout file

```slim
/ app/views/layouts/application.slim

doctype html
html
  head
    title = full_title yield(:title)
    = csrf_meta_tags
    = csp_meta_tag
    = stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload'
    = javascript_include_tag 'application', 'data-turbolinks-track': 'reload'

    = javascript_pack_tag 'application'
    = stylesheet_pack_tag 'application'
    /...
```

#### app/javascript/packs

- `app/javascript/packs/application.js` is the entry point
- `application.js` and `application.css` are automatically generated on compile based on all the module imported in `app/javascript/packs/application.js`


```js
// app/javascript/packs/application.js

// import js
import './javascript';

// import css
import './stylesheet';

// senity check
console.log('Hello World from Webpacker');
```

```js
// app/javascript/packs/stylesheet/index.js

// any js here
```

```css
// app/javascript/packs/stylesheet/index.scss

// any scss here
```

## start app

```bash
# run webback server
bin/webpack-dev-server
```

```bash
# run rails server
bin/rails s
```
