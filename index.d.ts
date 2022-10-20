export declare class CuahuitlDOM {
	validator: Validator;
	constructor();
	isInDOM(query: string): boolean;
	find(query: string): any;
	findAndThen(query: string, success: any, fail: any): any;
}
export declare class Validator {
	isValidElement(element: any): boolean;
}