---
layout: post
title: Rails 5 - flash message using iziToast
tags:
  - rails
  - rails
  - iziToast
comments: true
---

This is my note on how to set up iziToast in rails 5.2 app.



## system used

- ruby 2.5.3
- rails 5.2.2
- webpacker

## get started

#### install iziToast

```bash
yarn add izitoast --save
```

#### configure webpacker for iziToast

```diff
--- a/app/javascript/packs/application.js
+++ b/app/javascript/packs/application.js

+import iziToast from 'izitoast/dist/js/iziToast';
+
+// expose to window
+window.iziToast = iziToast;
```

```diff
--- a/app/javascript/packs/stylesheet.scss
+++ b/app/javascript/packs/stylesheet.scss

+@import "~izitoast/dist/css/iziToast";
```

#### define flash_tag view helper

```rb
# app/helpers/application_helper.rb
module ApplicationHelper
  def flash_tag
    messages = []

    flash.each do |type, message|
      next if message.blank?

      level = case type
              when "notice" then "success"
              when "alert"  then "error"
              when "info"   then "info"
              when "warn"   then "warn"
              else
                "info"
              end

      js = %[iziToast.#{level}({ title: '#{level.capitalize}:', message: "#{message}" });]
      messages << javascript_tag(js)
    end

    messages.join("/n").html_safe
  end
end
```

#### call flash_tag in layouts/application

```diff
--- a/app/views/layouts/application.slim
+++ b/app/views/layouts/application.slim

   body
     = render "layouts/header"
     main[style="min-height:80vh"]
+      = flash_tag
       = yield
     = render "layouts/footer"
```
