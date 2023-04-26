interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [dynamicProperty: string]: any;
}
class TeacherImpl implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

    constructor(firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        props?: { [key: string]: any }
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullTimeEmployee = fullTimeEmployee;
            this.location = location;

            if (props){
                Object.assign(this, props);
            }
        }
    }
    interface Directors extends Teacher{
        numberOfReports:number;
    }
    function printTeacher(firstName: string, lastName: string): string {
        return firstName.charAt(0) + '. ' + lastName;
    }
        
    interface StudentConstructor {
       new (firstName: string, lastName: string): StudentClass;
    }
    interface StudentInterface {
        workOnHomework(): string;
        displayName(): string;
      }
      
      class StudentClass implements StudentInterface {
        constructor(public firstName: string, public lastName: string) {}
      
        workOnHomework(): string {
          return 'Currently working';
        }
      
        displayName(): string {
          return this.firstName;
        }
      };
      export { printTeacher, StudentClass };
    //   In this implementation, we define two interfaces - StudentConstructor and StudentInterface. The StudentConstructor interface describes the constructor of the StudentClass, which takes two string parameters and returns an instance of the StudentClass. The StudentInterface interface describes the methods of the StudentClass, with a workOnHomework method that returns a string and a displayName method that returns a string.
      
    //   We then define the StudentClass class that implements the StudentInterface interface. The constructor of the StudentClass takes two string parameters, firstName and lastName, and assigns them to public properties of the class with the same names. The workOnHomework method returns the string "Currently working", and the displayName method returns the value of the firstName property.