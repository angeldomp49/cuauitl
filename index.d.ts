export declare class CuahuitlDOM {
	validator: Validator;
	constructor();
	findAndThen(query: string, success: any, fail: any): any;
}
export declare class Validator {
	isValidElement(element: any): boolean;
}