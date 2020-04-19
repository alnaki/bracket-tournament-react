export default class itemCantMoveException extends Error {

    constructor(m: string, ) {
        super("Item can't move." + m);

        Object.setPrototypeOf(this, itemCantMoveException.prototype);
    }
}