---
templateKey: 'blog-post'
title: Rails Hash - camelize and underscore keys
date: 2019-11-29T15:04:10.000Z
description: How to convert the case of hash keys in Rails.
tags:
  - ruby
  - rails
  - hash
  - json
  - api
---

## Using Hash#deep_transform_keys!

```rb
# Convert keys to the lower camel case.
hash.deep_transform_keys! { |key| key.camelize(:lower) }
```

```rb
# Convert keys to the underscore case.
hash.deep_transform_keys! { |key| key.underscore }
```

## Automatically converting for outgoing JSON response in jbuilder

- Automatically camelize the keys of any outgoing jsons.
- https://stackoverflow.com/questions/37569439/automatically-convert-hash-keys-to-camelcase-in-jbuilder

```rb
# config/environment.rb
Jbuilder.key_format camelize: :lower
```

## Automatically converting keys for incoming request params in middleware

- Automatically snakecase the keys of any incoming params.

```rb
# application.rb
require_relative "../app/middlewares/snake_case_parameters"
config.middleware.use SnakeCaseParameters
```

```rb
# app/middlewares/snake_case_parameters.rb
# A middleware that underscores the keys of any incoming (to the rails server) params.
class SnakeCaseParameters
  def initialize(app)
    @app = app
  end

  def call(env)
    request = ActionDispatch::Request.new(env)
    request.request_parameters.deep_transform_keys!(&:underscore)
    request.query_parameters.deep_transform_keys!(&:underscore)

    @app.call(env)
  end
end
```

## Related Gems

- [ActiveSupport::Inflector](https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html)
- [piotrmurach/strings-case](https://github.com/piotrmurach/strings-case)

## Additional resources

- https://stackoverflow.com/questions/37569439/automatically-convert-hash-keys-to-camelcase-in-jbuilder
- https://apidock.com/rails/Hash/transform_keys
- https://apidock.com/rails/Hash/deep_transform_keys
