// handle multiple promises
const { uploadPhoto, createUser } = require('./utils');

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const [photoResponse, userResponse] = results;
      console.log(`${userResponse.firstName} ${userResponse.lastName} ${photoResponse.body}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}

module.exports = handleProfileSignup;
