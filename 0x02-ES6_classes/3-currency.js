class Currency{
    constructor(code, name){
        if (typeof code !== 'string' || typeof name !== 'string') {
            throw new Error('code and name must be strings');
          }
        
        this._code = code;
        this._name = name;
    }

    get code(){
        return this._code;
    }
    set code(value){
        if (typeof value !== 'string') {
            throw new Error('code must be a string');
          }
        value = this._code;
    }

    get name(){
        return this._name;
    }
    set name(value){
        if (typeof value !== 'string') {
            throw new Error('name must be a string');
          }
        value = this._name;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}