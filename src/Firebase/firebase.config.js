// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4IkJ_7rkvJHt1E5DOsRj7KJVS4RT3VEY",
  authDomain: "smaqw-f4c70.firebaseapp.com",
  projectId: "smaqw-f4c70",
  storageBucket: "smaqw-f4c70.appspot.com",
  messagingSenderId: "241281914293",
  appId: "1:241281914293:web:3fcb7d67e69317dfb5f5fc",
  measurementId: "G-HETMNZRHMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;