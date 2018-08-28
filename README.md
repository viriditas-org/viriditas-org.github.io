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

This is a single-page site, focused aorund the index page. The contents of the index are defined in
`index.html`, and the overall core html structure of the html is defined in the default layout,
`_layouts/default.html`.

The index contents are divided into sections. Apart from the title section, these sections have their
main contents in markdown (`.md`) files in the `_sections` directory.
These files start with front-matter metadata that looks like:

```yaml
---
section_layout: default
# ... etc.
---
```
The front matter must be valid [YAML](http://yaml.org/) and determines how the section will be
displayed and organized.

Unlike a traditional multi-page Jekyll site, this site does not make significant use of layouts,
opting instead to use the `includ` directive to modularize content while displaying it all on a
single page.

### Site metadata

Additional information about the site is set directly in `_config.yml`. This can be inserted into
any page's content. For example, the `description` metadata is accessed as `{{ site.description }}`.

### Main page section editing

To edit a section's main content, simply write content in Markdown in the `.md` file in the
`_sections` folder. To edit specifics of the HTML used for the sections, edit the pages in
`_includes/section_layouts/`. There are two main section layouts, `default` and `card-collection`.

### Speaker and organizer info

The Speakers and Organizers sections are different from other sections: they automatically reads the
data contained in `_{speakers,organizers}/*.md`, and use it to create the speaker cards. To add an
individual, or modify their information, add or modify a `.md` file in that folder. The person's
name should be specified in the front matter of the Markdown file.

### Static files

All static files are organized in the `assets` tree. Speciically, `css/style.scss` contains SASS
code to define styling for the entire site (relying heavily on Bootstrap). All site-specific
JavaScript is managed through `javascript/site.js`.

### CDN

Boostrap, jQuery, and all other core libraries used by the site are loaded through CDNs. The URLs
used are in `_includes/javascript.html`.


## Usage and License

Text and source code &copy; Viriditas, 2018. Artwork &copy; Pooya Sanjari/Imaginorama Design, 2018.

*No permission is given to reuse, copy, or modify the artwork on this site without the experess
written permission of the copyright holder.*

Except where noted otherwise, the source code in this repository are free software: you can
redistribute it and/or modify it under the terms of the GNU General Public License as published by
the Free Software Foundation, either [version 3 of the License](./LICENSE), or (at your option) any
later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See
the GNU General Public License for more details.
