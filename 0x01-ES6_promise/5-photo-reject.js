export default function uploadPhoto(filename) {
  // Create a new promise that immediately rejects with an error message
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
