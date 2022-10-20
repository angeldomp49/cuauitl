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

    findOr( query: string, callback: any ) : any;

attempt to find a DOM element using the supplied query, if this element is not found then it will call the callback.