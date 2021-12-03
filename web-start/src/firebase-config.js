/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDPiQa9CwBSEa75li0VtFHJRlKxcyG_Op8",
  authDomain: "chattest-4abb4.firebaseapp.com",
  projectId: "chattest-4abb4",
  storageBucket: "chattest-4abb4.appspot.com",
  messagingSenderId: "293412805672",
  appId: "1:293412805672:web:fa6cd043feb48bda90691d"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}