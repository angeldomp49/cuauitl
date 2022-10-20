# CuahuitlDOM #

## Validator class ## 

Constructor:

    new Validator();

Methods:

    isValidElement( element: any) : boolean;

Check if the element is null or undefined, then return false if it is. Else return true.

## CuahuitlDOM class ##

Constructor:

    new CuahuitlDOM();

Methods:

    findAndThen( query: string, success: any, fail: any ) : any;

Attempt to find a DOM element using the supplied query, if this element is found then it will call the success. Also pass the element as param.

Optionally you can pass a fail callback in case of the element is not found.

    isInDOM(query string): boolean;

Check if the element is found in the DOM, then returns a boolean value.

    find(query string): HTMLElement | null;

Same as document.querySelector().

    nodeByQuery(query string): HTMLElement | null;

Returns a Node object.

## Usage ##

    import {CuahuitlDOM} from '@makechtec/cuahuitl';

    const dom = new CuahuitlDOM();
    
    dom.findAndThen("#root", (element) => console.log(element.textNode), () => console.log("not found element"));


## Node class ##

Constructor: 

    new Node(query: string);

The query descriptor.

Methods:

    isInDOM(): boolean;

Same as CuahuitlDOM but use the same query descriptor.

    getElement();

Same as CuahuitlDOM.find but use the same query descriptor.