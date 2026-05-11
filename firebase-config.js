const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "YOUR_APP_ID"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
