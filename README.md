## CodeHighlighter 0.4

by [Dan Webb](http://www.danwebb.net/)

CodeHighlighter is a lightweight, unobstrusive and fully configurable script for displaying code examples highlighted in a way similar to the way many text editors highlight code. It weighs in at just under 4K, allows users to configure their own style sets so that you can highlight any language you like and is deployable simply by attaching it to a page with the script tag and adding class names as hooks. It should also play nicely with any other scripts on your page as it has a tiny footprint on the global namespace.

Many thanks to [Dean Edwards](http://dean.edwards.name/) who's star-light behaviour inspired this.

### Deploying the script

1. Add a <script> tag for [codehighligher.js](codeHighlighter.js) and a script tag for each of the code types you want to highlight on your page. At this time there are only very basic style sets for JavaScript, CSS and HTML. But it's easy to make your own for any language you like if you know regular expressions. Let me know if you do and I'll link to them.

2. Add an appropriate class to each <code> element that contains code. 'javascript', 'ruby', 'css' or 'html' will do the trick.

3. Define CSS styles for each code element, the script simply parses the code and wraps a <span> tag around each element with the appropriate class name. You just need to write CSS to style the code the way you want. No programming or weirdness required. See the source of this code as an example.

### Testing

Known to work on:

* IE 5.5+ PC
* Firefox 1.0/Mozilla 1.3 + PC
* Opera 7.23 + PC
* Netscape 7.2 PC

Known to degrade well on:

* IE 5.0 PC
* Safari Mac (Until it supports functions in String#replace())

Any other feedback for any other browser would be greatly apprieciated. Please email Dan Webb at dan[at]danwebb[dot]net. Have a look through the small examples below.

## Creating your own style sets for other languages

Have a look at this guide to [creating style sets](stylesetguide.html).

Cheers,
*Dan*