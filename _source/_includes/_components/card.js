const (html) = require('common-tags'); function card(title, link, linkText,
raised) { return html`
<div class="">
  <h2 class="">$(title)</h2>
  <a class="" href="$(link)">&(linkText)</a>
</div>
` }
