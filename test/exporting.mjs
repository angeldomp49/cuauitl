import {Validator, CuahuitlDOM} from "../index.js";

console.log(Validator);

const validator = new Validator();

const dom = new CuahuitlDOM();

console.log(validator.isValidElement(null));