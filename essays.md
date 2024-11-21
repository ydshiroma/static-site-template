---
layout: default
title: "Essays"
permalink: /essays/
---

<h1>{{ page.title }}</h1>

This page can be used to display essays and other long-form writing.

To use this display, all essays in the /essays directory must have a file name for an image specified in their front matter. Choose a large, high-resolution image file.

You can choose what order essays display in using the "display-order" field in their front matter. Essays with no display-order information will display first. The rest will display from lowest to highest number. To ensure that an essay is displayed first on the page, you can assign it a negative number.

Essays can also be sorted by fields like title or author name. In the code below, change the text following "sort" to "title" or "author".

<p>To reverse the order essays display in, add "| reverse" after you specify which field to sort by.</p>

<p><a href="{{ '/essays-alternate' | relative_url }}">Click here</a> for an alternate, more text-heavy display for long-form writing.</p>

{% assign essays = site.pages | where:"layout", "essay" | sort: "display-order" %}

<div class="nav-cards-stacked">
    {% for page in essays %}
        {% assign imgUrl = '/assets/img/' | append: page.img %}
      <a href="{{ page.url | relative_url }}">
        <div class="nav-card-full-width" style="background-image: url(&quot;{{ imgUrl |relative_url }}&quot;);">
            <div class="card-text">
                {{ page.title }}
            </div>
        </div>
      </a>
      <!-- Comment in the lines below to display an excerpt from each essay under the image -->
      <!-- <p>{{ page.excerpt }}</p>
      <hr> -->
    {% endfor %}
</div>