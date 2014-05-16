module.exports = function(template, max) {
	template = template || 'partials/article-home.md';
  template = this.get('src') + template;
	var articles = this.pages('articles', 'date');
	var html = '', 
      to = Math.min(max, articles.length) || articles.length;
	for(var i=0; i<to; i++) {
		var article = articles[i];
    html += this.template(template, {
      title: article.get('title'),
      preface: article.get('preface').replace('{imgURL}', this.get('paths').root + 'public/img/'),
      link: this.linkto(article),
      date: article.get('date'),
      tags: article.get('tags').join(', ')
    });
	}
	return html;
}
