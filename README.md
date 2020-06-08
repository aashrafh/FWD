# Notes
* <strong>DOM Process:</strong>
  * HTML is received
  * HTML tags are converted to tokens
  * Tokens are converted to Nodes
  * Nodes are converted to the DOM

* <strong>Tokens:</strong>
  * DOCTYPE
  * start tag
  * end tag
  * comment
  * character
  * end-of-file

* <strong>DOM:</strong> is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

* .innerText will get the visible text of the element. This is an important distinction! If CSS is used to hide any text inside that element, .innerText will not return that text, while .textContent will return it.
