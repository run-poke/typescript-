"use strict";
function echo(message, name) {
    if (message) {
        return message;
    }
    return;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMessage = echo('hi');
let undefinedableMessage = undefined;
let onlyNiull = undefined;
let onlyUndefined = null;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
const newFunction = echo.apply(null, 'hi');
