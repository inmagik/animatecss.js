# animatecss.js

Very naive jquery plugin for animation with css classes. Right now compatible [animate.css](http://daneden.github.io/animate.css/), **but will be abstracted soon!**


## API


**animateWithClass(className, options)**

options:
* enter: if true removes .hide class before animation
* exit: if true adds .hide class after animation

returns a Promise, fulfilled when animation ends.

```
$("#something").animateWithClass('fadeIn', { enter:true })

```



**vendorCss(property, value)**

applies the css property with all vendors prefixes ("-moz-", "-o-", "-webkit-", "-ms-")

```
$("#something").vendorCss('animation-duration', '5s');

```