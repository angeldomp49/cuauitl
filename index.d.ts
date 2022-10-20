export declare class CuahuitlDOM {
	validator: Validator;
	constructor();
	isInDOM(query: string): boolean;
	find(query: string): HTMLElement | null;
	findAndThen(query: string, success: any, fail: any): any;
	nodeByQuery(query: string): Node;
}
export declare class Node {
	dom: CuahuitlDOM;
	query: string;
	constructor(query: string);
	isInDOM(): boolean;
	getElement(): HTMLElement | null;
}
export declare class Validator {
	isValidElement(element: any): boolean;
}