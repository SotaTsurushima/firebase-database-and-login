// 初期化ファイル
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvN7op1A_3a-EE-D0CsF2EU5zv71XLxKo",
  authDomain: "fir-tutorial-6ec16.firebaseapp.com",
  projectId: "fir-tutorial-6ec16",
  storageBucket: "fir-tutorial-6ec16.appspot.com",
  messagingSenderId: "1042118124190",
  appId: "1:1042118124190:web:d8193feba4b8dafdad918f"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db 