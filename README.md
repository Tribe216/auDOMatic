![CrossTire Logo](logo.png)

[Link to Demo](./index.html)

auDOMatic is an easy-to-use API  that makes HTML document data retrieval, modifications, and even AJAX calls easy and intuitive.

## Requirements

auDOMatic requires a JavaScript-enabled browser.

## Usage

#### Please go to the [demo page](./index.html) for an intuitive tutorial!

Include the auDOMatic bundled Javascript file in your HTML page.

    <script src="./auDOMatic.js" charset="utf-8"></script>

User the `$au` function to load DOM element(s).  
You can use it as a CSS selector:  

    $au( "#test-html-get" )

Or to load auDOMAtic DOM elements:  

    $au( $au( "#test-html-get" ) )

`html(str)` sets HTML:  
`html()` gets HTML:

    $au('#test-html').html()
    $au('#test-html').html("added content")

`empty()` clears element content:

    $au("#test-html").empty();

`val(str)` sets element value:  
`val()` gets element value:

    $au("#test-html").val();
    $au("#test-html").val("new value!");

`on(event)` attaches a listener:  
`off(event)` detaches a listener:  

    $au( "#test-html-append" ).on( "keyup", doIt)
    $au( "#test-html-append" ).off( "keyup", doIt)

`children()` and `parent` traverse the DOM tree vertically:

    $au( "#test-html-append" ).parent()
    $au( "#test-html-append" ).children()

`find()` finds elements using a selector:

    $au( "<p></p>" ).find("sub_article")

`attr()` gets element attribute:  
`attr(value)` gets element attribute:  

    $au( "<p></p>" ).find("sub_article")

'addClass(class_name)' adds class to element collection:  
'removeClass(class_name)' removes class from element collection:

    $au('#test-attr').addClass('class_name')
    $au('#test-attr').removeClass('class_name')

'aujax(params)' performs an HTMLHttpRequest:

    $au(document).aujax({
      method: "GET",
      url:  "http://example.com"
    }

## About the Author

Bart Mach is a software developer based in New York City.

[Portfolio](http://bartmach.tech)   [GitHub](http://github.com/Tribe216)
[LinkedIn](http://www.linkedin.com/in/b-h-m)
[AngelList](http://angel.co/bart-mach)
