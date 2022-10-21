
export class Validator{
    isValidElement(element: any): boolean{
        return (typeof element != "undefined") && undefined != element && element != null;
    }

    isEmpty(str: string): boolean{
        return str.trim() === "" || str.trim().length === 0;
    }
}