import Validator from "./Validator";

export class Viewport{

	private breakpoints: Array<BreakPoint>;
    private validator: Validator;

    constructor(breakpoints: Array<BreakPoint> = []){
        this.breakpoints = breakpoints;
        this.validator = new Validator();
    }

    addBreakpoint(breakPoint: BreakPoint): Viewport{
        this.breakpoints.push(breakPoint);
        return this;
    }

    removeBreakpointByName(name: string): Viewport{
        this.breakpoints = this.breakpoints.filter( breakpoint => breakpoint.name !== name );
        return this;
    }

	currentBreakpoint(): BreakPoint{
        return this.breakpoints.find( breakpoint => (window.innerWidth <= breakpoint.maxWidth) && (window.innerWidth >= breakpoint.minWidth))!;
	}

}

export class BreakPoint{
    minWidth: number;
    maxWidth: number;
    name: string; 

    constructor(minWidth: number = 0, maxWidth: number = 0, name: string = ""){
        this.minWidth = minWidth; 
        this.maxWidth = maxWidth;
        this.name = name;
    }
}