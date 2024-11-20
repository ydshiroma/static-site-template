---
layout: default
title: Data
---

<!-- Code modified from: https://jekyllrb.com/tutorials/csv-to-table/ -->

<h1>{{ page.title }}</h1>

<p>You can display data on a page like this. This table is auto-generated from a CSV stored in the _data directory.</p>

<p>This sample data is taken from the APS <a href="https://diglib-legacy.amphilsoc.org/indenturedata/" target="_blank">Investigating Indentured Servitude</a> project. For full dataset, click <a href="https://github.com/AmericanPhilosophicalSociety/Historic-Indenture-Data/blob/master/Mss647P53-01_Dataset_Record%20of%20Indentures.csv" target="_blank">here</a>.</p>

<table>
  {% for row in site.data.indenture-data %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>