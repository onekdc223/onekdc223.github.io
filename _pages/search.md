---
title: "搜尋"
permalink: /search/
layout: single
author_profile: false
exclude_from_search: true
---

<link href="{{ '/pagefind/pagefind-ui.css' | relative_url }}" rel="stylesheet">

<div id="pagefind-search"></div>

<script src="{{ '/pagefind/pagefind-ui.js' | relative_url }}"></script>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    new PagefindUI({
      element: "#pagefind-search",
      showSubResults: true,
      showImages: false,
      translations: {
        placeholder: "搜尋文章…",
        clear_search: "清除",
        load_more: "載入更多結果",
        search_label: "搜尋本站",
        filters_label: "篩選",
        zero_results: "找不到「[SEARCH_TERM]」的結果",
        many_results: "找到 [COUNT] 筆「[SEARCH_TERM]」的結果",
        one_result: "找到 [COUNT] 筆「[SEARCH_TERM]」的結果",
        alt_search: "找不到「[SEARCH_TERM]」的結果，改為顯示「[DIFFERENT_TERM]」的結果",
        search_suggestion: "找不到「[SEARCH_TERM]」的結果，可以試試以下關鍵字：",
        searching: "搜尋「[SEARCH_TERM]」中…"
      }
    });
  });
</script>
