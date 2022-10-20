import CuahuitlDOM from "./CuahuitlDOM";
import Validator from "./Validator";

export default class Node{

    dom: CuahuitlDOM;
    validator: Validator;
    query: string;

    constructor(query: string){
        this.query = query;
        this.dom = new CuahuitlDOM();
        this.validator = new Validator();
    }

    isInDOM(): boolean{
        return this.dom.isInDOM(this.query);
    }

    getElement(): HTMLElement | null{
        return this.dom.find(this.query);
    }

}