import Validator from './Validator';

export default class CuahuitlDOM{

    validator: Validator;

    constructor(){
        this.validator = new Validator();
    }

    findAndThen(query: string, success: any, fail: any): any{
        const element = document.querySelector(query);
        const isValid = this.validator.isValidElement(element);
        const isCallback = this.validator.isValidElement(success);
        const isFail = this.validator.isValidElement(fail);

        if(isValid && isCallback){
            return success(element);
        }
        else{
            if(isFail){
                return fail();
            }
        }

    }
}