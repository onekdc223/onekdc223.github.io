---
title: "標籤"
layout: archive
permalink: /tags/
author_profile: false
---

<p>共 {{ site.tags | size }} 個標籤。點選任一標籤查看相關文章。</p>

<ul class="taxonomy__index">
{% assign tag_archives = site.archives | where: "type", "tag" | sort: "title" %}
{% for archive in tag_archives %}
  <li>
    <a href="{{ archive.url | relative_url }}"><strong>{{ archive.title }}</strong> <span class="taxonomy__count">{{ archive.posts | size }}</span></a>
  </li>
{% endfor %}
</ul>
