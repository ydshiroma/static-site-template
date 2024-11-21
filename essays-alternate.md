---
layout: default
title: "Essays - Alternate"
---

<h1>{{ page.title }}</h1>

<div class="longform-text">

<p>Like the <a href="{{ '/blog' | relative_url }}">Blog</a> layout, but posts aren't stored by date and display order can be set manually.</p>

<p>These essays are currently set to display by the "display-order" field in the front matter. Essays with no display-order information will display first. The rest will display from lowest to highest number. To ensure that an essay is displayed first on the page, you can assign it a negative number.</p>

<p>Essays can also be sorted by fields like title or author name. Just change the text following "sort" to "title" or "author".</p>

<p>To reverse the order essays display in, add "| reverse" after you specify which field to sort by.</p>

<p><a href="{{ '/essays' | relative_url }}">Click here</a> for a more visual display for long-form writing.</p>

<hr>

{% assign essays = site.pages | where:"layout", "essay" | sort: "display-order" %}

{% for page in essays %}
    <h2><a href="{{ page.url | relative_url }}">{{ page.title }}</a></h2>
    {% if page.authors %}
        {% if page.authors.size > 2 %}
            <h3>By {{ page.authors | join: ", " }}</h3>
        {% else %}
            <h3>By {{ page.authors | join: " and " }}</h3>
        {% endif %}
    {% endif %}
    <p>{{ page.excerpt }}</p>
    <p class="read-more"><a href="{{ page.url | relative_url }}">Read more</a></p>
    {% unless forloop.last == true %}
        <hr>
    {% endunless %}
{% endfor %}

</div>