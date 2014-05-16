---
date: 13-05-2010
title: Upgrading from Django 1.4.x to 1.6.x
preface: Both versions (1.5 and 1.6) are not compatible with a project which was running on Django 1.4
draft: yes
tags: 
  - django
  - programming
---

## Backward incompatible changes

After a short talk on `#django` IRC channel I've decided to upgrade Django gradually - first to 1.5 and later to the latest 1.6 version

### <a href="https://docs.djangoproject.com/en/1.5/releases/1.5/#backwards-incompatible-changes-in-1-5">Backward incompatible changes in 1.5</a>

<a href="https://docs.djangoproject.com/en/1.6/ref/settings/#std:setting-ALLOWED_HOSTS">ALLOWED_HOSTS</a> setting is required for production site.

*'url' requires a non-empty first argument. The syntax changed in Django 1.5, see the docs.*

I've found <a href="http://stackoverflow.com/questions/14882491/django-release-1-5-url-requires-a-non-empty-first-argument-the-syntax-change">this on StackOverflow</a>
Linux:
```find . -type f -print0 | xargs -0 sed -i 's/{% url \([^" >][^ >]*\)/{% url "\1"/g'```

on OSX: 
```find . -type f -print0 | xargs -0 sed -i.bak -e 's/ url \([^" >][^ >]*\)/ url "\1"/g'```

it will create backup files even if not changed... 

There are also errors:
  - ``src="{{ url }}`` in changed into ``src="{{ url "}}"``


### <a href="https://docs.djangoproject.com/en/1.6/releases/1.6/#backwards-incompatible-changes-in-1-6">Backward incompatible changes in 1.6</a>

Some changes are by removing <a href="https://docs.djangoproject.com/en/1.6/internals/deprecation/">deprecated features</a>

