# Notes
<img src="https://video.udacity-data.com/topher/2017/December/5a22d197_ud117-l1-interface-chain/ud117-l1-interface-chain.jpg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Node Interface"/>

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

* ```.innerText``` will get the visible text of the element. This is an important distinction! If CSS is used to hide any text inside that element, ```.innerText``` will not return that text, while ```.textContent``` will return it.
* If an element already exists in the DOM and this element is passed to ```.appendChild()```, the ```.appendChild()``` method will move it rather than duplicating it.
* ```.classList``` is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.
* ```.removeEventListener()``` method requires you to pass the same exact listener function to it as the one you passed to ```.addEventListener()```
* Event Phases:
<img src="https://video.udacity-data.com/topher/2017/December/5a2f0488_ud117-phases-of-event-flow/ud117-phases-of-event-flow.svg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Node Interface"/>
* By default, when ```.addEventListener()``` is called with only two arguments, the method defaults to using the bubbling phase.
