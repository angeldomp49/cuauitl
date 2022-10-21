import {Validator} from "./Validator";

export class ClassListWrapper{

    private validator: Validator;
    private container: HTMLElement;
    private customDocument: any;

    constructor(classInStringFormat: string, customDocument: any) { 
        this.validator = new Validator();
        this.customDocument = customDocument;
        this.container = this.createElement("div");
        this.fromString(classInStringFormat);
    }
 
    classList(): DOMTokenList{
        return this.container.classList;
    }

    private fromString(classInStringFormat: string){
        
        this.classesToArray(classInStringFormat)
            .forEach( className => this.container.classList.add(className) );

    }

    private createElement(name: string): HTMLElement{

        if( this.validator.isValidElement(document)){
            console.log("here");
            return document.createElement(name);
        }

        return this.customDocument.createElement(name);

    }

    private classesToArray(classInStringFormat: string): Array<string>{
		return !this.validator.isEmpty(classInStringFormat) ? classInStringFormat.split(' ').filter((className) => className !== '') : [];
	}

}