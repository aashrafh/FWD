# Notes

<img src="https://video.udacity-data.com/topher/2017/December/5a22d197_ud117-l1-interface-chain/ud117-l1-interface-chain.jpg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Node Interface"/>

- <strong>DOM Process:</strong>

  - HTML is received
  - HTML tags are converted to tokens
  - Tokens are converted to Nodes
  - Nodes are converted to the DOM

- <strong>Tokens:</strong>

  - DOCTYPE
  - start tag
  - end tag
  - comment
  - character
  - end-of-file

- <strong>DOM:</strong> is a tree-like structure that is a representation of the HTML document, the relationship between elements, and contains the content and properties of the elements.

- `.innerText` will get the visible text of the element. This is an important distinction! If CSS is used to hide any text inside that element, `.innerText` will not return that text, while `.textContent` will return it.
- If an element already exists in the DOM and this element is passed to `.appendChild()`, the `.appendChild()` method will move it rather than duplicating it.
- `.classList` is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.
- `.removeEventListener()` method requires you to pass the same exact listener function to it as the one you passed to `.addEventListener()`
- Event Phases:
  <img src="https://video.udacity-data.com/topher/2017/December/5a2f0488_ud117-phases-of-event-flow/ud117-phases-of-event-flow.svg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Node Interface"/>

- By default, when `.addEventListener()` is called with only two arguments, the method defaults to using the bubbling phase.

- `DocumentFragment`: represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

- <strong>Reflow</strong> is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.

- <strong>Repaint</strong> happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

- There are three parts you have to think about around the event loop:

  - the Call Stack
  - Web APIs/the browser
  - an Event Queue

<img src="https://video.udacity-data.com/topher/2017/December/5a31c70d_l4-performance-js-the-dom/l4-performance-js-the-dom.jpg" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Node Interface"/>

- Current synchronous code runs to completion
- Events are processed when the browser isn't busy. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.
- You can think <strong>Promises</strong> as functions that either satisfy `resolve` or `reject` to execute an action and then exeutes a chain of actions in case of resolved or throwing an error in case of rejection.
- Promises are the recommended approach to handle asynchroous work because they are flexible, and have intuitive syntax and easy error handling.

<img src="https://video.udacity-data.com/topher/2020/June/5ee22585_screenshot-2020-06-10-at-3.39.36-pm/screenshot-2020-06-10-at-3.39.36-pm.png" style="display: block;margin-left: auto;margin-right: auto;width: 50%;" alt="Asynchroous JavaScript"/>
