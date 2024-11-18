---
layout: default
title: 'Table of Contents'
---
# {{ page.title }}

[This display is designed pretty specifically for the Tunica project, but may be abstractable/reusable in some way - what to do with this?]

<div class="toc-buttons">

<div class="btn-group button-left" role="group" aria-label="Select organization by notebook or organization by subject heading">
  <input type="radio" class="btn-check" name="btnradio" id="sortByNotebook" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="sortByNotebook" onClick="sortByNotebook()">Sort by Notebook</label>

  <input type="radio" class="btn-check" name="btnradio" id="sortBySubject" autocomplete="off">
  <label class="btn btn-outline-primary" for="sortBySubject" onClick="sortBySubject()">Sort by Subject Heading</label>
</div>

<button id="expandCollapseButton" class="btn btn-primary button-right" onClick="expandCollapse()">Expand/Collapse All</button>

</div>

<div id="toc" style="display: block">
    {% include toc.html %}
</div>

<div id="toc-by-topic" style="display: none">
    {% include toc-by-topic.html %}
</div>

<script>
    // TODO: consolidate into one function?
    function sortByNotebook() {
        let toc = document.getElementById("toc");
        let tocByTopic = document.getElementById("toc-by-topic");
        
        toc.style.display = "block";
        tocByTopic.style.display = "none";
    }
    function sortBySubject() {
        let toc = document.getElementById("toc");
        let tocByTopic = document.getElementById("toc-by-topic");
       
        toc.style.display = "none";
        tocByTopic.style.display = "block";
    }
    function expandCollapse() {
        // determine which version of the TOC is currently displayed
        let toc = document.getElementById("toc");
        let currentToc = ((toc.style.display == "block") ? toc : document.getElementById("toc-by-topic"));
        // within that TOC, find any collapsed elements
        const closedElementList = currentToc.querySelectorAll('.accordion-collapse.collapse:not(.show)');
        // if any collapsed elements, expand them
        if (closedElementList.length > 0) {
            // console.log("element 1: " + closedElementList[0].outerHTML);
            const closedList = [...closedElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));
        } else {
            // else, collapse everything
            const openElementList = currentToc.querySelectorAll('.accordion-collapse.collapse.show');
            // console.log("open element 1: " + openElementList[0].outerHTML);
            const openList = [...openElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));
        } 
    }
</script>