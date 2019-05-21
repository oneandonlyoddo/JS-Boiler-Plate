import '../scss/style.scss';
import {ExampleClass} from "./ExampleClass";
import * as CONSTANTS from "./Constants";

const init = function(){
    const printer = new ExampleClass(CONSTANTS.HELLO);
    printer.printToConsole();
}

const loop = function(){
    window.requestAnimationFrame(loop);
}

init();
//loop();