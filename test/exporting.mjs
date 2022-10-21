import {Validator, CuahuitlDOM, Viewport, ClassListWrapper} from "../index.js";

console.log(Validator);

const validator = new Validator();

const dom = new CuahuitlDOM();

console.log(validator.isValidElement(null));

console.log(Viewport);

const fakeDOM = new JSDOM(`
    <!DOCTYPE html><p>Hello world</p>
`);
