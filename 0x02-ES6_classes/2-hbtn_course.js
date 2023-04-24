class HolbertonCourse{
    constructor(name, length, students){
        if (typeof name !== 'string') {
            throw new TypeError('name must be a string');
          }
        if (typeof length !== 'number') {
            throw new TypeError('length must be a number');
          }
        
        if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
            throw new TypeError('students must be an array of strings');
          }

        this._name = name;
        this._length = length;
        this._students = students
    }
    get name(){
            return this._name
    }
    set name(nameValue){
        if (typeof value !== 'string') {
            throw new TypeError('name must be a string');
          }
    this._name = nameValue;
    }

    get length(){
        return this._length;
    }
    set length(value){
        if (typeof length !='number'){
            throw new TypeError('length must be a number')
        }
        this._length = value;
    }

    get students(){
        return this._students;
    }
    set students(value){
        if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
            throw new TypeError('students must be an array of strings');
          }
          this._students = value.slice();    
    }
}