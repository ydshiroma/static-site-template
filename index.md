---
layout: default
title: "Static Site Template"
parallax: true
image:
  img_url: '/assets/img/tunica-notebook-3.jpg'
  img_alt: Alt text describing your header image
  caption: Caption for your header image
---

<!-- Add parallax image back in - see default  -->

<h2>Explore X, Y, and Z on this stylish static site</h2>

This is a template for a static site for your project.

You can swap out the header image by changing the "image" settings in the header. Alternatively, delete "parallax:", "image:", and everything under "image:" to get rid of the header image and caption.

You can link to pages within your own site <a href="{{ '/tunica-voices/tunica-history/who-was-sesostrie-youchigant.html'| relative_url }}">like this</a>.

You can link to external sites [like this](https://www.amphilsoc.org/) or <a href="https://www.amphilsoc.org/" target="_blank">like this</a>. The second option will open the link in a new tab.

You can also include nav cards (below) to link out to different pages on your site. Start with a high-quality image file, crop it to a square, and upload it to the /assets/img directory. Plug in the file name after /assets/img/ in the code for the relevant nav card. Fill in the URL you want to link to in the "a href" tag.

<div class="nav-cards">
  <a href="{{ '/blog' | relative_url }}">
    <div class="nav-card-square" style="background-image: url(&quot;{{ '/assets/img/speck-crop.png' | relative_url }}&quot;);">
      <div class="card-text">
        Blog
      </div>
    </div>
  </a>
  <a href="{{ '/essays' | relative_url }}">
    <div class="nav-card-square" style="background-image: url(&quot;{{ 'assets/img/paine-crop.png' | relative_url }}&quot;);">
      <div class="card-text">
        Essays
      </div>
    </div>
  </a>
    <a href="{{ '/photographs' | relative_url }}">
    <div class="nav-card-square" style="background-image: url(&quot;{{ 'assets/img/square-picote-sesostrie.jpg' | relative_url }}&quot;);">
      <div class="card-text">
        Photo Gallery
      </div>
    </div>
  </a>
</div>