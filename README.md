# ziph-visualizer
### Visit the Website

https://ziph-visualizer.herokuapp.com/

##Usage
Ziph's visualizer takes in a URL and extracts the main body content of the website. It then counts how many times a word in the webpage
occurs. Based on that data, a graph is generated along with a summary on the left that sorts from most occurrences to least occurrences. The main purpose of the webpage is to graphically show [Ziph's law](https://en.wikipedia.org/wiki/Zipf%27s_law).

## Server Side Rendering
This webpage uses expressJS along with EJS to generate the page server-side before sending it to the browser. No http requests are made client side.

## Example Page Generated
![ad](https://raw.githubusercontent.com/Isaac-Tong/ziph-visualizer/master/ss/graphandtext.png)
