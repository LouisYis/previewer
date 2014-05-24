# [Previewer](http://fengyuanchen.github.io/previewer)

A tool for web developers to quick preview and debug website between different screen (device) width.

- [Documentation](http://fengyuanchen.github.io/previewer)
- [Demo](http://fengyuanchen.github.io/previewer?previewer)


# Screen sizes

- Phone / Extra small screen / 0 ~ 767px / [Preview](http://fengyuanchen.github.io/previewer?previewer=phone)
- Tablet / Small screen / 768px ~ 991px / [Preview](http://fengyuanchen.github.io/previewer?previewer=tablet)
- Laptop / Medium screen / 992px ~ 1199px / [Preview](http://fengyuanchen.github.io/previewer?previewer=laptop)
- Desktop / Large screen  / 1200px ~ ∞ / [Preview](http://fengyuanchen.github.io/previewer?previewer=desktop)


# Getting started

## Quick start

Four quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/previewer/zipball/master).
- Clone the repository: `git clone https://github.com/fengyuanchen/previewer.git`.
- Install with [NPM](http://npmjs.org): `npm install previewer`.
- Install with [Bower](http://bower.io): `bower install previewer`.


## Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<link  href="/path/to/previewer.css" rel="stylesheet">
<script src="/path/to/previewer.js"></script>
```


## Usage

### With url

Add the "previewer" search to the url as `index.html?previewer`, or with a param as `index.html?previewer=tablet`.

### With attribute

Add the "previewer" attribute to `<body>` element as `<body previewer>...</body>`, or with a param as `<body previewer="laptop">...</body>`.

### With method

Basic use as `$("body").previewer()`, or with a param as `$("body").previewer("desktop")`.

**Note:** Only "body" element was supported.


## Param

- type: string
- options: "phone", "tablet", "laptop" and "desktop"
- default: "phone"

Setup with `$("body").previewer(param)`.


## Browser Support

- IE 8+
- Chrome 33+
- Firefox 27+
- Safari 5.1+
- Opera 19+

As a jQuery plugin, you can reference to the [jQuery Browser Support](http://jquery.com/browser-support/).


## [License](https://github.com/fengyuanchen/previewer/blob/master/LICENSE)

Released under the [MIT](http://opensource.org/licenses/mit-license.html) license.
