---
layout: none
noSave: true
---
<section class="about">
	<a href="<% get('paths').root %>"><strong>Hacking around</strong></a>

	by zalun <a href="https://twitter.com/zalun">t</a> <a href="https://facebook.com/zaloon">f</a>
</section>

---

<section class="latest_posts">
	<small>Latest blog posts:</small><br />
	<% list('partials/article-sidebar.md', 6) %>
</section>

---

<section class="discussion">
	<small>Internet trail</small>

	Not supported yet
</section>


---
<section class="tags">
	<small>Tags:</small><br />
	<a href="<% linkto('kids') %>">kids</a>
	<a href="<% linkto('arduino') %>">Arduino</a>
	<a href="<% linkto('raspberrypi') %>">RaspberryPi</a>
	<a href="<% linkto('hardware') %>">hardware</a>
	<a href="<% linkto('audio') %>">Audio</a>
</section>
