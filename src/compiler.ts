function echo(message: string, name: string): string | undefined {
    if (message) {
        return message;
    }
    return;
}

let implicitAny;
implicitAny = 'implicitAny';

let nullableMessage = echo('hi');
let undefinedableMessage: string | undefined= undefined;
let onlyNiull: null = undefined;
let onlyUndefined: undefined = null;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}

const newFunction = echo.apply(null, 'hi');