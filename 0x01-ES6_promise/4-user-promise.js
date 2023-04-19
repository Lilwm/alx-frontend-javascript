//returns a resolved promise with the object
function signUpUser(firstName, lastName) {
  // Create a new promise that resolves with an object containing the firstName and lastName values
  return Promise.resolve({ firstName, lastName });
}
