---
templateKey: blog-post
title: Ruby Comparable Mixin
date: 2019-12-04T23:32:01.956Z
description: >-
  This is my note on how to enable my custom ruby objects to be sorted and
  compared as I desire.
tags:
  - ruby
  - poro
  - mixin
  - comparable
---
- The Comparable mixin is used by classes whose objects may be ordered.
- https://docs.ruby-lang.org/en/2.5.0/Comparable.html

```rb
# Plain Old Ruby Object
class PoroLanguage
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

languages = [PoroLanguage.new("Ruby"), PoroLanguage.new("Dart"), PoroLanguage.new("Python")]

# Sorting does not work by default.
languages.sort
# ArgumentError: comparison of PoroLanguage with PoroLanguage failed

# Different instances are considered as different because each instance has a different object id.
PoroLanguage.new("Dart") == Language.new("Dart")
#=> false
```

```rb
class ComparableLanguage
  include Comparable

  attr_reader :name

  def initialize(name)
    @name = name
  end

  # The class must define the <=> operator.
  def <=>(other)
    name <=> other.name
  end
end

languages = [ComparableLanguage.new("Ruby"), ComparableLanguage.new("Dart"), ComparableLanguage.new("Python")]

# Can be sorted based on the <=> operator.
languages.sort
#=> [#<ComparableLanguage:0x007f991b2373a8 @name="Dart">, #<ComparableLanguage:0x007f991b237308 @name="Python">, #<ComparableLanguage:0x007f991b237448 @name="Ruby">]

# Can be compared based on the <=> operator.
ComparableLanguage.new("Dart") == ComparableLanguage.new("Dart")
#=> true
```

That's it.
