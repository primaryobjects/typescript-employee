class IdGenerator {
    static _id: number = 0;

    static next(): number {
        return ++this._id;
    }
}

export default IdGenerator;