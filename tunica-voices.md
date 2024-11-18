---
layout: default
title: 'Tunica Voices'
permalink: /tunica-voices/
---
# {{ page.title }}

<div>
    {% include tunica-voices-nav.html %}
</div>

{% assign featured = "Who was Sesostrie Youchigant?, Rabbit Dance Song, Teaching Younger Generations, On Language Reawakening, Continuing traditional Tunica crafts" | split: ", " %}

<div>
    {% for title in featured %}
        {% assign video = site.tunica-voices | where:"title", title | first %}
        {% include video-embed-flex.html %}
        {% unless forloop.last %}
            <hr>
        {% endunless %}
    {% endfor %}
</div>