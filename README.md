Dam Digital Interview Test

Mark Patterson

Completed 23/01/2018

Notes:
======

Disclosure: I did not complete the test at the end of 3 hours. The Staff block layout and card delete functionality were only partly done, so I decided to continue until I had finished all the tasks. Overall, the test took me just over 4 hours to complete.

Bug 1:
======
Changed the column classes col-sm-6 for the product cards to col-sm-12 to make the columns full width on viewports smaller than the small breakpoint.

Bug 2:
======
This bug stumped me for some time. At first I thought the SVG code contained a syntax error, so I used the W3C validator to validate the code, but it passed. So I spent around 20 minutes going through the code seeing if I could spot anything out of place and finally spotted that the url path in the style block was missing the # for the linear gradient Id.

Bug 3:
======
Added an event handler for the favourite button click event in card.js to toggle a class called is-selected on the button. This class is targeted by CSS to change the fill colour of the SVG to red.

Bug 4:
======
Added a Bootstrap modal box to the top of the page which is displayed when clicking on the product card delete button. I added a new JavaScript file called modal.js with an event handler for when the modal was visible. This in turn calls a function which initialises another event handler for the modal delete button which removes the column from the DOM for the selected card.

Bug 5:
======
I have come across this issue in previous projects where a row of floated columns are not of equal height. The solution is to use flexbox to force the columns to expand to the height of the tallest one in the row.

Bug 6:
======
Hid the side navigation on mobile by using display:none in _main-navigation.scss. Then added a media query to display the navigation using the $bp-xs variable (already declared in _variables.scss) for viewports of a minimum width of 480px.

Bug 7:
======
Linked the side navigation to the added Staff and Registration content blocks. Used jQuery to add a scroll effect on click in navigation.js.

Bug 8:
======
Inspected the page source in IE11 using the web inspector tool and saw that the content of the http-equiv meta tag in the page head section was set to "IE8", thereby forcing the browser to render the page in IE8 standards mode. Changing this value to "edge" fixed the issue.

Staff Block:
============
Added missing Staff block using Bootstrap's grid system to layout the content.

Register Block:
===============
Added missing Register block as page footer using Bootstrap's grid system and form components. Added required attribute to input tags to use built-in HTML5 validation.
