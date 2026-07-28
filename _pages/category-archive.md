---
title: "分類"
layout: archive
permalink: /categories/
author_profile: false
---

<p>共 {{ site.categories | size }} 個分類。點選任一分類查看相關文章。</p>

<ul class="taxonomy__index">
{% assign category_archives = site.archives | where: "type", "category" | sort: "title" %}
{% for archive in category_archives %}
  <li>
    <a href="{{ archive.url | relative_url }}"><strong>{{ archive.title }}</strong> <span class="taxonomy__count">{{ archive.posts | size }}</span></a>
  </li>
{% endfor %}
</ul>
