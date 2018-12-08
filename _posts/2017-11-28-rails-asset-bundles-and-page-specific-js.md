---
layout: post
title: Rails asset bundles and page specific js
comments: true
tags:
- ruby
- rails
- asset_pipeline
---



## Single asset bundle vs multiple asset bundles
- We can create a multiple asset bundles instead of default application.js.
- Pros: Useful if some code is used only on certain occasions.
- Cons: More http requests.
- [任意のviewのみで、特定のjsを読み込む方法](https://qiita.com/Hijiri-K/items/1a3f7137cf3186580447)
- https://schneems.com/2017/11/22/self-hosted-config-introducing-the-sprockets-manifestjs/

## Page Specific Javascript
- In a js file, we can conditionally execute code fragments based on attributes on body tag.
- https://www.driftingruby.com/episodes/page-specific-javascript-in-ruby-on-rails

```slim
doctype html
html
  = render "layouts/head"

  = content_tag :body, class: "#{action_name}_view", id: controller_name, data: { action: action_name, controller: controller_name } do
    = render "layouts/navbar"
    main
      = render "layouts/flash"
      = yield
    = render "layouts/footer"
```

## Links and References
- https://www.driftingruby.com/episodes/page-specific-javascript-in-ruby-on-rails
- https://schneems.com/2017/11/22/self-hosted-config-introducing-the-sprockets-manifestjs/
- [任意のviewのみで、特定のjsを読み込む方法](https://qiita.com/Hijiri-K/items/1a3f7137cf3186580447)
