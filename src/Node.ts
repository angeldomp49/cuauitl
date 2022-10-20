import CuahuitlDOM from "./CuahuitlDOM";

export default class Node{

    dom: CuahuitlDOM;
    query: string;

    constructor(query: string){
        this.query = query;
        this.dom = new CuahuitlDOM();
    }

    isInDOM(): boolean{
        return this.dom.isInDOM(this.query);
    }

    getElement(): HTMLElement | null{
        return this.dom.find(this.query);
    }

}