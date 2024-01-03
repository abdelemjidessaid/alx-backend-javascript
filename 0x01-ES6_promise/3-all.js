import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([account, response]) => {
      console.log(`${response.body} ${account.firstName} ${account.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
