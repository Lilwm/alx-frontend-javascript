//The rest parameter syntax allows us to pass an indefinite number of arguments to the function
// and access them as an array inside the function
export default function returnHowManyArguments(...args) {
    return args.length;
  }