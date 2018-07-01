# Viriditas Website Data

This repository contains the code and data behind the [Viriditas
Website](https://viriditas-org.github.io/). It is static Markdown and HTML, compiled by
[Jekyll](https://jekyllrb.com/) via [GitHub Pages](https://pages.github.com/).

## Local development

To build this site locally, you must have [Ruby](https://www.ruby-lang.org/) > 2.1.0 installed on
your machine, along with the [Bundler](https://bundler.io) gem. To install Bundler, `gem install
bundler`.

To install the dependencies required for the site to work, run `bundle install`. Then, when
dependencies have been installed, run `bundle exec jekyll serve` to serve the site. View the
resulting HTML at [`http://localhost:4000`](http://locahost:4000).

## Site organization

Most of the content of the site is contained in markdown (`.md`) files in the root directory. These
files start with front-matter metadata that looks like:

```yaml
---
layout: page
# ... etc.
---
```
Front matter must be valid [YAML](http://yaml.org/) and determines how the page will be displayed
and organized.

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
`_speakers/*.md`, and uses it to create the list of speakers. To add a speaker or modify a
speaker's information, add or modify a `.md` file to that folder. The speaker's name should be
specified in the front matter of the Markdown file.

## Usage and License

Text and source code &copy; Viriditas, 2018. Artwork &copy; Pooya Sanjari/Imaginorama Design, 2018.

No permission is given to reuse, copy, or modify the artwork on this site without the experess
written permission of the copyright holder.

Except where noted otherwise, the source code in this repository are free software: you can
redistribute it and/or modify it under the terms of the GNU General Public License as published by
the Free Software Foundation, either [version 3 of the License](./LICENSE), or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See
the GNU General Public License for more details.
