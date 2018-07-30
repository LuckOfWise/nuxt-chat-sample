import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDyS8NOYvGzCeCJW0K8smk28z5QJhcL9_U",
  authDomain: "nuxt-chat-sample.firebaseapp.com",
  databaseURL: "https://nuxt-chat-sample.firebaseio.com",
  projectId: "nuxt-chat-sample",
  storageBucket: "nuxt-chat-sample.appspot.com",
  messagingSenderId: "520905234520"
}

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(config)
  const firestore = firebaseApp.firestore()
  firestore.settings({
    timestampsInSnapshots: true
  })
}

export default firebase.app()
