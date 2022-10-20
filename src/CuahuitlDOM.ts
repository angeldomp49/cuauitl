import Validator from './Validator';

export class CuahuitlDOM{

    validator: Validator;

    constructor(){
        this.validator = new Validator();
    }

    findOr(query: string, callback: any): any{
        const element = document.querySelector(query);

        if(this.validator.isValidElement(element)){
            return element;
        }
        else{
            callback();
        }
    }
}