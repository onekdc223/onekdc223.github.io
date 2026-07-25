---
title: "搜尋"
permalink: /search/
layout: single
author_profile: false
exclude_from_search: true
---

<link href="{{ '/pagefind/pagefind-ui.css' | relative_url }}" rel="stylesheet">

<style>
  /* Pagefind UI ships light-theme defaults (#393939 text on #ffffff); retint it
     to the dark skin so results are legible on the site background. */
  #pagefind-search {
    --pagefind-ui-primary: #8cd2d5;
    --pagefind-ui-text: #eaeaea;
    --pagefind-ui-background: #1f242c;
    --pagefind-ui-border: #51555d;
    --pagefind-ui-tag: #2f3540;
    --pagefind-ui-font: inherit;
  }
  /* Sub-results and excerpts are dimmed with opacity by default, which is too
     faint against a dark background. */
  #pagefind-search .pagefind-ui__result-excerpt,
  #pagefind-search .pagefind-ui__result-link {
    opacity: 1;
  }
  #pagefind-search .pagefind-ui__message {
    color: var(--pagefind-ui-text);
  }
  /* Match the teal used for post titles elsewhere on the site, so results read
     as links rather than headings. */
  #pagefind-search .pagefind-ui__result-title a {
    color: var(--pagefind-ui-primary);
  }
  #pagefind-search mark {
    background: #ffe066;
    color: #1f242c;
  }
</style>

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
