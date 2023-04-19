import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both promises and return an array with the settled results
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then(results => {
      // Map the results to objects with status and value properties
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    })
    .catch(error => {
      // If any promise rejects, return an array with the error
      return [{
        status: 'rejected',
        value: error,
      }];
    });
}
