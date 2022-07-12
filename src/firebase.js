import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB7Sj0-XOv1v3joOiJxNq78fTkXxYv83Nk",
  authDomain: "chat-app-c6ad5.firebaseapp.com",
  projectId: "chat-app-c6ad5",
  storageBucket: "chat-app-c6ad5.appspot.com",
  messagingSenderId: "821851199839",
  appId: "1:821851199839:web:a4aedf69edda703158feea",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
