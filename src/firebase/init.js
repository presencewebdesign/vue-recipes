import firebase from "firebase"

const firebaseConfig = {
   apiKey: "AIzaSyAk6zJyds_MB2944IbN8adqGpCtkm-6AZQ",
   authDomain: "vue-recipes-872e3.firebaseapp.com",
   databaseURL: "https://vue-recipes-872e3.firebaseio.com",
   projectId: "vue-recipes-872e3",
   storageBucket: "vue-recipes-872e3.appspot.com",
   messagingSenderId: "874027343518",
   appId: "1:874027343518:web:8e66e7755b4aec450de58f",
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// Export firestore database
export default firebaseApp.firestore()
