async function aaa(string) {
    return Promise.resolve(string.toUpperCase())
}
async function bbb(string) {
    return Promise.resolve(string.toUpperCase())
}
async function ccc(string) {
    return Promise.resolve(string.toUpperCase())
}

async function getSampleJson(url) {
    return Promise.resolve(
        await fetch(url)
            .then(response => {
                return Promise.resolve(response.json())
            })
            .then(data => {
                return Promise.resolve(data)
            })
    )
}



let _myObj = { a: 1, b: 2, c: 3 };


const passObj = () => {
    return _myObj;
};

const _baseFields = ['Editor'];

function _setFields(fields) {
    console.log(`add fields ${fields}`);
    return Array.from(new Set([..._baseFields, ...fields]));
}

class ChangeTracker {
    constructor() {
        this._str = 'go go';

        this._fields = _baseFields;
        this._trackedFields = [];
    }

    get str() {
        return this._str;
    }

    get object() {
        return _myObj;
    }

    get fields() {
        return this._fields
    }
    get trackedFields() {
        return this._trackedFields
    }

    set fields(fields) {
        this._fields = _setFields(fields);
    }

    setFields(fields) {
        this._fields = _setFields(fields);
    }

    setTrackedFields(fields) {
        this._trackedFields = Array.from(new Set([...this._trackedFields, ...fields]));
    }

    updateObj(obj) {
        _myObj = obj;
    }

    async init(_url) {
        return await getSampleJson(_url)
    }
}


export default {
    aaa,
    bbb,
    ccc,
    getSampleJson,
    ChangeTracker,
    passObj
};