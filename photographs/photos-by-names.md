---
layout: photos
display-title: 'Browse Photos by Names'
title: 'Browse Photos by Names'
---

This page shows the name of all identified people in the Tunica photos at the APS. 

<b>Click on any name</b> to see all photos that are known to picture them.

## Pictured

{% assign pictured = site.data.photo-subjects | sort: 'name' %}

<div>
    {% for person in pictured %}
        {% unless person.photographed == "n" %}
            {% if person.name == "Youchigant, Sesostrie" %}
                <p>
                    <a href="https://diglib.amphilsoc.org/islandora/object/tunica-album?sort_order=ASC&sort_by=title&f%5B0%5D=person_block%3AYouchigant%2C%20Sesostrie" target="_blank" class="no-decoration-link">
                        {{ person.name }}
                    </a>
                </p>
            {% else %}
                <p>
                    <a href="https://diglib.amphilsoc.org/taxonomy/term/{{ person.taxonomy }}" target="_blank" class="no-decoration-link">
                        {{ person.name }}
                    </a>
                </p>
            {% endif %}
        {% endunless %}
    {% endfor %}
</div>

{% assign creators = site.data.photo-subjects | where:"photographer", "y" | sort: 'name' %}