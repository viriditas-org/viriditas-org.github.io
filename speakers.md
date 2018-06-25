---
title: Speakers
order: 3
layout: page
description: Biographies of the speakers giving extended presentations at the workshop
---

Speakers are:
{% for speaker in site.data.speakers -%}
  - {{ speaker.name }} ({{ speaker.slug }}): {{speaker.bio}}
{% endfor %}
