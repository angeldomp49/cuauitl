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

    findAndThen( query: string, callback: any ) : any;

attempt to find a DOM element using the supplied query, if this element is found then it will call the callback.

Also pass the element as param.

## Usage ##

    import {CuahuitlDOM} from '@makechtec/cuahuitl';

    const dom = new CuahuitlDOM();
    
    dom.findAndThen("#root", (element) => console.log(element.textNode));