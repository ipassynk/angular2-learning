/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

/**
 * Decorator that provide the component description
 * @param value
 * @returns {function(Function): undefined}
 * @constructor
 */
export default function ComponentDescriptionDecorator(value: string) {
    return function (target: Function) {
        Reflect.defineMetadata("ComponentDescriptionDecorator", value, target);
    }
}