#Block Formatting Context

## What is Block Formatting Context(BFC)?

- CSS rendering of a web page

- Formatting Context affect layout, ut we create a new block formatting context for the positioning and clearing floats rather than changing layout, because an element that establishes a new block formatting context will contain internal floats, exclude external floats, suppress margin collapsing

## Contain Internal Floats

### "overflow: atuo"

- create a new BFC containing the block. 

- Div becomes a mini-layout insdie our layout. 

- any child element will be contained inside it

- Problem

	- Overflow telling the vrowser how you want to deal with overflowing content

	- occasions in which you'll find get unwanted scrollbars or clipped shadows when you use this property purely to create a BFC

	- not readable for a future developer, so need to comment the code to explain

### "display: flow-root"

- create a new BFC without any other potentially problematic side-effects

- creating sth that acts like the root element <html>

[word cites]

- MDN : block formatting context

