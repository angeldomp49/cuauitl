import {Validator, CuahuitlDOM, Viewport} from "../index.js";

console.log(Validator);

const validator = new Validator();

const dom = new CuahuitlDOM();

console.log(validator.isValidElement(null));

console.log(Viewport);