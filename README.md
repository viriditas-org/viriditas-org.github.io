# Viriditas Website Data

This repository contains the code and data behind the [Viriditas
Website](https://viriditas-org.github.io/). It is static Markdown and HTML, compiled by
[Jekyll](https://jekyllrb.com/) via [GitHub Pages](https://pages.github.com/).

## Local development

To build this site locally, you must have [Ruby](https://www.ruby-lang.org/) > 2.1.0 installed on
your machine, along with the [Bundler](https://bundler.io) gem. To install Bundler, `gem install
bundler`.

To install the dependencies required for the site to work, run `bundler install`. Then, when
dependencies have been installed, run `bundler exec jekyll start` to serve the site. View the
resulting HTML at [`http://localhost:4000`](http://locahost:4000).

## Site organization

Most of the content of the site is contained in markdown (`.md`) files in the root directory. These
files start with front-matter that looks like:

```yaml
---
# ...
---
```

This front-matter determines how the page will be displayed and organized.

### Site metadata

Additional information about the site is set directly in `_config.yml`. This can be inserted into
any page's content. For example, the `description` metadata is accessed as `{{ site.description }}`.

### Page editing

To edit a page's main content, simply write content in Markdown in the .md file. To edit specifics
of the CSS and HTML, edit the pages in `_layout/`. There are two main layouts, `page` and `home`,
both of which fill in the inner content of the `default` layout. The layouts are composed of
individual modules, which are defined in the `_includes/` folder.

### Speaker info

The speaker info page is different from other pages: it automatically reads the data contained in
`_data/speakers.yml`, and uses it to create the list of speakers. To add a speaker or modify a
speaker's information, edit the data in that file instead.
