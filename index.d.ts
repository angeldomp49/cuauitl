export declare class BreakPoint {
	minWidth: number;
	maxWidth: number;
	name: string;
	constructor(minWidth?: number, maxWidth?: number, name?: string);
}
export declare class ClassListWrapper {
	private validator;
	private container;
	private customDocument;
	constructor(classInStringFormat: string, customDocument: any);
	classList(): DOMTokenList;
	private fromString;
	private createElement;
	private classesToArray;
}
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
	validator: Validator;
	query: string;
	constructor(query: string);
	isInDOM(): boolean;
	getElement(): HTMLElement | null;
}
export declare class Validator {
	isValidElement(element: any): boolean;
	isEmpty(str: string): boolean;
}
export declare class Viewport {
	private breakpoints;
	private validator;
	constructor(breakpoints?: Array<BreakPoint>);
	addBreakpoint(breakPoint: BreakPoint): Viewport;
	removeBreakpointByName(name: string): Viewport;
	currentBreakpoint(): BreakPoint;
}