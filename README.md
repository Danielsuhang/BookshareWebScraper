# BookshareWebScraper
Chrome Extension Web scraper designed to scrape books from Bookshare and makes a POST onto a local Flask Server



## Setup
Create a new directory downloaded folders. Open Google Chrome browser and navigate to `chrome://extensions/`. 
Enable "Developer mode" at the top right.
Click the `Load unpacked` button.
Make sure to refresh the Chrome Extension if any changes are made.

## How it works
Most of Bookshare's novels follow a similar HTML format to display their text. All the book text in the document is encapsulated 
inside of an iframe. Our first step is to extract the text from the iframe and set it equal to a variable called `iframeDocument`.
Text is further encapsulated into `section tags` which seperate the book into chapters. Each section tag delineates a chapter in the book. Each section contains an `h1` tag which represents the chapter in the book, followed by a series of `paragraph tags` which encapsulate the actual content of the books

