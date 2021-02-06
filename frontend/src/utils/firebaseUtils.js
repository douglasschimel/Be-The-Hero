import firebase from "firebase";

const prodConfig = {
  apiKey: "AIzaSyBbvJEN15uw-nQN1YY4x8DAUMbmLR7rgr4",
    authDomain: "app-test-f468c.firebaseapp.com",
    projectId: "app-test-f468c",
    storageBucket: "app-test-f468c.appspot.com",
    messagingSenderId: "747831549596",
    appId: "1:747831549596:web:d5e9384df169eea73b9759",
    measurementId: "G-15SRD5JEKF"
};

const devConfig = {
  apiKey: "AIzaSyBbvJEN15uw-nQN1YY4x8DAUMbmLR7rgr4",
    authDomain: "app-test-f468c.firebaseapp.com",
    projectId: "app-test-f468c",
    storageBucket: "app-test-f468c.appspot.com",
    messagingSenderId: "747831549596",
    appId: "1:747831549596:web:d5e9384df169eea73b9759",
    measurementId: "G-15SRD5JEKF"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

// {
//   "hosting": {
//     "public": "public",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ],
//     "rewrites": [
//       {
//         "source": "**",
//         "destination": "/index.html"
//       }
//     ]
//   }
// }
