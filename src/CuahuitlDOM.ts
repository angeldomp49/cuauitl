import Validator from './Validator';

export default class CuahuitlDOM{

    validator: Validator;

    constructor(){
        this.validator = new Validator();
    }

    findAndThen(query: string, callback: any): any{
        const element = document.querySelector(query);
        const isValid = this.validator.isValidElement(element);
        const isCallback = this.validator.isValidElement(callback);

        if(isValid && isCallback){
            return callback(element);
        }

    }
}