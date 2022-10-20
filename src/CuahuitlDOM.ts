import Validator from './Validator';
import Node from './Node';

export default class CuahuitlDOM{

    validator: Validator;

    constructor(){
        this.validator = new Validator();
    }

    isInDOM(query: string): boolean{
        return this.validator.isValidElement(this.find(query));
    }

    find(query: string): HTMLElement | null{
        return document.querySelector(query);
    }

    findAndThen(query: string, success: any, fail: any): any{
        const element = this.find(query);
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

    nodeByQuery(query: string) :Node{
        return new Node(query);
    }
}